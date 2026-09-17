import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CalendarDays,
  Check,
  CircleDollarSign,
  Code2,
  Layers3,
  Menu,
  Palette,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import brickBasil from "@/assets/brick-basil.jpg";
import dentalPlatform from "@/assets/dental-platform.jpg";
import interiorStudio from "@/assets/interior-studio.jpg";
import weddingPhotography from "@/assets/wedding-photography.jpg";
import weddingSaas from "@/assets/wedding-saas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A+D Studio — Web Systems & Digital Architecture" },
      {
        name: "description",
        content:
          "A technical and creative studio building high-conversion web systems, SaaS platforms, and distinctive digital experiences.",
      },
      { property: "og:title", content: "A+D Studio — Web Systems & Digital Architecture" },
      {
        property: "og:description",
        content: "High-conversion web systems shaped by technical precision and creative direction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01",
    title: "Brick & Basil",
    type: "Artisanal Restaurant Platform",
    description: "A sensory digital flagship with table reservations woven directly into the dining story.",
    tags: ["Web Design", "Reservations"],
    image: brickBasil,
    alt: "Brick & Basil wood-fired pizzeria website interface",
  },
  {
    number: "02",
    title: "Riverdale Dental",
    type: "Dental Practice Platform",
    description: "An accessible patient journey that turns service discovery into effortless appointment booking.",
    tags: ["UX Strategy", "Booking Flow"],
    image: dentalPlatform,
    alt: "Modern dental practice appointment platform interface",
  },
  {
    number: "03",
    title: "Vela Interiors",
    type: "Interior Design Studio",
    description: "An editorial project showcase where architecture, material, and space lead the experience.",
    tags: ["Art Direction", "Interactive Gallery"],
    image: interiorStudio,
    alt: "Luxury interior design studio website interface",
  },
  {
    number: "04",
    title: "Aurelia Stories",
    type: "Wedding Photography Showcase",
    description: "A cinematic portfolio and considered booking funnel built around emotional storytelling.",
    tags: ["Media System", "Conversion"],
    image: weddingPhotography,
    alt: "Cinematic wedding photography portfolio interface",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="A plus D Studio home">
          <span className="brand-mark"><span>A</span><i>/</i><span>D</span></span>
          <span className="brand-copy">SYSTEMS + STORIES</span>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="hero orbital-field" id="home">
          <div className="hero-glow hero-glow-cyan" />
          <div className="hero-glow hero-glow-amber" />
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <div className="hero-content">
            <div className="eyebrow"><span /> Web Systems &amp; Digital Architecture</div>
            <h1>We build <em>high-conversion</em><br />web systems</h1>
            <p>
              Technical precision meets creative direction. We design digital infrastructure
              that looks exceptional and performs with purpose.
            </p>
            <a className="primary-cta" href="#contact">
              Initiate project discussion <ArrowRight size={17} />
            </a>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to studio directors">
            <span>Explore the studio</span><ArrowDown size={16} />
          </a>
        </section>

        <section className="section founders-section" id="about">
          <div className="section-heading reveal">
            <div><span className="section-index">01</span><span className="kicker">Two disciplines. One system.</span></div>
            <h2>Built where logic<br />meets <em>imagination.</em></h2>
          </div>

          <div className="founder-grid">
            <article className="founder-card founder-technical reveal">
              <div className="card-topline"><span>TECHNICAL DIRECTION</span><Code2 size={18} /></div>
              <div className="founder-copy">
                <span className="founder-number">A / 01</span>
                <h3>Ayesha<br />Siddiqa PJ</h3>
                <p className="role">Technical Director</p>
                <p className="bio">Architecting intelligent systems that make complex digital operations feel remarkably simple.</p>
                <div className="tag-list"><span>AI Systems</span><span>Multi-Agent Architecture</span><span>Backend Logic</span></div>
              </div>
              <div className="code-window" aria-hidden="true">
                <div className="window-dots"><i /><i /><i /></div>
                <code><b>const</b> system = <span>{"{"}</span><br />&nbsp;&nbsp;intent: <em>"clarity"</em>,<br />&nbsp;&nbsp;agents: orchestrate(),<br />&nbsp;&nbsp;scale: <em>"without limits"</em><br /><span>{"}"}</span>;</code>
                <div className="system-status"><i /> SYSTEMS OPERATIONAL</div>
              </div>
              <Sparkles className="card-spark" size={24} />
            </article>

            <article className="founder-card founder-creative reveal">
              <div className="card-topline"><span>CREATIVE DIRECTION</span><Palette size={18} /></div>
              <div className="founder-copy">
                <span className="founder-number">D / 02</span>
                <h3>Danish<br />Patel</h3>
                <p className="role">Creative Director</p>
                <p className="bio">Shaping expressive brands and visual experiences that make every interaction feel intentional.</p>
                <div className="tag-list"><span>Brand Strategy</span><span>Visual Media</span><span>UI / UX</span></div>
              </div>
              <div className="creative-canvas" aria-hidden="true">
                <span className="canvas-type">Aa</span>
                <div className="swatches"><i /><i /><i /><i /></div>
                <div className="layout-frame"><span /><span /><span /></div>
                <p>FORM / FEELING / FUNCTION</p>
              </div>
              <Sparkles className="card-spark" size={24} />
            </article>
          </div>
        </section>

        <section className="section featured-section" id="work">
          <div className="section-heading compact reveal">
            <div><span className="section-index">02</span><span className="kicker">Featured infrastructure</span></div>
            <h2>A studio operating system,<br /><em>fully connected.</em></h2>
          </div>

          <article className="featured-card reveal">
            <div className="featured-copy">
              <div className="badge-row"><span>Enterprise SaaS</span><span className="live-badge"><i /> Live Infrastructure</span></div>
              <h3>Wedding Studio<br />Management System</h3>
              <p>A unified command center for modern wedding studios—from the first enquiry to the final payment.</p>
              <ul>
                <li><CalendarDays size={18} /><span><b>Studio scheduling</b>Intelligent calendars for every shoot and team.</span></li>
                <li><Workflow size={18} /><span><b>Client booking engine</b>A frictionless journey from enquiry to confirmation.</span></li>
                <li><CircleDollarSign size={18} /><span><b>Payment milestones</b>Automated tracking, reminders, and revenue visibility.</span></li>
              </ul>
            </div>
            <div className="featured-visual">
              <div className="browser-chrome"><i /><i /><i /><span>studio.workspace / dashboard</span></div>
              <img src={weddingSaas} alt="Wedding Studio Management System dashboard" width={1600} height={912} loading="lazy" />
              <div className="metric-float metric-top"><span>THIS MONTH</span><b>24 bookings</b><em>+20%</em></div>
              <div className="metric-float metric-bottom"><Check size={15} /><span>Milestone paid</span><b>₹2,50,000</b></div>
            </div>
          </article>
        </section>

        <section className="section work-section">
          <div className="section-heading reveal">
            <div><span className="section-index">03</span><span className="kicker">Selected client work</span></div>
            <h2>Different industries.<br /><em>Distinct digital worlds.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.alt} width={1200} height={800} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <div className="project-arrow"><ArrowUpRight size={20} /></div>
                </div>
                <div className="project-meta">
                  <div><p>{project.type}</p><h3>{project.title}</h3></div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="tag-list project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section orbital-field" id="contact">
          <span className="orbit contact-orbit-one" />
          <span className="orbit contact-orbit-two" />
          <span className="spark contact-spark">✦</span>
          <div className="contact-inner">
            <div className="contact-copy reveal">
              <span className="section-index">04</span>
              <div className="eyebrow"><span /> Start a conversation</div>
              <h2>Ready to elevate your<br /><em>digital presence?</em></h2>
              <p>Tell us what you’re building. We’ll bring the strategy, systems, and creative direction to move it forward.</p>
              <a href="mailto:hello@adstudio.co">hello@adstudio.co <ArrowUpRight size={16} /></a>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
                <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <label>
                <span>Project type</span>
                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Web platform</option><option>SaaS product</option><option>Brand &amp; website</option><option>Other</option>
                </select>
              </label>
              <label><span>Tell us about the project</span><textarea name="message" placeholder="Goals, scope, timeline..." rows={4} required /></label>
              <button className="submit-button" type="submit">
                {submitted ? <><Check size={18} /> Message received</> : <>Initiate project discussion <ArrowRight size={18} /></>}
              </button>
              {submitted && <p className="form-success" role="status">Thank you. We’ll be in touch to continue the conversation.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><span>A</span><i>/</i><span>D</span></span><span className="brand-copy">SYSTEMS + STORIES</span></a>
        <p>Technical systems × creative direction</p>
        <p>© 2026 A+D Studio</p>
      </footer>
    </div>
  );
}