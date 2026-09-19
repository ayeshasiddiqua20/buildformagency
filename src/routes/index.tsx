import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  Code2,
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

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 46 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } },
};

const inView = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 } } as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reduced = useReducedMotion();

  const tap = reduced ? {} : { scale: 0.97 };
  const buttonHover = reduced ? {} : { scale: 1.03, y: -3 };

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

        <motion.a
          className="header-cta"
          href="#contact"
          whileHover={buttonHover}
          whileTap={tap}
          animate={reduced ? {} : { boxShadow: [
            "inset 0 0 18px var(--cyan-soft), 0 0 0px var(--cyan-soft)",
            "inset 0 0 26px var(--cyan-soft), 0 0 22px var(--cyan-soft)",
            "inset 0 0 18px var(--cyan-soft), 0 0 0px var(--cyan-soft)",
          ] }}
          transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        >
          Start a project <ArrowUpRight size={15} />
        </motion.a>
        <motion.button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          whileTap={tap}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </motion.button>
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
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                animate={reduced ? {} : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.2, 0.9] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />{" "}
              Web Systems &amp; Digital Architecture
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              We build <em>high-conversion</em> web systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Technical precision meets creative direction. We design digital infrastructure
              that looks exceptional and performs with purpose.
            </motion.p>
            <motion.a
              className="primary-cta"
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={reduced
                ? { opacity: 1, y: 0 }
                : {
                    opacity: 1,
                    y: 0,
                    boxShadow: [
                      "0 0 22px var(--cyan-soft)",
                      "0 0 48px color-mix(in oklab, var(--cyan) 34%, transparent)",
                      "0 0 22px var(--cyan-soft)",
                    ],
                  }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: { duration: 0.6, delay: 0.4 },
                boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={buttonHover}
              whileTap={tap}
            >
              Initiate project discussion <ArrowRight size={17} />
            </motion.a>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to studio directors">
            <span>Explore the studio</span><ArrowDown size={16} />
          </a>
        </section>

        <section className="section founders-section" id="about">
          <motion.div className="section-heading" variants={reveal} {...inView}>
            <div><span className="section-index">01</span><span className="kicker">Two disciplines. One system.</span></div>
            <h2>Built where logic<br />meets <em>imagination.</em></h2>
          </motion.div>

          <div className="founder-grid">
            <motion.article
              className="founder-card founder-technical"
              variants={reveal}
              {...inView}
              whileHover={reduced ? {} : {
                y: -8,
                scale: 1.01,
                borderColor: "color-mix(in oklab, var(--cyan) 70%, transparent)",
                boxShadow: "0 30px 80px color-mix(in oklab, var(--cyan) 18%, transparent), 0 0 42px color-mix(in oklab, var(--cyan) 30%, transparent)",
              }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
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
            </motion.article>

            <motion.article
              className="founder-card founder-creative"
              variants={reveal}
              {...inView}
              whileHover={reduced ? {} : {
                y: -8,
                scale: 1.01,
                borderColor: "color-mix(in oklab, var(--amber) 70%, transparent)",
                boxShadow: "0 30px 80px color-mix(in oklab, var(--amber) 18%, transparent), 0 0 42px color-mix(in oklab, var(--amber) 30%, transparent)",
              }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
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
            </motion.article>
          </div>
        </section>

        <section className="section featured-section" id="work">
          <motion.div className="section-heading compact" variants={reveal} {...inView}>
            <div><span className="section-index">02</span><span className="kicker">Featured infrastructure</span></div>
            <h2>A studio operating system,<br /><em>fully connected.</em></h2>
          </motion.div>

          <motion.article
            className="featured-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="featured-copy">
              <div className="badge-row">
                <motion.span
                  animate={reduced ? {} : { y: [0, -4, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Enterprise SaaS
                </motion.span>
                <motion.span
                  className="live-badge"
                  animate={reduced ? {} : { y: [0, -4, 0], opacity: [1, 0.78, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <i /> Live Infrastructure
                </motion.span>
              </div>
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
          </motion.article>
        </section>

        <section className="section work-section">
          <motion.div className="section-heading" variants={reveal} {...inView}>
            <div><span className="section-index">03</span><span className="kicker">Selected client work</span></div>
            <h2>Different industries.<br /><em>Distinct digital worlds.</em></h2>
          </motion.div>
          <motion.div
            className="project-grid"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <motion.article className="project-card" key={project.title} variants={gridItem}>
                <div className="project-image-wrap">
                  <motion.img
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    whileHover={reduced ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                  <span className="project-number">{project.number}</span>
                  <div className="project-arrow"><ArrowUpRight size={20} /></div>
                </div>
                <div className="project-meta">
                  <div><p>{project.type}</p><h3>{project.title}</h3></div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="tag-list project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="contact-section orbital-field" id="contact">
          <span className="orbit contact-orbit-one" />
          <span className="orbit contact-orbit-two" />
          <span className="spark contact-spark">✦</span>
          <div className="contact-inner">
            <motion.div className="contact-copy" variants={reveal} {...inView}>
              <span className="section-index">04</span>
              <div className="eyebrow"><span /> Start a conversation</div>
              <h2>Ready to elevate your<br /><em>digital presence?</em></h2>
              <p>Tell us what you’re building. We’ll bring the strategy, systems, and creative direction to move it forward.</p>
              <a href="mailto:hello@adstudio.co">hello@adstudio.co <ArrowUpRight size={16} /></a>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit} variants={reveal} {...inView}>
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
              <motion.button className="submit-button" type="submit" whileHover={buttonHover} whileTap={tap}>
                {submitted ? <><Check size={18} /> Message received</> : <>Initiate project discussion <ArrowRight size={18} /></>}
              </motion.button>
              {submitted && <p className="form-success" role="status">Thank you. We’ll be in touch to continue the conversation.</p>}
            </motion.form>
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
