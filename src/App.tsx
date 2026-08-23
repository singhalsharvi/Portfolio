import { useState, useEffect } from "react";

// ─── Icons ──────────────────────────────────────────────────────────────────
function IconGithub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function IconLinkedin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconMail({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconExternal({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function IconDownload({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconMenu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Tick() {
  return (
    <>
      <span className="tick tick-tl" />
      <span className="tick tick-tr" />
      <span className="tick tick-bl" />
      <span className="tick tick-br" />
    </>
  );
}

const GITHUB_URL = "https://github.com/singhalsharvi";
const LINKEDIN_URL = "https://www.linkedin.com/in/sharvi-singhal/";
const EMAIL = "sharvisinghal008@gmail.com";

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Achievements", "Contact"];
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13, 17, 23, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <span
        className="font-mono"
        style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer", color: "var(--primary)" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        SS
      </span>

      <div className="hidden md:flex" style={{ gap: "0.25rem", alignItems: "center" }}>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="font-mono"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--muted-foreground)", fontSize: "0.95rem", letterSpacing: "0.01em",
              padding: "0.5rem 0.85rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
          >
            {l}
          </button>
        ))}
        <a href="/Sharvi_Singhal_Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: "0.4rem 0.95rem", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.72rem", textDecoration: "none", marginLeft: "0.5rem" }}>
          <IconDownload size={13} /> Resume
        </a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer" }}>
        {menuOpen ? <IconX /> : <IconMenu />}
      </button>

      {menuOpen && (
        <div style={{
          position: "absolute", top: "60px", left: 0, right: 0,
          background: "rgba(13,17,23,0.98)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem 2rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "0.9rem",
        }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="font-mono"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--foreground)", fontSize: "0.9rem", textAlign: "left" }}>
              {l}
            </button>
          ))}
          <a href="/Sharvi_Singhal_Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: "0.5rem 1rem", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", width: "fit-content", textDecoration: "none" }}>
            <IconDownload size={14} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
    const stats = [
    { value: "125+", label: "LeetCode Problems" },
    { value: "9.31", label: "CGPA / 10" },
  ];

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "84px 2rem 4rem", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "15 rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "300px", maxWidth: "600px" }}>
                   <div className="stamp animate-fade-up" style={{ marginBottom: "1.75rem" }}>
  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF5C39", display: "inline-block" }} />
  Open to opportunities
