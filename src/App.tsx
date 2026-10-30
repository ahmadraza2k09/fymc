import { useState, type ReactNode } from "react"

const hero =
  "https://images.unsplash.com/photo-1781686910394-9fa17922c499?auto=format&fit=crop&w=1800&q=85"

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
)

function Heading({
  eyebrow,
  children,
  body,
  light = false,
}: {
  eyebrow: string
  children: ReactNode
  body?: string
  light?: boolean
}) {
  return (
    <div className={`heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}

const pillars = [
  [
    "01",
    "Actionable Roadmaps",
    "Step-by-step career blueprints, not vague motivation — translating long-term goals into the next concrete action.",
  ],
  [
    "02",
    "Skill Supervision",
    "Practical, market-ready skill development through Skill Pods, with hands-on learning, feedback, and accountability built in.",
  ],
  [
    "03",
    "Expert Mentorship",
    "Guidance from experienced seniors and industry professionals, providing real-world perspective no classroom can fully provide.",
  ],
]

const process = [
  [
    "Join & discover",
    "Share your academic background, interests, goals, and the areas where you want to grow.",
  ],
  [
    "Find your direction",
    "Get guided toward relevant career paths, skills, and clear next steps based on your ambitions.",
  ],
  [
    "Build with support",
    "Develop practical capability through Skill Pods, hands-on tasks, feedback, and accountability.",
  ],
  [
    "Grow your network",
    "Learn through mentors, projects, workshops, leadership experiences, and new opportunities.",
  ],
]

const phases = [
  [
    "Phase 01",
    "Campus Launch",
    "Establish FYMC’s initial presence, recruit the founding community, launch the first Skill Pod, and use feedback to refine the model.",
  ],
  [
    "Phase 02",
    "Digital Expansion",
    "Extend the network beyond the initial launch through digital channels and make future programs accessible to more students.",
  ],
  [
    "Phase 03",
    "Partnerships & Scale",
    "Develop relationships with universities, mentors, organizations, and stakeholders to expand FYMC’s reach over time.",
  ],
]

export default function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="FYMC home">
            <img src="/fymc-logo.png" alt="" />
            <span>
              <strong>FYMC</strong>
              <small>Future Youth Mentorship Council</small>
            </span>
          </a>
          <nav
            className={`nav-links ${open ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={close}>
              About
            </a>
            <a href="#pillars" onClick={close}>
              Our Model
            </a>
            <a href="#roadmap" onClick={close}>
              Roadmap
            </a>
            <a href="#contact" onClick={close}>
              Contact
            </a>
            <a className="nav-cta" href="#build" onClick={close}>
              Build with us <Arrow />
            </a>
          </nav>
          <button
            className="menu"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src={hero}
          alt="University students walking together on campus"
        />
        <div className="hero-overlay" />
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              Turn ambition into <em>professional reality.</em>
            </h1>
            <p>
              Structured roadmaps, supervised skill development, and real
              mentorship for Pakistan’s next generation of professionals.
            </p>
            <div className="hero-actions">
              <a className="button gold" href="#pillars">
                Explore our model <Arrow />
              </a>
              <a className="text-link" href="#build">
                Build with FYMC <Arrow />
              </a>
            </div>
          </div>
          <aside className="hero-note">
            <span>Our purpose</span>
            <p>
              Because ambition is not the problem for today’s students —
              direction is.
            </p>
          </aside>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">The gap we are closing</span>
            <blockquote>
              Getting into university is only half the battle.
            </blockquote>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Across Pakistan, students graduate with strong academic
              foundations but limited practical direction on how to translate
              that education into a career.
            </p>
            <p>
              Without a structured path, students apply for roles they were
              never prepared for, collect certifications without a coherent
              plan, and miss honest feedback from people who have walked the
              path.
            </p>
            <a className="line-link" href="#solution">
              See how FYMC responds <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="solution section" id="solution">
        <div className="container solution-wrap">
          <div className="solution-intro">
            <Heading eyebrow="Our solution">
              A clear, supported path from <em>potential to progress.</em>
            </Heading>
            <p className="solution-lead">
              FYMC bridges the space between academic potential and professional
              readiness. Our model makes practical direction more accessible and
              actionable — without gating guidance behind cost or personal
              connections.
            </p>
          </div>
          <div className="mission-vision-cards">
            <div className="mv-card">
              <span className="mv-label">Mission</span>
              <h3>Structured Roadmaps & Market-Ready Skills</h3>
              <p>
                Give Pakistan’s youth structured roadmaps, real mentorship, and
                the skills the market demands.
              </p>
            </div>
            <div className="mv-card">
              <span className="mv-label">Vision</span>
              <h3>Clarity, Confidence & Sustainable Community</h3>
              <p>
                A generation moving into meaningful careers with clarity,
                confidence, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars section" id="pillars">
        <div className="container">
          <Heading
            eyebrow="The FYMC model"
            body="Every FYMC program brings guidance, practical experience, and human support together to move a student from ambition to action."
            light
          >
            Three pillars. <em>One clear direction.</em>
          </Heading>
          <div className="pillar-grid">
            {pillars.map(([num, title, text]) => (
              <article className="pillar-box" key={num}>
                <div className="pillar-box-head">
                  <span className="pillar-num">{num}</span>
                  <div className="pillar-icon">
                    {num === "01" && (
                      <svg viewBox="0 0 48 48">
                        <path d="M8 38 38 8M22 8h16v16M8 25v13h13" />
                      </svg>
                    )}
                    {num === "02" && (
                      <svg viewBox="0 0 48 48">
                        <path d="M24 6 8 14v10c0 10 6 16 16 19 10-3 16-9 16-19V14L24 6Z" />
                        <path d="m17 24 5 5 10-11" />
                      </svg>
                    )}
                    {num === "03" && (
                      <svg viewBox="0 0 48 48">
                        <circle cx="18" cy="17" r="7" />
                        <circle cx="33" cy="21" r="5" />
                        <path d="M6 40c1-9 5-14 12-14s11 5 12 14M29 29c7 0 11 4 12 11" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container process-grid">
          <div>
            <Heading
              eyebrow="How it works"
              body="FYMC meets students where they are, then provides the structure, practice, and connections to help them take their next step."
            >
              Designed to move you <em>forward.</em>
            </Heading>
            <a
              className="button navy"
              href="mailto:fymc.official@gmail.com?subject=I want to join FYMC"
            >
              Start your journey <Arrow />
            </a>
          </div>
          <div className="process-list">
            {process.map(([title, text], i) => (
              <article key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience">
        <div className="container audience-grid">
          <div>
            <span className="eyebrow gold-text">Who we serve</span>
            <h2>Ambitious students who need more than advice.</h2>
          </div>
          <p>
            From university students exploring career directions to recent
            graduates preparing to enter the professional world — FYMC is for
            those ready to act but looking for a structured path.
          </p>
        </div>
      </section>

      <section className="roadmap section" id="roadmap">
        <div className="container">
          <Heading
            eyebrow="Founding roadmap"
            body="Our founding structure will evolve as FYMC launches its first programs, learns from participants, and expands its community."
          >
            Starting focused. <em>Growing with purpose.</em>
          </Heading>
          <div className="roadmap-line">
            {phases.map(([phase, title, text], i) => (
              <article key={phase}>
                <div className="marker">
                  <span>{i + 1}</span>
                </div>
                <span className="phase">{phase}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="build section" id="build">
        <div className="container build-grid">
          <div>
            <span className="eyebrow gold-text">Our founding stage</span>
            <h2>
              Build the network <em>with us.</em>
            </h2>
            <p>
              FYMC is at the beginning of its journey. We are looking for people
              and organizations who believe in practical, accessible youth
              development.
            </p>
            <a
              className="button gold"
              href="mailto:fymc.official@gmail.com?subject=Build with FYMC"
            >
              Become a founding partner <Arrow />
            </a>
          </div>
          <div className="partner-list">
            {[
              [
                "Mentors",
                "Share practical knowledge, experience, and honest guidance with students entering your field.",
              ],
              [
                "Universities & student organizations",
                "Connect students with structured career-development opportunities.",
              ],
              [
                "Professionals & organizations",
                "Contribute expertise, opportunities, projects, or valuable industry exposure.",
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <div className="check">
                  <Check />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-box">
          <div>
            <span className="eyebrow">Let’s move forward</span>
            <h2>
              Together, we build a <em>brighter tomorrow.</em>
            </h2>
          </div>
          <div className="contact-details">
            <span>Founder</span>
            <h3>Muzammil Ghouri</h3>
            <p>Future Youth Mentorship Council</p>
            <a className="email-link" href="mailto:fymc.official@gmail.com">
              fymc.official@gmail.com <Arrow />
            </a>
            <div className="socials">
              <a
                href="https://www.linkedin.com/company/fymc-official"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.facebook.com/fymc.officiall"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/fymc.official"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top">
            <img src="/fymc-logo.png" alt="" />
            <span>
              <strong>FYMC</strong>
              <small>Future Youth Mentorship Council</small>
            </span>
          </a>
          <span>© {new Date().getFullYear()} FYMC. All rights reserved.</span>
        </div>
        <div className="footer-watermark">
          <div className="container">
            <p>
              Designed & Developed by{" "}
              <a
                href="https://youthawarenessnetwork.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Youth Awareness Network
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
