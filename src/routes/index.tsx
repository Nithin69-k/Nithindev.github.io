import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ArrowRight, Sparkles, Code2, Brain, BarChart3, Smartphone, Database, Cpu, Send, Quote, Trophy, FlaskConical } from "lucide-react";
import { Reveal, useParallax } from "@/components/Reveal";
import { ScrollProgress, Magnetic, Tilt, CountUp, Aurora, Particles } from "@/components/Effects";
import { ResumeDownload } from "@/components/ResumeDownload";
import { LoadingScreen, StarField, NeuralNet, CustomCursor, TypingRoles, AnimatedName, BackToTop, CommandPalette, TechUniverse, Timeline, Testimonials, GitHubDashboard, GlassField, CmdHint } from "@/components/Premium";
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
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin K — AI Engineer & Data Scientist" },
      { name: "description", content: "Portfolio of Nithin K — Android Developer, AI Engineer, and Data Scientist building production ML pipelines and Generative AI experiences." },
      { property: "og:title", content: "Nithin K — AI Engineer & Data Scientist" },
      { property: "og:description", content: "Production ML pipelines, Generative AI integrations, and Android development by Nithin K." },
      { property: "og:url", content: "https://nithingowda.lovable.app/" },
      { property: "og:image", content: `https://nithingowda.lovable.app${portrait.url}` },
      { property: "twitter:image", content: `https://nithingowda.lovable.app${portrait.url}` },
    ],
    links: [{ rel: "canonical", href: "https://nithingowda.lovable.app/" }],
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
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
          url: "https://nithingowda.lovable.app/",
          sameAs: ["https://github.com/Nithin69-k", "https://linkedin.com/"],
          knowsAbout: ["Machine Learning", "Deep Learning", "Generative AI", "Data Science", "Android", "Python", "Power BI"],
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------- Data ---------- */
const services = [
  { icon: Brain, title: "AI & Predictive Solutions", desc: "Deep neural architectures and predictive engines for real business outcomes." },
  { icon: Sparkles, title: "Generative AI Integration", desc: "Infusing LLMs and agentic patterns into modern software workflows." },
  { icon: BarChart3, title: "Data Analysis & BI", desc: "Power BI & Tableau dashboards that turn raw data into decisions." },
  { icon: Code2, title: "Machine Learning Models", desc: "Custom supervised classification and regression pipelines." },
  { icon: Smartphone, title: "Android Development", desc: "Streamlined mobile-first experiences with AI built in." },
  { icon: Database, title: "Data Engineering", desc: "Feature engineering, ETL, and production-ready ML pipelines." },
];

const skillCats: { name: string; level: number; items: string[] }[] = [
  { name: "Languages", level: 90, items: ["Python", "Java", "Kotlin", "SQL", "JavaScript"] },
  { name: "AI & ML", level: 88, items: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "LLMs"] },
  { name: "Data Science", level: 85, items: ["Pandas", "NumPy", "EDA", "Feature Eng.", "Stats"] },
  { name: "Android", level: 80, items: ["Android SDK", "Jetpack", "Kotlin", "Firebase"] },
  { name: "Backend", level: 75, items: ["Node.js", "FastAPI", "REST", "Supabase"] },
  { name: "Frontend", level: 72, items: ["React", "HTML5", "CSS3", "Tailwind"] },
  { name: "Cloud & Tools", level: 78, items: ["Git", "Linux", "Streamlit", "Docker"] },
  { name: "BI & Analytics", level: 82, items: ["Power BI", "Tableau", "MS SQL"] },
];

