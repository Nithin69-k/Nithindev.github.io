import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ArrowRight, Sparkles, Code2, Brain, BarChart3, Smartphone, Database, Download } from "lucide-react";
import heroAi from "@/assets/hero-ai.jpg";
import avatar from "@/assets/avatar.jpg";
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
  { img: projChurn, title: "Telecom Customer Churn Prediction", tech: "Python · Scikit-learn · XGBoost · Random Forest", desc: "End-to-end framework with EDA and advanced classification to identify high-risk customers and enable retention.", link: "#" },
  { img: projMovie, title: "Movie Recommendation System", tech: "Python · Surprise · SVD · Collaborative Filtering", desc: "Personalized content predictor using Singular Value Decomposition for distinct user profiles.", link: "#" },
  { img: projParking, title: "Parking Space Management System", tech: "Python · SQL · Streamlit", desc: "Real-time slot allocation with persistence and historical analytics — supported by a peer-reviewed publication.", link: "#" },
  { img: projShilpakala, title: "Shilpakala", tech: "HTML5 · CSS3 · JavaScript", desc: "Online visual gallery highlighting cultural heritage artwork and digital collections.", link: "#" },
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
    <div className="min-h-screen bg-background text-foreground antialiased">
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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm">N</span>
          <span>Nithin K</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="/Nithin_K_Resume.pdf" download className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium hover:border-primary transition">
            <Download className="w-4 h-4" /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Contact <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <img src={heroAi} alt="" width={1280} height={896} className="absolute inset-0 -z-10 w-full h-full object-cover opacity-20" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available for opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          Nithin K{" "}
          <img src={avatar} alt="Nithin K" width={64} height={64} className="inline-block w-14 h-14 md:w-16 md:h-16 rounded-full align-middle ring-2 ring-primary mx-2" />
          <span className="block text-muted-foreground mt-2">
            AI Engineer & <span className="text-primary">Data Scientist</span>
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Bridging data science theory and software engineering practice — building production-ready ML pipelines and integrating Generative AI into real applications.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
            Explore my work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/Nithin_K_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/40 px-5 py-3 text-sm font-medium hover:bg-primary/20 transition">
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium hover:bg-surface transition">
            Contact me
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-muted-foreground mr-2">Follow Nithin online —</span>
          <SocialPill href="https://github.com/" icon={Github} label="GitHub" />
          <SocialPill href="https://linkedin.com/" icon={Linkedin} label="LinkedIn" />
          <SocialPill href="https://instagram.com/" icon={Instagram} label="Instagram" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-10 shadow-[var(--shadow-card)]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A versatile generalist building intelligent systems — from rigorous data analysis to deployed Generative AI features that ship real value.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" /> Mission
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 hover:bg-surface-elevated transition">
            <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
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
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 transition">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
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
        {experience.map((e) => (
          <div key={e.role} className="rounded-2xl border border-border bg-surface p-6 md:p-8 hover:border-primary/50 transition">
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
          </div>
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
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-primary mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
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
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs text-primary font-mono mb-3">{i.period}</p>
            <h3 className="font-semibold mb-1">{i.title}</h3>
            <p className="text-sm text-muted-foreground">{i.org}</p>
          </div>
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
        {certs.map((c) => (
          <div key={c} className="rounded-xl border border-border bg-surface px-5 py-4 text-sm flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-hero)" }} />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something intelligent?</h2>
            <p className="mt-4 text-muted-foreground">Whether it's a predictive model, a GenAI feature, or a full data pipeline — let's talk.</p>
            <a href="mailto:nithingowda490@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              <Mail className="w-4 h-4" /> Contact Nithin
            </a>
          </div>
          <div className="space-y-3 text-sm">
            <ContactRow icon={Mail} label="nithingowda490@gmail.com" href="mailto:nithingowda490@gmail.com" />
            <ContactRow icon={Phone} label="+91 8217264796" href="tel:+918217264796" />
            <ContactRow icon={MapPin} label="Bengaluru, Karnataka, India" />
            <ContactRow icon={Linkedin} label="LinkedIn Profile" href="https://linkedin.com/" />
            <ContactRow icon={Github} label="GitHub Repository" href="https://github.com/" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 hover:border-primary/50 transition">
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary"><Icon className="w-4 h-4" /></span>
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
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
