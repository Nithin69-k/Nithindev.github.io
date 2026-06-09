import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Command, Search, Github, Linkedin, Mail, FileText, Briefcase, GraduationCap, Award, Code2, Sparkles, ArrowUp, Star, GitFork, Loader2 } from "lucide-react";

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ---------- Loading Screen — particle name reveal ---------- */
export function LoadingScreen({ name = "NITHIN K", duration = 2200 }: { name?: string; duration?: number }) {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), duration);
    const t2 = setTimeout(() => setHidden(true), duration + 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [duration]);
  if (hidden) return null;
  const letters = name.split("");
  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] grid place-items-center bg-[#050816] transition-opacity duration-500 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <StarField count={90} />
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: "radial-gradient(60% 50% at 50% 50%, rgba(124,58,237,0.25), transparent 70%)" }} />
      <NeuralNet className="absolute inset-0 opacity-40" nodes={26} />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #F97316, #7C3AED)", WebkitMask: "radial-gradient(circle, transparent 60%, black 62%)", mask: "radial-gradient(circle, transparent 60%, black 62%)", animation: "spinSlow 2.4s linear infinite" }} />
          <div className="absolute inset-2 rounded-full bg-[#0b1228] grid place-items-center text-xs font-mono text-[#A78BFA]">AI</div>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight flex gap-1">
          {letters.map((c, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                color: c === " " ? "transparent" : "#E6E8F2",
                opacity: 0,
                transform: "translateY(20px) scale(0.6)",
                filter: "blur(8px)",
                animation: `fadeUp 700ms cubic-bezier(.2,.7,.2,1) ${i * 70 + 200}ms forwards`,
              }}
            >
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>
        <Progress duration={duration} />
      </div>
    </div>
  );
}

function Progress({ duration }: { duration: number }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const v = Math.min(1, (t - start) / duration);
      setP(Math.round(v * 100));
      if (v < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);
  return (
    <div className="w-56 flex flex-col items-center gap-2">
      <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${p}%`, background: "linear-gradient(90deg, #7C3AED, #06B6D4, #F97316)" }} />
      </div>
      <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">BOOTING · {p.toString().padStart(3, "0")}%</span>
    </div>
  );
}

/* ---------- Star field background ---------- */
export function StarField({ count = 80, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left: (i * 53.7) % 100,
      top: (i * 31.3) % 100,
      size: 1 + ((i * 7) % 3),
      delay: ((i * 0.27) % 4).toFixed(2),
      dur: 2 + ((i * 0.13) % 4),
    })), [count]);
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s` }}
        />
      ))}
    </div>
  );
}

/* ---------- Neural network background ---------- */
export function NeuralNet({ nodes = 18, className = "" }: { nodes?: number; className?: string }) {
  const pts = useMemo(() => Array.from({ length: nodes }).map((_, i) => ({
    x: ((i * 137.5) % 100),
    y: ((i * 73.3) % 100),
  })), [nodes]);
  const lines = useMemo(() => {
    const out: { a: number; b: number }[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        if (Math.hypot(dx, dy) < 26) out.push({ a: i, b: j });
      }
    }
    return out;
  }, [pts]);
  return (
    <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="nl" x1="0" x2="1">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <line key={i} x1={pts[l.a].x} y1={pts[l.a].y} x2={pts[l.b].x} y2={pts[l.b].y} stroke="url(#nl)" strokeWidth="0.12" />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="0.5" fill="#A78BFA">
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- Custom cursor with spotlight glow ---------- */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (reduced()) return;
    if (window.matchMedia?.("(hover: none)").matches) return;
    document.documentElement.classList.add("has-custom-cursor");
    let tx = 0, ty = 0, rx = 0, ry = 0, dx = 0, dy = 0, raf = 0;
    const loop = () => {
      dx += (tx - dx) * 0.45;
      dy += (ty - dy) * 0.45;
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 4}px, ${dy - 4}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[role=button],input,textarea,select,label")) {
        ringRef.current?.classList.add("is-hot");
      } else {
        ringRef.current?.classList.remove("is-hot");
      }
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);
  return (
    <>
      <div ref={dotRef} aria-hidden className="fixed top-0 left-0 z-[300] w-2 h-2 rounded-full bg-white pointer-events-none mix-blend-difference" />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[299] w-9 h-9 rounded-full pointer-events-none transition-[width,height,opacity,background] duration-200"
        style={{ border: "1px solid rgba(167,139,250,0.6)", boxShadow: "0 0 24px rgba(124,58,237,0.35)" }}
      />
      <style>{`.is-hot{ width:64px !important; height:64px !important; background: radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%); border-color: rgba(6,182,212,0.6) !important; }`}</style>
    </>
  );
}