const projects = [
  { img: projChurn, title: "Telecom Customer Churn Prediction", tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest"], desc: "End-to-end framework with EDA and advanced classification to identify high-risk customers and enable retention.", link: "https://github.com/Nithin69-k/Telecom-Customer-Churn-Prediction-" },
  { img: projMovie, title: "Movie Recommendation System", tech: ["Python", "Surprise", "SVD", "Collaborative Filtering"], desc: "Personalized content predictor using Singular Value Decomposition for distinct user profiles.", link: "https://github.com/Nithin69-k/Movie-Recommendation-System" },
  { img: projParking, title: "Parking Space Management System", tech: ["Python", "SQL", "Streamlit"], desc: "Real-time slot allocation with persistence and historical analytics — supported by a peer-reviewed publication.", link: "https://github.com/Nithin69-k/Parking-Space-Management-System" },
  { img: projShilpakala, title: "Shilpakala", tech: ["HTML5", "CSS3", "JavaScript"], desc: "Online visual gallery highlighting cultural heritage artwork and digital collections.", link: "https://github.com/Nithin69-k/Shilpa-Kala" },
];

const experience = [
  { tag: "Internship", title: "AI & Android App Development Intern", org: "MindMatrixEd", period: "Feb 2026 – Apr 2026", bullets: ["Architected Generative AI components into mobile app features.", "Streamlined model inferences across active user sessions."], letter: certMindmatrix.url },
  { tag: "Internship", title: "Data Scientist Intern", org: "Intellipaat", period: "Sep 2025 – Feb 2026", bullets: ["Engineered transformations and trained supervised ML models.", "Ran exploratory analysis on industrial datasets to extract business insights."], letter: certIntellipaat.url },
];

const education = [
  { tag: "Certification", title: "Data Science & AI Certification (16 Months)", org: "IIT Indore · via Intellipaat", period: "2025 – 2026" },
  { tag: "Degree", title: "B.E. — Computer Science", org: "Bangalore Technological Institute · VTU · CGPA 7.5", period: "2022 – 2026" },
  { tag: "Pre-University", title: "PCMB", org: "Krupanidhi Pre-University College", period: "2021 – 2022" },
];

const certs = [
  { label: "Research Paper Publication — IJCRT, Sep 2025", url: certPublication.url, img: certPublication.url },
  { label: "Power BI Course — Intellipaat", url: certPowerbi.url, img: certPowerbi.url },
  { label: "Python Certification — Intellipaat", url: certPython.url, img: certPython.url },
  { label: "Artificial Intelligence — Intellipaat", url: certAi.url, img: certAi.url },
  { label: "Linux Training — Intellipaat", url: certLinux.url, img: certLinux.url },
  { label: "SQL Course — Intellipaat", url: certSql.url, img: certSql.url },
  { label: "Microsoft SQL Certification", url: certMssql.url, img: certMssql.url },
];

const techUniverse: { name: string; ring: 0 | 1 | 2 }[] = [
  { name: "React", ring: 0 }, { name: "Python", ring: 0 }, { name: "Android", ring: 0 }, { name: "Kotlin", ring: 0 }, { name: "Java", ring: 0 },
  { name: "TensorFlow", ring: 1 }, { name: "PyTorch", ring: 1 }, { name: "Scikit-Learn", ring: 1 }, { name: "Pandas", ring: 1 }, { name: "Firebase", ring: 1 }, { name: "Supabase", ring: 1 },
  { name: "Node.js", ring: 2 }, { name: "MongoDB", ring: 2 }, { name: "Git", ring: 2 }, { name: "Power BI", ring: 2 }, { name: "Linux", ring: 2 }, { name: "Streamlit", ring: 2 }, { name: "GenAI Tools", ring: 2 },
];

const testimonials = [
  { quote: "Sharp on ML fundamentals and quick to ship — Nithin turns ideas into models we can deploy.", author: "Intellipaat Mentor", role: "Data Science Cohort" },
  { quote: "Owns the full pipeline end-to-end: data, model, app integration. Rare combo.", author: "MindMatrixEd Lead", role: "AI/Android Internship" },
  { quote: "Strong analytical instincts, great communicator, builds with intent.", author: "IJCRT Reviewer", role: "Peer-reviewed publication" },
  { quote: "His Generative AI integrations felt production-ready from day one.", author: "Project Stakeholder", role: "Mobile Initiative" },
];

const aiProjects = [
  { icon: Brain, title: "Generative AI Features", desc: "LLM-driven flows embedded into Android & web apps with prompt orchestration." },
  { icon: FlaskConical, title: "Prompt Engineering", desc: "Structured templates, evals, and guardrails for production assistants." },
  { icon: Cpu, title: "Applied ML", desc: "Classification, regression, and recommender systems on real datasets." },
  { icon: Sparkles, title: "Learning Path", desc: "Currently exploring agents, RAG, and on-device inference." },
];

/* ---------- Page ---------- */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden selection:bg-[#7C3AED]/40">
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <SkillsSection />
      <TechUniverseSection />
      <Experience />
      <Education />
      <AISection />
      <GithubSection />
      <Certifications />
      <TestimonialsSection />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-4 z-50 px-4 animate-fade-up">
      <div className="mx-auto max-w-6xl rounded-full glass-dark px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-white">
          <span className="grid place-items-center w-8 h-8 rounded-lg text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>N</span>
          <span className="text-sm">Nithin K</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <a href="#about" className="story-link hover:text-white transition">About</a>
          <a href="#projects" className="story-link hover:text-white transition">Projects</a>
          <a href="#experience" className="story-link hover:text-white transition">Experience</a>
          <a href="#skills" className="story-link hover:text-white transition">Skills</a>
          <a href="#certifications" className="story-link hover:text-white transition">Certificates</a>
          <a href="#services" className="story-link hover:text-white transition">Services</a>
        </nav>
        <div className="flex items-center gap-2">
          <CmdHint />
          <span className="hidden sm:inline-flex"><ResumeDownload variant="pill" label="Resume" /></span>
          <Magnetic strength={0.3}>
            <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition hover:brightness-110" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", boxShadow: "0 8px 28px -8px rgba(124,58,237,0.7)" }}>
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const blob1 = useParallax<HTMLDivElement>(0.12);
  const blob2 = useParallax<HTMLDivElement>(-0.08);
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Aurora />
        <StarField count={70} />
        <NeuralNet className="absolute inset-0 w-full h-full opacity-25" nodes={22} />
      </div>
      <div ref={blob1} aria-hidden className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full blur-3xl -z-10 will-change-transform" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 60%)" }} />
      <div ref={blob2} aria-hidden className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full blur-3xl -z-10 will-change-transform" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.35), transparent 60%)" }} />
      <Particles count={22} />

      <div className="mx-auto max-w-6xl px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/70 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" /> Available for opportunities
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
              <AnimatedName text="Nithin K" />
              <span className="block mt-3 text-3xl md:text-5xl text-white/90">
                <TypingRoles roles={["Android Developer", "AI Enthusiast", "Data Science Learner", "Problem Solver", "Full Stack Builder"]} />
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/65 animate-fade-up delay-200">
              Bridging data science theory and software engineering practice — building production-ready ML pipelines, Android experiences, and Generative AI features that ship real value.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
              <Magnetic>
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 animate-pulse-glow" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4,#F97316)", backgroundSize: "200% 200%", animation: "gradientShift 6s ease infinite, pulseGlow 3s ease-out infinite" }}>
                  Explore my work
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-white/15 transition-transform group-hover:rotate-45"><ArrowRight className="w-3.5 h-3.5" /></span>
                </a>
              </Magnetic>
              <Magnetic><ResumeDownload variant="primary" label="Download Resume" /></Magnetic>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-white hover:border-[#7C3AED] transition">Contact me</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-white/50 mr-2 text-xs uppercase tracking-[0.18em]">Online —</span>
              <SocialPill href="https://github.com/Nithin69-k" icon={Github} label="GitHub" />
              <SocialPill href="https://linkedin.com/" icon={Linkedin} label="LinkedIn" />
              <SocialPill href="https://instagram.com/" icon={Instagram} label="Instagram" />
            </div>
          </div>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}

function HeroPortrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      className="relative flex justify-center md:justify-end animate-fade-up delay-200"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: -py * 16, y: px * 16 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="relative" style={{ perspective: "1000px" }}>
        <div aria-hidden className="absolute -inset-8 rounded-full blur-3xl animate-blob" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 65%)" }} />
        <div aria-hidden className="absolute -inset-3 rounded-full animate-spin-slow" style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #F97316, #7C3AED)", WebkitMask: "radial-gradient(circle, transparent 62%, black 64%)", mask: "radial-gradient(circle, transparent 62%, black 64%)" }} />
        <img
          src={portrait.url}
          alt="Nithin K"
          width={420}
          height={420}
          className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover ring-2 ring-white/10 animate-float transition-transform duration-300"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, boxShadow: "0 30px 80px -20px rgba(124,58,237,0.5)" }}
        />
        <div className="absolute -bottom-3 -left-3 rounded-full glass-dark text-white text-[10px] uppercase tracking-widest px-3 py-1.5 animate-fade-up delay-500">
          AI · ML · GenAI
        </div>
        <FloatingTechIcons />
      </div>
    </div>
  );
}

function FloatingTechIcons() {
  const icons = [
    { Icon: Smartphone, top: "5%", left: "-12%", delay: "0s" },
    { Icon: Brain, top: "10%", right: "-14%", delay: "0.6s" },
    { Icon: Cpu, bottom: "10%", left: "-14%", delay: "1.2s" },
    { Icon: Code2, bottom: "5%", right: "-12%", delay: "1.8s" },
  ];
  return (
    <>
      {icons.map(({ Icon, ...pos }, i) => (
        <div key={i} className="absolute grid place-items-center w-10 h-10 rounded-xl glass-dark text-[#A78BFA] animate-float" style={{ ...pos, animationDelay: pos.delay }}>
          <Icon className="w-5 h-5" />
        </div>
      ))}
    </>
  );
}