</div>
          <h1 className="font-display animate-fade-up" style={{ fontSize: "clamp(2.6rem, 5.6vw, 4.2rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em", marginBottom: "0.7rem", opacity: 0, animationDelay: "0.08s", animationFillMode: "forwards" }}>
            Sharvi Singhal
          </h1>
          <p className="font-mono animate-fade-up" style={{ fontSize: "0.96rem", color: "var(--primary)", marginBottom: "1.5rem", letterSpacing: "0.01em", opacity: 0, animationDelay: "0.16s", animationFillMode: "forwards" }}>
            CS Student · Competitive Programmer
          </p>
          <p className="animate-fade-up" style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "460px", opacity: 0, animationDelay: "0.24s", animationFillMode: "forwards" }}>
            Second-year Computer Science student at Indira Gandhi Delhi Technical University
            for Women, Delhi, currently exploring AI, software, and new technologies. 
            I like building practical systems, experimenting with new ideas, and learning 
            by building ideas into solutions.
          </p>

          <div className="animate-fade-up" style={{ display: "flex", gap: "1.75rem", marginBottom: "2.25rem", opacity: 0, animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)" }}>{s.value}</div>
                <div className="font-mono" style={{ fontSize: "0.68rem", color: "var(--muted-foreground)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem", opacity: 0, animationDelay: "0.36s", animationFillMode: "forwards" }}>
            <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>View Projects</button>
            <a href="/Sharvi_Singhal_Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>Resume <IconExternal size={12} /></a>
            <button className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get In Touch</button>
          </div>

          <div className="animate-fade-up" style={{ display: "flex", gap: "0.85rem", opacity: 0, animationDelay: "0.42s", animationFillMode: "forwards" }}>
            {[{ icon: <IconGithub size={16} />, href: GITHUB_URL, label: "GitHub" },
              { icon: <IconLinkedin size={16} />, href: LINKEDIN_URL, label: "LinkedIn" },
              { icon: <IconMail size={16} />, href: `mailto:${EMAIL}`, label: "Email" }].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="font-mono"
                style={{ display: "flex", alignItems: "center", gap: "7px", padding: "7px 13px", border: "1px solid var(--border)", borderRadius: "6px", color: "var(--muted-foreground)", textDecoration: "none", fontSize: "0.75rem", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)"; }}
              >{icon} {label}</a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex" style={{ flex: "0 0 auto", flexDirection: "column", alignItems: "center", gap: "1.25rem", marginTop: "-4rem", marginLeft: "14rem" }}>
          <div style={{
            width: "280px", height: "280px", borderRadius: "50%",
            border: "2px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            background: "radial-gradient(circle at 30% 30%, rgba(255,92,57,0.12), transparent 70%)",
          }}>
            <div style={{
              width: "256px", height: "256px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img src="/profile.png" alt="Sharvi Singhal" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
            </div>
          </div>
          <div className="record" style={{ padding: "0.85rem 1.4rem", textAlign: "center" }}>
            <div className="font-mono" style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>CGPA 9.31/10 · IGDTUW · CSE · 2029</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────
function About() {
  const facts = [
    { label: "University", value: "Indira Gandhi Delhi Technical University for Women, New Delhi" },
    { label: "Degree", value: "B.Tech, Computer Science &amp; Engineering" },
    { label: "Expected Graduation", value: "2029" },
    { label: "Focus Areas", value: "AI/ML · Data Structures & Algorithms · Software Development · Web Development " },
    { label: "Looking For", value: "SDE and AI/ML internships" },
  ];

  return (
    <section id="about" style={{ padding: "6.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="field-label" style={{ marginBottom: "0.75rem" }}>01</div>
      <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem" }}>About Me</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3.5rem", alignItems: "start" }}>
        <div>
         
         <p style={{ fontSize: "1.02rem", lineHeight: 1.85, color: "var(--foreground)", marginBottom: "1.4rem" }}>
  Hi, I'm Sharvi, a second-year <strong>Computer Science</strong> student and an
  aspiring software developer who enjoys turning ideas into practical, real-world solutions.
</p>
<p style={{ fontSize: "0.98rem", lineHeight: 1.85, color: "var(--foreground)", marginBottom: "1.4rem" }}>
  I have a strong interest in <strong>Artificial Intelligence</strong>, Data Structures &amp;
  Algorithms, and Software Development. I enjoy solving complex problems, building impactful
  projects, and continuously learning new technologies. Beyond coding, I love participating in
  hackathons, open-source programs, and collaborative projects, where I get to learn from
  others, build under constraints, and explore new ideas.
</p>
<p style={{ fontSize: "0.98rem", lineHeight: 1.85, color: "var(--foreground)" }}>
  Always eager to learn, collaborate, and contribute to innovative projects that can create
  real-world impact. Apart from tech, I enjoy playing badminton.
</p>
        </div>

        <div className="record ticked" style={{ padding: "1.5rem 1.5rem 1.25rem" }}>
          <Tick />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {facts.map((f, i) => (
              <div key={f.label} style={{ paddingBottom: i < facts.length - 1 ? "1.1rem" : 0, borderBottom: i < facts.length - 1 ? "1px dashed var(--border)" : "none" }}>
                <div className="field-label" style={{ marginBottom: "0.3rem" }}>{f.label}</div>
                <div style={{ fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: f.value }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience ─────────────────────────────────────────────────────────────
function Experience() {
  const roles = [
    {
      date: "Jun 2026 — Present",
      title: "ML & GenAI with Python Intern",
      org: "IGDTUW",
      points: [
        "Research project: AI-generated text detection using NLP & ML, under faculty evaluation, in a team of 3.",
        "Built a binary text classifier distinguishing AI-generated from human-written text on a 79K-sample dataset.",
        "Benchmarked six models — SVM, XGBoost, LightGBM, Logistic Regression, Random Forest, Naive Bayes — with TF-IDF features.",
      ],
    },
    {
      date: "Feb 2026 — Present",
      title: "Coordinator, Event Management",
      org: "Taarangana, IGDTUW",
      points: ["Coordinating teams, logistics, and on-ground execution for the college's annual cultural fest. Planning event workflows and ensuring smooth execution across multiple activities."]
    },
    {
      date: "Aug 2025 — Present",
      title: "Associate, Event Management",
      org: "Tech Needs, IGDTUW",
      points: ["Coordinating technical events, workshops, and club activities. Working with teams on event planning, logistics, and execution."],
    },
  ];

  return (
    <section id="experience" style={{ padding: "6.5rem 2rem", background: "var(--background-raised)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="field-label" style={{ marginBottom: "0.75rem" }}>02</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem" }}>Experience</h2>

        <div className="timeline-rail" style={{ paddingLeft: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            {roles.map(({ date, title, org, points }, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.35rem", top: "0.4rem", width: "7px", height: "7px", borderRadius: "50%", background: "var(--primary)" }} />
                <div className="font-mono" style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", marginBottom: "0.35rem" }}>{date}</div>
                <div style={{ marginBottom: "0.6rem" }}>
                  <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700 }}>{title}</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}> — {org}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {points.map((p, j) => (
                    <li key={j} style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: "700px" }}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ───────────────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      code: "CIVITAS.AI",
      date: "Jun 2026",
      status: "Deployed",
      tagline: "AI-powered civic issue reporting platform for Indian cities",
      tech: ["React", "Firebase", "Gemini 1.5 Flash", "Leaflet.js"],
      desc: "Citizens upload a photo and Gemini 1.5 Flash auto-categorizes it, assigns severity, and routes it to the correct government department. The dual-portal system pairs a citizen-facing map and community upvoting with a government dashboard for department-scoped issue management, backed by Firebase Firestore and Auth for real-time sync and role-based access across 10 Indian states.",
    },
    {
      code: "VINETRA.AI",
      date: "Feb 2026",
      status: "Winner — DTU Synapse.AI 2026",
      tagline: "AI platform for skill development & error minimisation in sports",
      tech: ["JavaScript", "MediaPipe.js", "HTML", "CSS"],
      desc: "Led a team of 4 to build real-time athlete technique correction using MediaPipe pose detection and motion analysis, plus an Injury Recovery module that turns an athlete's health inputs into a personalised recovery plan. Won Best All Girls Team at Synapse.AI 2026, DTU's 24-hour offline hackathon.",
    },
    {
      code: "VOYAGE-AI",
      date: "Jul 2026",
      status: "Deployed",
      tagline: "AI travel agent that autonomously researches & books flights and hotels",
      tech: ["React", "TypeScript", "Vite", "Express", "Gemini API", "SerpApi", "Google Distance Matrix API"],
      desc: "A multi-turn Gemini tool-calling agent invokes flight/hotel search tools and reasons over real SerpApi data to return a structured, justified decision. A hotel-ranking pipeline scores candidates by real driving commute time via the Google Distance Matrix API, running on a decoupled Express backend and React/TypeScript frontend with defensive JSON parsing and retry logic for unreliable LLM output. Led a team of 2.",
    },
    {
  code: "AGRISAARTHI",
  date: "2026",
  tagline: "AI-powered decision support platform for Indian farmers",
  tech: ["React", "Vite", "FastAPI", "PyTorch", "Gemini API", "ChromaDB", "SQLite"],
  desc: "Solves three core farmer decisions: what to grow, using a crop-recommendation model; what's wrong, via a PyTorch CNN that diagnoses crop disease from a leaf photo; and what they can access, via a RAG layer over government scheme data using Gemini and ChromaDB. Built with a FastAPI backend and React/Vite frontend, with a freemium model aimed at broader access to sustainable farming tools. Lead the team of 3.",
},
  ];

  return (
    <section id="projects" style={{ padding: "6.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="field-label" style={{ marginBottom: "0.75rem" }}>03</div>
      <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Projects</h2>
      <p style={{ color: "var(--muted-foreground)", marginBottom: "3rem", maxWidth: "480px" }}>Three builds. Each shipped on live data, not sample sets.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {projects.map(({ code, date, status, tagline, tech, desc }) => (
          <div key={code} className="record record-hover" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
                {tech.map((t) => <span key={t} className="tag" style={{ fontSize: "0.7rem", padding: "3px 9px" }}>{t}</span>)}
              </div>
              <div className="font-mono" style={{ fontSize: "0.7rem", color: "var(--primary)", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>{code} · {date}</div>
              <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.6rem" }}>{tagline}</h3>
              <p style={{ fontSize: "0.87rem", lineHeight: 1.65, color: "var(--muted-foreground)", marginBottom: "1.25rem" }}>{desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="stamp" style={{ transform: "none" }}>{status}</span>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="font-mono"
                  style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", color: "var(--muted-foreground)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
                ><IconGithub size={13} /> GitHub <IconExternal size={11} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Skills ─────────────────────────────────────────────────────────────────
function Skills() {
  const categories = [
    { title: "Languages", accent: "var(--primary)", skills: ["C++", "Python", "JavaScript","C"] },
    { title: "Web Development", accent: "var(--accent)", skills: ["React", "HTML", "CSS", "Node.js / Express", "Firebase"] },
    { title: "CS Core", accent: "var(--brick)", skills: ["Data Structures & Algorithms", "Problem Solving"] },
    { title: "AI / ML & APIs", accent: "var(--primary)", skills: ["Gemini API", "TF-IDF", "Scikit-learn"] },
    { title: "Tools & Collaboration", accent: "var(--accent)", skills: ["Git", "GitHub", "Leadership", "Event Management", "Teamwork", "Collaboration"] },
  ];

  return (
    <section id="skills" style={{ padding: "6.5rem 2rem", background: "var(--background-raised)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="field-label" style={{ marginBottom: "0.75rem" }}>04</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem" }}>Skills</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {categories.map(({ title, accent, skills }) => (
            <div key={title} className="record" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.1rem" }}>
                <div style={{ width: "6px", height: "6px", background: accent, borderRadius: "50%" }} />
                <span className="font-mono" style={{ fontWeight: 700, fontSize: "0.78rem" }}>{title}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Achievements ───────────────────────────────────────────────────────────
function Achievements() {
  const items = [
    { emoji: "🏆", title: "Best All Girls Team — Synapse.AI 2026", desc: "DTU's 24-hour offline hackathon" },
    { emoji: "🌱", title: "Selected — GirlScript Summer of Code 2026", desc: "Open-source contributor program." },
    { emoji: "💎", title: "She-Fi Scholar — Season 15", desc: "Awarded a scholarship worth $800 through She-Fi." },
  ];

  return (
    <section id="achievements" style={{ padding: "6.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="field-label" style={{ marginBottom: "0.75rem" }}>05</div>
      <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem" }}>Achievements</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {items.map(({ emoji, title, desc }) => (
          <div key={title} className="record record-hover" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{emoji}</span>
            <div>
              <div className="font-display" style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: "0.35rem" }}>{title}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.8rem 1rem",
    background: "rgba(243,245,248,0.04)", border: "1px solid var(--border)",
    borderRadius: "6px", color: "var(--foreground)", fontSize: "0.92rem",
    fontFamily: "Inter, sans-serif", outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "6.5rem 2rem", background: "var(--background-raised)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="field-label" style={{ marginBottom: "0.75rem" }}>06</div>
        <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.5rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
          Let's build <span className="font-display-italic ink-gold">something real</span> together.
        </h2>
        <p style={{ color: "var(--muted-foreground)", marginBottom: "3rem", maxWidth: "460px", lineHeight: 1.7 }}>
          I'm actively looking for SDE and AI/ML internships. If you have a role or a project in mind, I'd love to hear from you.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {[
              { icon: <IconMail size={17} />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: <IconLinkedin size={17} />, label: "LinkedIn", value: "linkedin.com/in/sharvi-singhal", href: LINKEDIN_URL },
              { icon: <IconGithub size={17} />, label: "GitHub", value: "github.com/singhalsharvi", href: GITHUB_URL },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="record record-hover"
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", textDecoration: "none", color: "var(--foreground)" }}>
                <div style={{ color: "var(--primary)" }}>{icon}</div>
                <div>
                  <div className="font-mono" style={{ fontSize: "0.7rem", color: "var(--muted-foreground)" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          <div>
            {sent ? (
              <div className="record" style={{ padding: "3rem", textAlign: "center" }}>
                <div style={{ color: "var(--primary)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}><IconCheck size={36} /></div>
                <div className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Message sent</div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.88rem" }}>I'll get back to you within a couple of days.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label className="field-label" style={{ display: "block", marginBottom: "0.4rem" }}>Name</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--primary)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="field-label" style={{ display: "block", marginBottom: "0.4rem" }}>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--primary)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="field-label" style={{ display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity or project..." style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--primary)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")} />
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: "0.25rem" }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "1.75rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span className="font-mono" style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--primary)" }}>SS</span>
        <span className="font-mono" style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>© 2026 Sharvi Singhal · IGDTUW, New Delhi</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          {[{ icon: <IconGithub size={16} />, href: GITHUB_URL }, { icon: <IconLinkedin size={16} />, href: LINKEDIN_URL }].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" style={{ color: "var(--muted-foreground)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
