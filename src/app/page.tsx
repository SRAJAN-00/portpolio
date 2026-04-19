import Link from "next/link";
import styles from "./page.module.css";
import FadeIn from "../components/FadeIn";
import ThemeToggle from "../components/ThemeToggle";
import { MotionHoverScale, MotionSpanSubtle } from "../components/MotionHover";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* ── Header ── */}
      <FadeIn delay={0}>
        <header className={styles.header}>
          <div className={styles.profileRow}>
            <MotionHoverScale>
              <div className={styles.avatar}>S</div>
            </MotionHoverScale>
            <h1 className={styles.name}>
              Srajan <span className={styles.aka}>aka</span>{" "}
              <span className={styles.nickname}>Design Engineer</span>
            </h1>
            <div style={{ marginLeft: "auto" }}>
              <ThemeToggle />
            </div>
          </div>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLinkActive}>Home</Link>
            <Link href="#projects" className={styles.navLink}>Projects</Link>
            <Link href="#experience" className={styles.navLink}>Experience</Link>
          </nav>
        </header>
      </FadeIn>

      {/* ── Bio ── */}
      <FadeIn delay={150}>
        <section className={styles.bio}>
          <p>
            I&apos;m a Design Engineer & Frontend Developer at heart, tinkering with UI and code almost 90% of the time. I&apos;m mostly active on{" "}
            <Link href="https://github.com/SRAJAN-00" target="_blank" className={styles.highlight}>GitHub</Link> where I share everything.
          </p>
          <p>
            When I&apos;m not coding, I usually talk about warm editorial UI aesthetics and front-end design taste. Currently pursuing a BCA degree.
          </p>
          <p>
            I&apos;ve been working as a{" "}
            <Link href="#experience" className={styles.highlight}>Frontend Intern</Link> at a language learning platform, building 6+ interactive exercise components shipped to production. My favourite thing is to ship new features every day.
          </p>
        </section>
      </FadeIn>

      {/* ── Skills & GitHub ── */}
      <FadeIn delay={200}>
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills & Activity</h2>
          <div className={styles.skillsContainer}>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillReact}`}>React</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillNext}`}>Next.js</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillTS}`}>TypeScript</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillTailwind}`}>Tailwind CSS</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillFramer}`}>Framer Motion</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillJava}`}>Java</span></MotionHoverScale>
            <MotionHoverScale><span className={`${styles.skillPill} ${styles.skillPrisma}`}>Prisma</span></MotionHoverScale>
          </div>
          <div className={styles.githubStats}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Recent open source activity & stats:</span>
            <Link href="https://github.com/SRAJAN-00" target="_blank" className={styles.githubStatsLink}>View GitHub Profile →</Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <hr className={styles.divider} />
      </FadeIn>

      {/* ── Projects ── */}
      <section id="projects" className={styles.section}>
        <FadeIn delay={0}>
          <h2 className={styles.sectionTitle}>Things I do</h2>
        </FadeIn>
        <div className={styles.list}>
          <FadeIn delay={100}>
            <Link href="https://github.com/SRAJAN-00/QuietZone" target="_blank" className={styles.listItem}>
              <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, #ef4444, #f87171)", color: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-9 5 18 3-10h6"/></svg>
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHeaderRow}>
                  <span className={styles.itemTitle}>QuietZone <span className={styles.prodBadge}>Production</span></span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.itemDate}>2024</span>
                </div>
                <span className={styles.itemDesc}>Android geofencing sound profile management app. Engineered background services to toggle device modes contextually via Maps API.</span>
              </div>
              <div className={styles.stackTags}>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>📱</span><span className={styles.stackText}>Android</span></MotionSpanSubtle>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>☕</span><span className={styles.stackText}>Java</span></MotionSpanSubtle>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={200}>
            <Link href="https://exdraww.vercel.app/" target="_blank" className={styles.listItem}>
              <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)", color: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHeaderRow}>
                  <span className={styles.itemTitle}>Exdraww</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.itemDate}>2024</span>
                </div>
                <span className={styles.itemDesc}>Real-time collaborative drawing board supporting multiple users. Built with React and optimized canvas rendering for smooth performance.</span>
              </div>
              <div className={styles.stackTags}>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>⚛️</span><span className={styles.stackText}>React</span></MotionSpanSubtle>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>💨</span><span className={styles.stackText}>Tailwind</span></MotionSpanSubtle>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={300}>
            <Link href="https://rentalbook-three.vercel.app/" target="_blank" className={styles.listItem}>
              <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHeaderRow}>
                  <span className={styles.itemTitle}>RentalBook</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.itemDate}>2023</span>
                </div>
                <span className={styles.itemDesc}>Full-stack digital library platform. Implemented secure auth and robust database schema using Prisma and PostgreSQL.</span>
              </div>
              <div className={styles.stackTags}>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>▲</span><span className={styles.stackText}>Next.js</span></MotionSpanSubtle>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>◆</span><span className={styles.stackText}>Prisma</span></MotionSpanSubtle>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={400}>
            <Link href="https://brain-1.vercel.app/" target="_blank" className={styles.listItem}>
              <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHeaderRow}>
                  <span className={styles.itemTitle}>Second Brain</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.itemDate}>2024</span>
                </div>
                <span className={styles.itemDesc}>Personal knowledge base app. Engineered for high performance with complex state management and a responsive UI.</span>
              </div>
              <div className={styles.stackTags}>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>⚡</span><span className={styles.stackText}>Vite</span></MotionSpanSubtle>
                <MotionSpanSubtle className={styles.stackTag}><span className={styles.stackIcon}>⚛️</span><span className={styles.stackText}>React</span></MotionSpanSubtle>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <FadeIn delay={100}>
        <hr className={styles.divider} />
      </FadeIn>

      {/* ── Experience ── */}
      <section id="experience" className={styles.section}>
        <FadeIn delay={0}>
          <h2 className={styles.sectionTitle}>Companies I&apos;ve worked with</h2>
        </FadeIn>
        <div className={styles.gridList}>
          <FadeIn delay={150}>
            <div className={styles.gridItem}>
              <div className={styles.gridItemHeader}>
                <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "#fff", borderRadius: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <span className={styles.gridItemTitle}>Language Learning Platform</span>
                <span className={styles.itemDate}>Aug 2023 — Present</span>
              </div>
              <p className={styles.gridItemDesc}>
                Built 6+ interactive exercise components shipped to production, utilizing React, Tailwind CSS, and Framer Motion. Focused on responsive design and fluid UI animations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <FadeIn delay={100}>
        <footer className={styles.footer}>
          <span>© 2026 Srajan</span>
          <div className={styles.socials}>
            <MotionHoverScale>
              <Link href="mailto:hello@srajan.dev" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </Link>
            </MotionHoverScale>
            <MotionHoverScale>
              <Link href="https://github.com/SRAJAN-00" target="_blank" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </Link>
            </MotionHoverScale>
            <MotionHoverScale>
              <Link href="https://x.com/SRAJAN00_" target="_blank" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </MotionHoverScale>
          </div>
        </footer>
      </FadeIn>
    </main>
  );
}