function SocialPill({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm text-white/80 hover:text-white hover:border-[#7C3AED] transition">
      <Icon className="w-4 h-4" /> {label}
    </a>
  );
}

/* ---------- Stats / Achievements ---------- */
function Stats() {
  const items = [
    { value: 5, suffix: "+", label: "Projects Done", icon: Code2 },
    { value: 9, suffix: "+", label: "Certifications", icon: Award2 },
    { value: 2, suffix: "", label: "Industry Internships", icon: Trophy },
    { value: 16, suffix: " mo", label: "IIT Indore AI Track", icon: GraduationCap2 },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 -mt-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="glass rounded-2xl px-5 py-6 text-center hover-lift relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)" }} />
            <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              <CountUp to={s.value} suffix={s.suffix} className="text-gradient font-mono" />
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
// re-import to avoid name clash with lucide Award/GraduationCap above (used elsewhere)
import { Award as Award2, GraduationCap as GraduationCap2 } from "lucide-react";

/* ---------- About / Story cards ---------- */
function About() {
  const cards = [
    { icon: Brain, title: "Who I am", body: "AI-curious engineer who likes turning messy data into elegant decisions.", anim: "slide-left" },
    { icon: Sparkles, title: "What I love", body: "Generative AI, on-device ML, and clean Android UX.", anim: "slide-right" },
    { icon: Code2, title: "How I work", body: "From notebook to deployed feature — ship, measure, iterate.", anim: "scale" },
    { icon: BarChart3, title: "Why it matters", body: "Models only count when they reach real users.", anim: "rotate" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="About" title="A story in four frames" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className={`reveal-${c.anim}`}>
            <div className="rounded-2xl glass p-6 h-full hover-lift relative overflow-hidden">
              <div aria-hidden className="absolute -top-10 -right-10 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)" }} />
              <div className="w-10 h-10 rounded-xl grid place-items-center mb-4 text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white mb-1.5">{c.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="kicker mb-3"><span className="w-6 h-px bg-[#7C3AED]" /> {kicker}</div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {sub && <p className="mt-3 text-white/60 max-w-2xl">{sub}</p>}
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="What I do" title="Core capabilities" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <Tilt className="rounded-2xl h-full">
              <div className="group rounded-2xl glass p-6 h-full hover:border-[#7C3AED] transition relative overflow-hidden">
                <span className="tilt-glow" />
                <div className="w-11 h-11 rounded-xl grid place-items-center mb-4 text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects — zig-zag ---------- */
function Projects() {
  const anims = ["from-left", "flip", "scale", "rotate", "parallax"] as const;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Featured Projects" title="From concept to deployment" sub="A blend of applied ML, full-stack craft, and research-backed work." />
      <div className="space-y-12">
        {projects.map((p, i) => {
          const left = i % 2 === 0;
          const anim = anims[i % anims.length];
          return (
            <Reveal key={p.title} delay={50}>
              <div className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                <Tilt className="rounded-3xl">
                  <a href={p.link} target="_blank" rel="noreferrer" className="group block rounded-3xl glass overflow-hidden relative">
                    <span className="tilt-glow" />
                    <div className="aspect-[16/10] overflow-hidden bg-[#0a0f24] relative">
                      <img src={p.img} alt={`${p.title} — project preview`} width={1200} height={750} loading="lazy" className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "linear-gradient(180deg, transparent, rgba(5,8,22,0.6) 80%)" }} />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                        <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                      </div>
                    </div>
                  </a>
                </Tilt>
                <div>
                  <div className="kicker mb-2 font-mono">{String(i + 1).padStart(2, "0")} · {anim}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full glass px-2.5 py-1 text-[11px] font-mono text-[#A78BFA] hover:scale-105 transition">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white hover:border-[#7C3AED] transition">
                      <Github className="w-4 h-4" /> Source
                    </a>
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white animate-gradient-shift" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4,#F97316,#7C3AED)" }}>
                      Live demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Skills with progress + chips ---------- */
function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Technical Inventory" title="Skills & tools" sub="Calibrated by years of hands-on use and shipped projects." />
      <div className="grid md:grid-cols-2 gap-4">
        {skillCats.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 60}>
            <Tilt className="rounded-2xl">
              <div className="rounded-2xl glass p-6 hover-lift relative">
                <span className="tilt-glow" />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-white">{cat.name}</h3>
                  <span className="font-mono text-xs text-[#A78BFA]">{cat.level}%</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <Reveal as="div" className="block">
                    <div className="h-full rounded-full" style={{ width: `${cat.level}%`, background: "linear-gradient(90deg,#7C3AED,#06B6D4,#F97316)" }} />
                  </Reveal>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="rounded-full glass px-3 py-1 text-xs text-white/80 hover:text-white hover:border-[#7C3AED] transition">{s}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Tech Universe ---------- */
function TechUniverseSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Tech Universe" title="An interactive developer ecosystem" sub="Tap into the orbit — every node is a tool I build with." />
      <Reveal>
        <div className="rounded-3xl glass p-6 md:p-10 relative overflow-hidden">
          <StarField count={50} />
          <TechUniverse items={techUniverse} />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Experience timeline ---------- */
function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Experience" title="Work history" />
      <Timeline entries={experience.map((e) => ({ tag: e.tag, title: e.title, org: e.org, period: e.period, bullets: e.bullets }))} />
      <div className="mt-4 flex flex-wrap gap-3 pl-10">
        {experience.map((e) => (
          <a key={e.title} href={e.letter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#06B6D4] hover:underline">
            <ExternalLink className="w-3.5 h-3.5" /> {e.org} offer letter
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Education timeline ---------- */
function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Education" title="Academic background" />
      <Timeline entries={education} />
    </section>
  );
}

/* ---------- AI Developer Section ---------- */
function AISection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl glass p-6 md:p-12 relative overflow-hidden">
        <NeuralNet className="absolute inset-0 opacity-30" nodes={28} />
        <div className="relative">
          <SectionHeader kicker="AI Developer" title="Building with generative & applied AI" sub="From prompt design to deployed ML — a hands-on track across the stack." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiProjects.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="rounded-2xl glass p-5 h-full hover-lift">
                  <div className="w-10 h-10 rounded-xl grid place-items-center mb-3 text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#F97316)" }}>
                    <a.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-white">{a.title}</h3>
                  <p className="text-sm text-white/65 mt-1.5">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GitHub Dashboard ---------- */
function GithubSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="GitHub" title="Open source activity" sub="Live data from @Nithin69-k — repositories, languages, and stars." />
      <Reveal>
        <GitHubDashboard user="Nithin69-k" />
      </Reveal>
    </section>
  );
}

/* ---------- Certifications carousel ---------- */
function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Certifications" title="Credentials & publications" sub="Hover to pause — click any card to view the source." />
      <Reveal>
        <div className="group relative overflow-hidden">
          <div aria-hidden className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
          <div aria-hidden className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
            {[...certs, ...certs].map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noreferrer" className="w-[260px] md:w-[320px] shrink-0 rounded-2xl glass p-3 hover:border-[#7C3AED] transition block hover-lift">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#0a0f24]">
                  <img src={c.img} alt={c.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-2 pt-3">
                  <p className="text-xs text-white/80 line-clamp-2">{c.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader kicker="Testimonials" title="What collaborators say" />
      <Reveal><Testimonials items={testimonials} /></Reveal>
      <p className="mt-3 text-[11px] text-white/40 font-mono">Quotes paraphrased from feedback during internships and reviews.</p>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl glass p-6 md:p-12 relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 60%)" }} />
        <div aria-hidden className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3), transparent 60%)" }} />
        <div className="relative grid md:grid-cols-2 gap-10">
          <div>
            <div className="kicker mb-3"><span className="w-6 h-px bg-[#7C3AED]" /> Contact</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Let's build something <span className="text-gradient">intelligent.</span></h2>
            <p className="mt-4 text-white/65 max-w-md">Predictive models, GenAI features, Android apps, or end-to-end data pipelines — drop a message and I'll reply within a day.</p>
            <div className="mt-8 space-y-3">
              <ContactRow icon={Mail} label="nithingowda490@gmail.com" href="mailto:nithingowda490@gmail.com" />
              <ContactRow icon={Phone} label="+91 8217264796" href="tel:+918217264796" />
              <ContactRow icon={MapPin} label="Bengaluru, Karnataka, India" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[{ href: "https://github.com/Nithin69-k", Icon: Github, label: "GitHub" }, { href: "https://linkedin.com/", Icon: Linkedin, label: "LinkedIn" }, { href: "https://instagram.com/", Icon: Instagram, label: "Instagram" }, { href: "https://nithingowda.lovable.app/", Icon: ExternalLink, label: "Portfolio" }].map((s) => (
                <Magnetic key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid place-items-center w-11 h-11 rounded-full glass text-white hover:text-[#A78BFA] hover:scale-110 transition animate-pulse-glow"><s.Icon className="w-5 h-5" /></a></Magnetic>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget as HTMLFormElement);
              const subject = encodeURIComponent(`Portfolio inquiry — ${f.get("name") || "Anonymous"}`);
              const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
              window.location.href = `mailto:nithingowda490@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <GlassField name="name" label="Your name" required />
              <GlassField name="email" type="email" label="Email" required />
            </div>
            <GlassField name="subject" label="Subject" />
            <GlassField name="message" as="textarea" label="Tell me about your project" required />
            <button type="submit" className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 animate-gradient-shift" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4,#F97316,#7C3AED)" }}>
              {sent ? <>Message ready <Sparkles className="w-4 h-4" /></> : <>Send message <Send className="w-4 h-4 transition group-hover:translate-x-0.5" /></>}
            </button>
            <p className="text-[11px] text-white/40">Opens your email client with the message pre-filled.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl glass px-4 py-3 hover:border-[#7C3AED] transition">
      <span className="grid place-items-center w-9 h-9 rounded-lg text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}><Icon className="w-4 h-4" /></span>
      <span className="text-sm text-white/85">{label}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <StarField count={30} className="opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3 text-white/60">
          <span className="grid place-items-center w-7 h-7 rounded-lg text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>N</span>
          <p>© {new Date().getFullYear()} Nithin K · Built with intent.</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-white/60 text-xs">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Nithin69-k" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white"><Linkedin className="w-4 h-4" /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
      <div className="text-center pb-6 text-[10px] text-white/30 font-mono">Press <kbd className="rounded bg-white/10 px-1.5 py-0.5">Ctrl</kbd> + <kbd className="rounded bg-white/10 px-1.5 py-0.5">K</kbd> anywhere to open the command palette.</div>
    </footer>
  );
}

// Suppress unused-import warnings for icons reserved for future cards
void Quote;