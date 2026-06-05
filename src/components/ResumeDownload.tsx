import { useState } from "react";
import { Download, FileText, Check, Loader2 } from "lucide-react";

type Variant = "primary" | "pill";

interface Props {
  variant?: Variant;
  fileUrl?: string;
  fileName?: string;
  label?: string;
  className?: string;
}

/**
 * Polished resume download button with an animated progress indicator.
 * Falls back gracefully: if the Fetch + Blob path fails (offline, CORS,
 * unsupported browser) it triggers a normal anchor download so users
 * still get the file. A visually-hidden status region announces progress
 * to screen readers.
 */
export function ResumeDownload({
  variant = "primary",
  fileUrl = "/Nithin_K_Resume.pdf",
  fileName = "Nithin_K_Resume.pdf",
  label = "Download Resume",
  className = "",
}: Props) {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const triggerFallback = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow modifier-clicks / middle-click to use the native anchor.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();

    if (state === "loading") return;
    setState("loading");
    setProgress(0);

    try {
      const res = await fetch(fileUrl);
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const total = Number(res.headers.get("content-length")) || 0;
      const reader = res.body.getReader();
      const chunks: Uint8Array[] = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          received += value.length;
          if (total > 0) {
            setProgress(Math.min(99, Math.round((received / total) * 100)));
          } else {
            // Unknown size — fake gentle progress so the bar still moves.
            setProgress((p) => Math.min(95, p + 5));
          }
        }
      }

      const blob = new Blob(chunks as BlobPart[], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setProgress(100);
      setState("done");
      setTimeout(() => {
        setState("idle");
        setProgress(0);
      }, 2000);
    } catch {
      setState("error");
      triggerFallback();
      setTimeout(() => {
        setState("idle");
        setProgress(0);
      }, 2500);
    }
  };

  const isLoading = state === "loading";
  const isDone = state === "done";

  const base =
    variant === "primary"
      ? "relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:brightness-110 transition shadow-[var(--shadow-glow)] overflow-hidden disabled:opacity-80"
      : "relative inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white px-3.5 py-1.5 text-xs font-medium transition overflow-hidden";

  const statusText = isLoading
    ? `Downloading resume — ${progress}%`
    : isDone
    ? "Resume downloaded"
    : state === "error"
    ? "Direct download started"
    : "";

  return (
    <span className={`inline-block ${className}`}>
      <a
        href={fileUrl}
        download={fileName}
        onClick={handleClick}
        aria-label={`${label} (PDF)`}
        aria-busy={isLoading}
        className={base}
      >
        {/* Progress fill */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 bg-white/25 transition-[width] duration-200 ease-out"
          style={{ width: `${isLoading || isDone ? progress : 0}%` }}
        />
        <span className="relative flex items-center gap-2">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isDone ? (
            <Check className="w-4 h-4" />
          ) : variant === "primary" ? (
            <FileText className="w-4 h-4" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
          <span>
            {isLoading ? `${progress}%` : isDone ? "Downloaded" : label}
          </span>
          {!isLoading && !isDone && variant === "primary" && (
            <Download className="w-4 h-4 opacity-80" />
          )}
        </span>
      </a>
      {/* Accessible fallback — always present, visually hidden, announces state */}
      <span role="status" aria-live="polite" className="sr-only">
        {statusText}
      </span>
      <noscript>
        <a href={fileUrl} download={fileName} className="underline text-primary">
          {label} (PDF)
        </a>
      </noscript>
    </span>
  );
}