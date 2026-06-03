import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ArrowRight, Sparkles, Code2, Brain, BarChart3, Smartphone, Database, Download } from "lucide-react";
import { Reveal, useParallax } from "@/components/Reveal";
import portrait from "@/assets/nithin-portrait.png.asset.json";
import projChurn from "@/assets/project-churn.jpg";
import projMovie from "@/assets/project-movie.jpg";
import projParking from "@/assets/project-parking.jpg";
import projShilpakala from "@/assets/project-shilpakala.jpg";
import certMindmatrix from "@/assets/certs/mindmatrix.jpg.asset.json";
import certIntellipaat from "@/assets/certs/intellipaat.jpg.asset.json";
import certPublication from "@/assets/certs/publication.jpg.asset.json";
import certPython from "@/assets/certs/python.jpg.asset.json";
import certLinux from "@/assets/certs/linux.jpg.asset.json";
import certAi from "@/assets/certs/ai.jpg.asset.json";
import certPowerbi from "@/assets/certs/powerbi.jpg.asset.json";
import certSql from "@/assets/certs/sql.jpg.asset.json";
import certMssql from "@/assets/certs/mssql.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin K — AI Engineer & Data Scientist" },
      { name: "description", content: "Portfolio of Nithin K — AI Engineer, Data Scientist, and Software Developer building production ML pipelines and Generative AI solutions." },
      { property: "og:title", content: "Nithin K — AI Engineer & Data Scientist" },
      { property: "og:description", content: "Production ML pipelines, Generative AI integrations, and full-stack software craftsmanship." },
      { property: "og:url", content: "https://nithingowda.lovable.app/" },
      { property: "og:image", content: `https://nithingowda.lovable.app${portrait.url}` },
      { property: "twitter:image", content: `https://nithingowda.lovable.app${portrait.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://nithingowda.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nithin K",
          jobTitle: "AI Engineer & Data Scientist",
          email: "mailto:nithingowda490@gmail.com",
          telephone: "+91-8217264796",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          url: "https://nithingowda.lovable.app/",
          sameAs: [
            "https://github.com/Nithin69-k",
            "https://linkedin.com/",
          ],
          knowsAbout: [
            "Machine Learning",
            "Deep Learning",
            "Generative AI",
            "Data Science",
            "Python",
            "Power BI",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Brain, title: "AI & Predictive Solutions", desc: "Deep neural architectures and predictive engines for real business outcomes." },
  { icon: Sparkles, title: "Generative AI Integration", desc: "Infusing LLMs and agentic patterns into modern software workflows." },
  { icon: BarChart3, title: "Data Analysis & BI", desc: "Power BI & Tableau dashboards that turn raw data into decisions." },
  { icon: Code2, title: "Machine Learning Models", desc: "Custom supervised classification and regression pipelines." },
  { icon: Smartphone, title: "Android Development", desc: "Streamlined mobile-first experiences with AI built in." },
  { icon: Database, title: "Data Engineering", desc: "Feature engineering, ETL, and production-ready ML pipelines." },
];

const skills = {
  "Core AI & DS": ["Machine Learning", "Deep Learning", "PyTorch", "Generative AI", "Prompt Engineering"],
  "Languages": ["Python", "SQL", "PostgreSQL"],
  "Data Stack": ["Pandas", "NumPy", "Scikit-Learn", "XGBoost"],
  "BI & Analytics": ["Power BI", "Tableau"],
  "Systems": ["Linux", "Git", "Streamlit", "Android"],
};

const projects = [
  { img: projChurn, title: "Telecom Customer Churn Prediction", tech: "Python · Scikit-learn · XGBoost · Random Forest", desc: "End-to-end framework with EDA and advanced classification to identify high-risk customers and enable retention.", link: "https://github.com/Nithin69-k/Telecom-Customer-Churn-Prediction-" },
  { img: projMovie, title: "Movie Recommendation System", tech: "Python · Surprise · SVD · Collaborative Filtering", desc: "Personalized content predictor using Singular Value Decomposition for distinct user profiles.", link: "https://github.com/Nithin69-k/Movie-Recommendation-System" },
  { img: projParking, title: "Parking Space Management System", tech: "Python · SQL · Streamlit", desc: "Real-time slot allocation with persistence and historical analytics — supported by a peer-reviewed publication.", link: "https://github.com/Nithin69-k/Parking-Space-Management-System" },
  { img: projShilpakala, title: "Shilpakala", tech: "HTML5 · CSS3 · JavaScript", desc: "Online visual gallery highlighting cultural heritage artwork and digital collections.", link: "https://github.com/Nithin69-k/Shilpa-Kala" },
];

const experience = [
  { role: "AI & Android App Development Intern", org: "MindMatrixEd", period: "Feb 2026 – Apr 2026", bullets: ["Architected Generative AI components into mobile app features.", "Streamlined model inferences across active user sessions."], letter: certMindmatrix.url, letterLabel: "View offer letter" },
  { role: "Data Scientist Intern", org: "Intellipaat", period: "Sep 2025 – Feb 2026", bullets: ["Engineered transformations and trained supervised ML models (regression & classification).", "Ran exploratory analysis on industrial datasets to extract business insights."], letter: certIntellipaat.url, letterLabel: "View offer letter" },
  { role: "Data Science & AI Program", org: "Intellipaat (IIT Indore)", period: "Mar 2025 – Present", bullets: ["Hands-on training in applied statistics, pipelines, evaluation, and deployment."] },
];

const certs: { label: string; url: string }[] = [
  { label: "Research Paper Publication — IJCRT, Sep 2025", url: certPublication.url },
  { label: "Power BI Course — Intellipaat", url: certPowerbi.url },
  { label: "Python Certification — Intellipaat", url: certPython.url },
  { label: "Artificial Intelligence Course — Intellipaat", url: certAi.url },
  { label: "Linux Training — Intellipaat", url: certLinux.url },
  { label: "SQL Course — Intellipaat", url: certSql.url },
  { label: "Microsoft SQL Certification — Intellipaat", url: certMssql.url },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <SkillsSection />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-4 z-50 px-4 animate-fade-up">
      <div className="mx-auto max-w-6xl rounded-full bg-[var(--ink)] text-[var(--ink-foreground)] shadow-[var(--shadow-card)] px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-primary text-primary-foreground text-xs font-bold">N</span>
          <span className="text-sm">Nithin K</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="/Nithin_K_Resume.pdf" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white px-3.5 py-1.5 text-xs font-medium transition">
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110 transition shadow-[0_8px_24px_-8px_oklch(0.78_0.18_70/0.6)]">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const blob1 = useParallax<HTMLDivElement>(0.12);
  const blob2 = useParallax<HTMLDivElement>(-0.08);
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft hero gradient + animated yellow blob */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div ref={blob1} aria-hidden className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-primary/30 blur-3xl animate-blob -z-10 will-change-transform" />
      <div ref={blob2} aria-hidden className="absolute top-40 right-0 w-[360px] h-[360px] rounded-full bg-primary/20 blur-3xl animate-blob delay-300 -z-10 will-change-transform" />

      <div className="mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] animate-fade-up delay-100">
              <span className="text-shimmer">Nithin K</span>
              <span className="block mt-2">
                AI Engineer & <span className="text-primary">Data Scientist</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-up delay-200">
              Bridging data science theory and software engineering practice — building production-ready ML pipelines and integrating Generative AI into real applications.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-3 text-sm font-medium hover:bg-[var(--ink)]/90 transition">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45"><ArrowRight className="w-3.5 h-3.5" /></span>
                Explore my work
              </a>
              <a href="/Nithin_K_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:brightness-110 transition shadow-[var(--shadow-glow)]">
                <Download className="w-4 h-4" /> Open Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-5 py-3 text-sm font-medium hover:border-primary transition">
                Contact me
              </a>
            </div>
          </div>

          {/* Portrait — top-right empty space */}
          <div className="relative flex justify-center md:justify-end animate-fade-up delay-200">
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl animate-blob" />
              <div aria-hidden className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-primary/40 to-transparent animate-spin-slow" />
              <img
                src={portrait.url}
                alt="Nithin K"
                width={420}
                height={420}
                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-white shadow-[var(--shadow-glow)] animate-float"
              />
              <div className="absolute -bottom-3 -left-3 rounded-full bg-[var(--ink)] text-white text-[10px] uppercase tracking-widest px-3 py-1.5 shadow-lg animate-fade-up delay-500">
                AI · ML · GenAI
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 text-sm animate-fade-up delay-500">
          <span className="text-muted-foreground mr-2">Follow Nithin online —</span>
          <SocialPill href="https://github.com/Nithin69-k" icon={Github} label="GitHub" />
          <SocialPill href="https://linkedin.com/" icon={Linkedin} label="LinkedIn" />
          <SocialPill href="https://instagram.com/" icon={Instagram} label="Instagram" />
        </div>
      </div>

      {/* Dark vision/mission band like reference */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--ink-foreground)] p-8 md:p-12 shadow-[var(--shadow-card)] relative overflow-hidden animate-fade-up">
          <div aria-hidden className="absolute -top-10 -right-10 text-[160px] font-black tracking-tighter text-white/5 select-none leading-none">NITHIN</div>
          <div className="grid md:grid-cols-2 gap-10 relative">
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Nithin's Vision
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                A versatile generalist building intelligent systems — from rigorous data analysis to deployed Generative AI features that ship real value.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" /> Nithin's Mission
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Backed by IIT Indore's 16-month applied Data Science & AI certification, I focus on production-grade ML and seamless LLM integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialPill({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm hover:border-primary transition">
      <Icon className="w-4 h-4" /> {label}
    </a>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{tag}</div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="What I do" title="Core capabilities & services" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-primary/60 transition">
            <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between mb-10 gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Featured Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From concept to deployment</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="block">
            <a href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift hover:border-primary/60 transition block">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.img} alt={`${p.title} — project preview`} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground shrink-0 group-hover:rotate-45 transition"><ExternalLink className="w-4 h-4" /></span>
              </div>
              <p className="text-xs text-primary mt-2 font-mono">{p.tech}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
            </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Experience" title="Work history" />
      <div className="space-y-4">
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 100} className="rounded-2xl border border-border bg-card p-6 md:p-8 hover-lift hover:border-primary/60 transition">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-semibold text-lg">{e.role}</h3>
              <span className="text-xs text-primary font-mono">{e.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{e.org}</p>
            <ul className="space-y-1.5">
              {e.bullets.map((b) => (
                <li key={b} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {e.letter ? (
              <a href={e.letter} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                <ExternalLink className="w-3.5 h-3.5" /> {e.letterLabel ?? "View letter"}
              </a>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Technical Inventory" title="Skills & tools" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([cat, list], i) => (
          <Reveal key={cat} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 hover-lift transition">
            <h3 className="text-sm font-semibold text-primary mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1 text-xs hover:border-primary hover:text-primary transition">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { title: "Data Science & AI Certification (16 Months)", org: "IIT Indore (via Intellipaat)", period: "2025 – 2026" },
    { title: "Bachelor of Engineering — Computer Science", org: "Bangalore Technological Institute (VTU)", period: "2022 – 2026 · CGPA 7.5" },
    { title: "Pre-University (PCMB)", org: "Krupanidhi Pre-University College", period: "2021 – 2022" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Education" title="Academic background" />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <Reveal key={i.title} delay={idx * 90} className="rounded-2xl border border-border bg-card p-6 hover-lift transition">
            <p className="text-xs text-primary font-mono mb-3">{i.period}</p>
            <h3 className="font-semibold mb-1">{i.title}</h3>
            <p className="text-sm text-muted-foreground">{i.org}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Certifications" title="Credentials & publications" />
      <div className="grid sm:grid-cols-2 gap-3">
        {certs.map((c, i) => (
          <Reveal key={c.label} delay={i * 60} className="block">
          <a href={c.url} target="_blank" rel="noreferrer" className="group rounded-xl border border-border bg-surface px-5 py-4 text-sm flex items-center gap-3 hover:border-primary/60 transition">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="flex-1">{c.label}</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition" />
          </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-[var(--ink)] text-[var(--ink-foreground)] p-8 md:p-14 relative overflow-hidden shadow-[var(--shadow-card)]">
        <div aria-hidden className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-primary/25 blur-3xl animate-blob -z-0" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something <span className="text-primary">intelligent?</span></h2>
            <p className="mt-4 text-white/70">Whether it's a predictive model, a GenAI feature, or a full data pipeline — let's talk.</p>
            <a href="mailto:nithingowda490@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition shadow-[var(--shadow-glow)]">
              <Mail className="w-4 h-4" /> Contact Nithin
            </a>
          </div>
          <div className="space-y-3 text-sm relative">
            <ContactRow icon={Mail} label="nithingowda490@gmail.com" href="mailto:nithingowda490@gmail.com" />
            <ContactRow icon={Phone} label="+91 8217264796" href="tel:+918217264796" />
            <ContactRow icon={MapPin} label="Bengaluru, Karnataka, India" />
            <ContactRow icon={Linkedin} label="LinkedIn Profile" href="https://linkedin.com/" />
            <ContactRow icon={Github} label="GitHub Repository" href="https://github.com/Nithin69-k" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 hover:border-primary/60 hover:bg-white/10 transition">
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/20 text-primary"><Icon className="w-4 h-4" /></span>
      <span>{label}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nithin K. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Nithin69-k" target="_blank" rel="noreferrer" aria-label="Nithin K on GitHub" className="hover:text-foreground"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="Nithin K on LinkedIn" className="hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Nithin K on Instagram" className="hover:text-foreground"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
