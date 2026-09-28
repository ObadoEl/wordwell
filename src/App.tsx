import { useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "briefcase"
  | "check"
  | "clock"
  | "edit"
  | "file"
  | "lock"
  | "menu"
  | "message"
  | "search"
  | "shield"
  | "star"
  | "users";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    edit: (
      <>
        <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z" />
        <path d="m13.5 6.5 4 4" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    message: (
      <>
        <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6M18 13a4 4 0 0 1 3 4v2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand-light" : ""}`}>
      <svg aria-hidden="true" viewBox="0 0 40 40" className="brand-mark">
        <path d="M7 7h18c5 0 8 3 8 8v18H15c-5 0-8-3-8-8V7Z" fill="currentColor" />
        <path d="M14 14h12M14 20h9M14 26h5" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span>Wordwell</span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  onClick?: () => void;
  className?: string;
}) {
  const ButtonElement = "button";
  return (
    <ButtonElement className={`button button-${variant} ${className}`} onClick={onClick}>
      {children}
    </ButtonElement>
  );
}

function Avatar({ initials, tone = "sand" }: { initials: string; tone?: "sand" | "blue" | "rose" | "green" }) {
  return <span className={`avatar avatar-${tone}`}>{initials}</span>;
}

function Heading({ level, children }: { level: 1 | 2 | 3; children: ReactNode }) {
  const HeadingElement = `h${level}` as "h1" | "h2" | "h3";
  return <HeadingElement>{children}</HeadingElement>;
}

const categories = [
  { icon: "edit" as IconName, title: "Article & blog writing", jobs: "Editorial, thought leadership" },
  { icon: "briefcase" as IconName, title: "Business writing", jobs: "Reports, plans, presentations" },
  { icon: "file" as IconName, title: "Website & copywriting", jobs: "Websites, campaigns, product copy" },
  { icon: "check" as IconName, title: "Editing & proofreading", jobs: "Structural and line editing" },
  { icon: "users" as IconName, title: "Resume & career", jobs: "CVs, profiles, cover letters" },
  { icon: "search" as IconName, title: "Research & technical", jobs: "Reports, guides, white papers" },
];

const writers = [
  {
    initials: "MC",
    name: "Maya Chen",
    role: "B2B technology writer",
    rating: "4.9",
    projects: "42 projects",
    rate: "From $75/hr",
    skills: ["SaaS", "White papers", "Strategy"],
    tone: "sand" as const,
  },
  {
    initials: "JO",
    name: "James Okafor",
    role: "Brand & editorial copywriter",
    rating: "5.0",
    projects: "67 projects",
    rate: "From $90/hr",
    skills: ["Brand voice", "Editorial", "Campaigns"],
    tone: "blue" as const,
  },
  {
    initials: "AS",
    name: "Amelia Stone",
    role: "Science & health editor",
    rating: "4.9",
    projects: "38 projects",
    rate: "From $80/hr",
    skills: ["Healthcare", "Editing", "Research"],
    tone: "rose" as const,
  },
];

const projects = [
  {
    title: "Thought leadership series for a climate technology firm",
    category: "Article Writing",
    budget: "$1,800 fixed",
    detail: "We’re looking for an experienced writer to shape six executive articles from founder interviews and source material.",
    skills: ["Climate tech", "B2B", "Interviews"],
    proposals: "8 proposals",
    posted: "2 hours ago",
  },
  {
    title: "Editorial review of an annual impact report",
    category: "Editing",
    budget: "$70–$95/hr",
    detail: "Review a 42-page report for structure, consistency, clarity and alignment with our established voice.",
    skills: ["Line editing", "Reports", "AP style"],
    proposals: "5 proposals",
    posted: "Today",
  },
];

export default function App() {
  const [audience, setAudience] = useState<"clients" | "writers">("clients");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ButtonElement = "button";
  const InputElement = "input";

  return (
    <main className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
            <Button variant="ghost">Find writers</Button>
            <Button variant="ghost">Browse projects</Button>
            <Button variant="ghost">How it works</Button>
            <Button variant="ghost">Pricing</Button>
          </nav>
          <div className="header-actions">
            <Button variant="ghost">Log in</Button>
            <Button>Join Wordwell <Icon name="arrow" size={17} /></Button>
          </div>
          <ButtonElement
            className="mobile-menu"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
          </ButtonElement>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Professional writing, thoughtfully matched</div>
            <Heading level={1}>Great ideas deserve <em>great writing.</em></Heading>
            <p className="hero-lead">
              Work with proven writers, editors and content specialists who understand your subject—and the people you need to reach.
            </p>
            <div className="hero-actions">
              <Button>Find a writer <Icon name="arrow" size={18} /></Button>
              <Button variant="secondary">Find writing work</Button>
            </div>
            <div className="trust-note">
              <span className="trust-avatars"><Avatar initials="MC" /><Avatar initials="JO" tone="blue" /><Avatar initials="AS" tone="rose" /></span>
              <span><strong>Specialists for every brief</strong><small>Vetted profiles. Clear rates. No guesswork.</small></span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Writing marketplace preview">
            <div className="paper paper-back" />
            <div className="paper paper-main">
              <div className="paper-kicker">PROJECT BRIEF · EDITORIAL</div>
              <div className="paper-title">Find the right words for what comes next.</div>
              <div className="paper-rule" />
              <div className="paper-lines"><span /><span /><span /><span /></div>
              <div className="paper-footer">
                <span>BRIEF 024</span>
                <span className="paper-signature">Wordwell</span>
              </div>
            </div>
            <svg className="pen-line" viewBox="0 0 530 420" aria-hidden="true">
              <path d="M86 327c66 27 122 26 159-2 39-30 61-85 123-91 45-5 66 18 84 3" />
              <path d="m440 229 31-4-21 23Z" />
            </svg>
            <div className="match-card">
              <span className="match-icon"><Icon name="check" size={17} /></span>
              <span><strong>3 strong matches</strong><small>Ready to review your brief</small></span>
            </div>
            <div className="editor-card">
              <Avatar initials="MC" />
              <span><strong>Maya Chen</strong><small><Icon name="star" size={12} /> 4.9 · B2B specialist</small></span>
            </div>
          </div>
        </div>

        <div className="container search-panel">
          <div className="search-tabs" role="tablist">
            <ButtonElement className={audience === "clients" ? "active" : ""} onClick={() => setAudience("clients")}>
              I want to hire
            </ButtonElement>
            <ButtonElement className={audience === "writers" ? "active" : ""} onClick={() => setAudience("writers")}>
              I want to work
            </ButtonElement>
          </div>
          <div className="search-row">
            <Icon name="search" size={22} />
            <InputElement
              aria-label={audience === "clients" ? "Search for writers" : "Search for projects"}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={audience === "clients" ? "What do you need written?" : "What kind of work are you looking for?"}
            />
            <Button>Search {audience === "clients" ? "writers" : "projects"}</Button>
          </div>
          <div className="popular"><strong>Popular:</strong> Website copy <span /> Technical writing <span /> Editing <span /> Business plans</div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><Icon name="users" /><span><strong>Professional writers</strong><small>Detailed, reviewed profiles</small></span></div>
          <div><Icon name="lock" /><span><strong>Secure project funding</strong><small>Funds protected until approval</small></span></div>
          <div><Icon name="file" /><span><strong>Transparent pricing</strong><small>Clear costs before work starts</small></span></div>
          <div><Icon name="message" /><span><strong>Private workspace</strong><small>Everything in one place</small></span></div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="overline">EXPERTISE FOR EVERY IDEA</span><Heading level={2}>Words for every kind of work.</Heading></div>
            <p>From a first draft to a final polish, find experienced specialists for the work in front of you.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <ButtonElement className="category-card" key={category.title}>
                <span className="category-icon"><Icon name={category.icon} size={22} /></span>
                <span className="category-copy"><strong>{category.title}</strong><small>{category.jobs}</small></span>
                <Icon name="arrow" size={18} />
              </ButtonElement>
            ))}
          </div>
          <div className="center-action"><Button variant="secondary">Explore all services <Icon name="arrow" size={17} /></Button></div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div className="process-intro">
            <span className="overline light-overline">A BETTER WAY TO WORK</span>
            <Heading level={2}>From brief to brilliant, without the friction.</Heading>
            <p>Wordwell gives you the structure to move confidently and the flexibility to make every project your own.</p>
            <div className="audience-toggle">
              <ButtonElement className={audience === "clients" ? "active" : ""} onClick={() => setAudience("clients")}>For clients</ButtonElement>
              <ButtonElement className={audience === "writers" ? "active" : ""} onClick={() => setAudience("writers")}>For writers</ButtonElement>
            </div>
          </div>
          <div className="steps">
            {(audience === "clients"
              ? [
                  ["01", "Share your brief", "Tell us what you’re creating, your goals, timeline and budget."],
                  ["02", "Meet your match", "Review thoughtful proposals from writers with the right expertise."],
                  ["03", "Work beautifully together", "Collaborate, share files and approve milestones in one place."],
                  ["04", "Approve with confidence", "Release secure payment only when the work is complete."],
                ]
              : [
                  ["01", "Build your profile", "Showcase your expertise, services and strongest work."],
                  ["02", "Discover good-fit briefs", "Find serious opportunities that value your experience."],
                  ["03", "Propose your approach", "Set clear scope, milestones, rates and delivery dates."],
                  ["04", "Do your best work", "Collaborate professionally and get paid securely."],
                ]
            ).map(([number, title, description]) => (
              <div className="step" key={number}>
                <span className="step-number">{number}</span>
                <span><strong>{title}</strong><small>{description}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section writers-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="overline">FEATURED PROFESSIONALS</span>
            <Heading level={2}>Expertise you can trust.</Heading>
            <p>Discover independent writers with proven subject knowledge, clear working styles and work that speaks for itself.</p>
          </div>
          <div className="writer-grid">
            {writers.map((writer) => (
              <article className="writer-card" key={writer.name}>
                <div className="writer-top">
                  <Avatar initials={writer.initials} tone={writer.tone} />
                  <span className="verified"><Icon name="check" size={13} /> Verified</span>
                </div>
                <Heading level={3}>{writer.name}</Heading>
                <p className="writer-role">{writer.role}</p>
                <div className="writer-meta">
                  <span><Icon name="star" size={14} /> <strong>{writer.rating}</strong></span>
                  <span>{writer.projects}</span>
                </div>
                <div className="skill-row">{writer.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <div className="writer-bottom"><strong>{writer.rate}</strong><Button variant="ghost">View profile <Icon name="arrow" size={15} /></Button></div>
              </article>
            ))}
          </div>
          <div className="center-action"><Button variant="secondary">Browse all writers <Icon name="arrow" size={17} /></Button></div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container projects-grid">
          <div className="project-intro">
            <span className="overline">OPPORTUNITIES WITH PURPOSE</span>
            <Heading level={2}>Serious projects, clearly defined.</Heading>
            <p>Browse thoughtful briefs from clients who know the value of excellent writing.</p>
            <Button>Find writing work <Icon name="arrow" size={17} /></Button>
            <div className="project-promise">
              <Icon name="shield" />
              <span><strong>Built for fair work</strong><small>Clear scopes, transparent fees and payment protection on every contract.</small></span>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-head">
                  <span className="project-category">{project.category}</span>
                  <span className="project-time"><Icon name="clock" size={14} /> {project.posted}</span>
                </div>
                <Heading level={3}>{project.title}</Heading>
                <p>{project.detail}</p>
                <div className="skill-row">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <div className="project-card-foot">
                  <span><strong>{project.budget}</strong><small>{project.proposals}</small></span>
                  <Button variant="ghost">View project <Icon name="arrow" size={15} /></Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div className="cta-copy">
            <span className="overline light-overline">YOUR NEXT CHAPTER</span>
            <Heading level={2}>Ready to get your project moving?</Heading>
            <p>Bring your brief. Find your specialist. Make something worth reading.</p>
          </div>
          <div className="cta-actions">
            <Button variant="light">Post a project <Icon name="arrow" size={18} /></Button>
            <Button variant="ghost" className="on-dark">Become a writer</Button>
          </div>
          <svg className="cta-art" viewBox="0 0 260 170" aria-hidden="true">
            <path d="M14 148c46-1 67-15 88-47 22-32 41-55 90-55 24 0 40 7 57 20" />
            <path d="M167 37c20-25 45-29 74-16-14 4-25 13-32 28" />
          </svg>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>Better writing starts with the right working relationship.</p>
          </div>
          {[
            ["Marketplace", "Find writers", "Browse projects", "Writing services", "How it works"],
            ["Company", "About", "Careers", "Trust & safety", "Contact"],
            ["Resources", "Writer resources", "Client guide", "Editorial journal", "Help center"],
            ["Legal", "Terms", "Privacy", "Accessibility", "Cookie settings"],
          ].map(([heading, ...items]) => (
            <div className="footer-column" key={heading}>
              <strong>{heading}</strong>
              {items.map((item) => <Button key={item} variant="ghost">{item}</Button>)}
            </div>
          ))}
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Wordwell Marketplace. All rights reserved.</span>
          <span>Created for people who care about words.</span>
        </div>
      </footer>
    </main>
  );
}
