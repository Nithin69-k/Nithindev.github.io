import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ---------- Scroll progress bar (top of viewport) ---------- */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? scrolled / max : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div
        ref={ref}
        style={{ transform: "scaleX(0)", transformOrigin: "0 50%", background: "var(--gradient-glow)" }}
        className="h-full w-full will-change-transform transition-transform duration-150 ease-out shadow-[0_0_12px_oklch(0.86_0.17_92/0.6)]"
      />
    </div>
  );
}

/* ---------- Cursor glow that follows the mouse ---------- */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) return;
    // Hide on touch devices
    const isTouch = window.matchMedia?.("(hover: none)").matches;
    if (isTouch) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[400px] h-[400px] rounded-full opacity-0 mix-blend-multiply will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.86 0.17 92 / 0.22) 0%, oklch(0.86 0.17 92 / 0.08) 35%, transparent 70%)",
        filter: "blur(8px)",
        transition: "opacity 300ms",
      }}
    />
  );
}

/* ---------- Magnetic button — element drifts toward the cursor ---------- */
export function Magnetic({
  children,
  className = "",
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return (
    <div
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- 3D tilt card wrapper ---------- */
export function Tilt({
  children,
  className = "",
  max = 8,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) return;
    const isTouch = window.matchMedia?.("(hover: none)").matches;
    if (isTouch) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);
  return (
    <div
      ref={ref}
      style={{ transformStyle: "preserve-3d", transition: "transform 300ms ease-out", ...style }}
      className={`tilt-card relative ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Count-up number that triggers on scroll ---------- */
export function CountUp({
  to,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) {
      setV(to);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref} className={className}>
      {v}
      {suffix}
    </span>
  );
}

/* ---------- Aurora / mesh gradient background layer ---------- */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-1/3 left-1/4 w-[60vw] h-[60vw] rounded-full bg-[oklch(0.86_0.17_92/0.55)] blur-3xl animate-aurora-a will-change-transform" />
      <div className="absolute top-0 -right-1/4 w-[55vw] h-[55vw] rounded-full bg-[oklch(0.78_0.18_65/0.4)] blur-3xl animate-aurora-b will-change-transform" />
      <div className="absolute -bottom-1/3 left-0 w-[55vw] h-[55vw] rounded-full bg-[oklch(0.92_0.12_95/0.45)] blur-3xl animate-aurora-c will-change-transform" />
      <div className="absolute inset-0 noise-overlay opacity-[0.035]" />
    </div>
  );
}

/* ---------- Floating particles (tiny, perf-friendly) ---------- */
export function Particles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = 2 + ((i * 7) % 4);
        const delay = (i * 0.4) % 6;
        const dur = 8 + ((i * 3) % 10);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40 animate-particle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
}