/* ---------- Typing roles ---------- */
export function TypingRoles({ roles, className = "" }: { roles: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1300);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, roles]);
  return (
    <span className={className}>
      <span className="text-gradient">{text}</span>
      <span className="inline-block w-[2px] h-[1em] align-[-0.15em] ml-1 bg-[#06B6D4] animate-caret" />
    </span>
  );
}

/* ---------- Animated name (per-letter stagger + hover glow) ---------- */
export function AnimatedName({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-300 hover:-translate-y-1 hover:text-[#A78BFA]"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: `fadeUp 700ms cubic-bezier(.2,.7,.2,1) ${i * 55 + 100}ms forwards`,
            textShadow: "0 0 30px rgba(124,58,237,0.25)",
          }}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

/* ---------- Back-to-top ---------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full glass-dark text-white transition-all duration-300 hover:scale-110 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

/* ---------- Command palette (Ctrl/Cmd+K) ---------- */
type CmdItem = { id: string; label: string; hint?: string; href: string; icon: typeof Mail };
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const items: CmdItem[] = useMemo(() => [
    { id: "projects", label: "Go to Projects", href: "#projects", icon: Code2, hint: "section" },
    { id: "experience", label: "Go to Experience", href: "#experience", icon: Briefcase, hint: "section" },
    { id: "skills", label: "Go to Skills", href: "#skills", icon: Sparkles, hint: "section" },
    { id: "education", label: "Go to Education", href: "#education", icon: GraduationCap, hint: "section" },
    { id: "certifications", label: "Go to Certifications", href: "#certifications", icon: Award, hint: "section" },
    { id: "contact", label: "Go to Contact", href: "#contact", icon: Mail, hint: "section" },
    { id: "resume", label: "Download Resume", href: "/Nithin_K_Resume.pdf", icon: FileText, hint: "PDF" },
    { id: "github", label: "Open GitHub", href: "https://github.com/Nithin69-k", icon: Github, hint: "external" },
    { id: "linkedin", label: "Open LinkedIn", href: "https://linkedin.com/", icon: Linkedin, hint: "external" },
    { id: "email", label: "Email Nithin", href: "mailto:nithingowda490@gmail.com", icon: Mail, hint: "email" },
  ], []);
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[180] grid place-items-start justify-center pt-[12vh] px-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-xl rounded-2xl glass-dark overflow-hidden animate-fade-up">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search className="w-4 h-4 text-white/60" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/60">ESC</kbd>
        </div>
        <ul className="max-h-[50vh] overflow-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-sm text-white/50 text-center">No results</li>
          )}
          {filtered.map((it) => (
            <li key={it.id}>
              <a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                <it.icon className="w-4 h-4 text-[#A78BFA]" />
                <span className="flex-1">{it.label}</span>
                {it.hint && <span className="text-[10px] font-mono text-white/40">{it.hint}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Tech Universe (orbit) ---------- */
export function TechUniverse({ items }: { items: { name: string; ring: 0 | 1 | 2; color?: string }[] }) {
  const rings = [120, 190, 260];
  return (
    <div className="relative mx-auto w-full max-w-xl aspect-square">
      <div aria-hidden className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 60%)" }} />
      {[0, 1, 2].map((r) => (
        <div key={r} aria-hidden className="absolute left-1/2 top-1/2 rounded-full border border-white/10" style={{ width: rings[r] * 2, height: rings[r] * 2, transform: "translate(-50%,-50%)" }} />
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full grid place-items-center text-center text-xs font-display font-semibold text-white"
        style={{ background: "radial-gradient(circle at 30% 30%, #7C3AED, #06B6D4 70%)", boxShadow: "0 0 60px rgba(124,58,237,0.55)" }}>
        My Tech<br />Universe
      </div>
      {items.map((it, i) => {
        const ringItems = items.filter((x) => x.ring === it.ring);
        const idx = ringItems.indexOf(it);
        const total = ringItems.length;
        const angle = (idx / total) * 360;
        const r = rings[it.ring];
        const rev = it.ring === 1;
        return (
          <div
            key={it.name}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0, height: 0,
              animation: `${rev ? "orbit-rev" : "orbit"} ${22 + it.ring * 8}s linear infinite`,
              animationDelay: `-${(idx / total) * (22 + it.ring * 8)}s`,
              ["--r" as never]: `${r}px`,
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full glass-dark text-[11px] font-mono text-white whitespace-nowrap hover:scale-110 transition" title={it.name}>
              {it.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Timeline ---------- */
export type TimelineEntry = { tag: string; title: string; org: string; period: string; bullets?: string[] };
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-8 md:pl-10">
      <div aria-hidden className="absolute left-2 md:left-3 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, #7C3AED, #06B6D4, #F97316)" }} />
      <div className="space-y-8">
        {entries.map((e, i) => (
          <div key={i} className="relative">
            <span aria-hidden className="absolute -left-[26px] md:-left-[30px] top-2 w-3 h-3 rounded-full bg-[#7C3AED] animate-pulse-glow" />
            <div className="rounded-2xl glass p-5 md:p-6 hover-lift">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#06B6D4]">{e.tag}</span>
                <span className="font-mono text-[11px] text-white/50">{e.period}</span>
              </div>
              <h3 className="font-display text-lg mt-1 text-white">{e.title}</h3>
              <p className="text-sm text-white/60">{e.org}</p>
              {e.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm text-white/70 flex gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#A78BFA] shrink-0" />{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Testimonials marquee ---------- */
export function Testimonials({ items }: { items: { quote: string; author: string; role: string }[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div aria-hidden className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
      <div aria-hidden className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
        {doubled.map((t, i) => (
          <div key={i} className="w-[320px] md:w-[380px] shrink-0 rounded-2xl glass p-5">
            <p className="text-sm text-white/80 leading-relaxed">"{t.quote}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full grid place-items-center text-xs font-semibold text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>{t.author.split(" ").map(s=>s[0]).slice(0,2).join("")}</div>
              <div className="text-xs">
                <div className="text-white">{t.author}</div>
                <div className="text-white/50">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- GitHub dashboard (live from public API) ---------- */
type Repo = { id: number; name: string; html_url: string; description: string | null; stargazers_count: number; forks_count: number; language: string | null };
export function GitHubDashboard({ user }: { user: string }) {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`)
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data: Repo[]) => { if (active) setRepos(data); })
      .catch((e) => { if (active) setErr(String(e)); });
    return () => { active = false; };
  }, [user]);

  const totals = useMemo(() => {
    if (!repos) return null;
    const stars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const forks = repos.reduce((s, r) => s + r.forks_count, 0);
    const langMap = new Map<string, number>();
    for (const r of repos) if (r.language) langMap.set(r.language, (langMap.get(r.language) || 0) + 1);
    const langs = [...langMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
    return { stars, forks, count: repos.length, langs };
  }, [repos]);

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-1 rounded-2xl glass p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full grid place-items-center bg-white/10"><Github className="w-5 h-5 text-white" /></div>
          <div>
            <div className="font-display text-lg text-white">@{user}</div>
            <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer" className="text-xs text-[#06B6D4] hover:underline">github.com/{user}</a>
          </div>
        </div>
        {!totals && !err && <div className="flex items-center gap-2 text-sm text-white/60"><Loader2 className="w-4 h-4 animate-spin" /> Loading stats…</div>}
        {err && <div className="text-sm text-white/60">Couldn't load live stats.</div>}
        {totals && (
          <>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Stat n={totals.count} label="Repos" />
              <Stat n={totals.stars} label="Stars" />
              <Stat n={totals.forks} label="Forks" />
            </div>
            <div className="mt-5">
              <div className="kicker mb-2">Top languages</div>
              <div className="flex flex-wrap gap-2">
                {totals.langs.map(([l, n]) => (
                  <span key={l} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-white/80">{l} · {n}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
        {repos?.slice(0, 6).map((r) => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="rounded-2xl glass p-5 hover-lift hover:border-[#7C3AED] transition block">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display text-white truncate">{r.name}</h4>
              <div className="flex items-center gap-3 text-[11px] font-mono text-white/60">
                <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" />{r.stargazers_count}</span>
                <span className="inline-flex items-center gap-1"><GitFork className="w-3 h-3" />{r.forks_count}</span>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-1 line-clamp-2">{r.description || "No description."}</p>
            {r.language && <span className="mt-3 inline-block text-[10px] font-mono text-[#A78BFA]">● {r.language}</span>}
          </a>
        ))}
        {!repos && !err && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl glass p-5 h-28 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl text-white">{n}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">{label}</div>
    </div>
  );
}

/* ---------- Glass label + input ---------- */
export function GlassField({ label, type = "text", as = "input", name, required }: { label: string; type?: string; as?: "input" | "textarea"; name: string; required?: boolean }) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const Cmp: any = as;
  return (
    <label className="relative block">
      <Cmp
        name={name}
        type={type}
        required={required}
        value={val}
        onChange={(e: any) => setVal(e.target.value)}
        rows={as === "textarea" ? 4 : undefined}
        className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent outline-none transition focus:border-[#7C3AED] focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.15)]"
        placeholder={label}
      />
      <span className={`pointer-events-none absolute left-4 top-3.5 text-xs text-white/50 transition-all ${filled ? "top-1.5 text-[10px] uppercase tracking-[0.18em] text-[#A78BFA]" : "peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[#A78BFA]"}`}>
        {label}
      </span>
    </label>
  );
}

export function CmdHint() {
  return (
    <div className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono text-white/50">
      <kbd className="rounded bg-white/10 px-1.5 py-0.5 inline-flex items-center gap-1"><Command className="w-3 h-3" />K</kbd>
      command palette
    </div>
  );
}

/* re-export helper */
export { ReactNode };