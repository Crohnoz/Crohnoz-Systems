import { useState } from "react";

const LINKS = {
  website: "https://crohnozlabs.cl",
  profile: "https://crohnozlabs.cl/profile",
  github: "https://github.com/Crohnoz",
  evidence: "https://github.com/Crohnoz/Crohnoz/tree/main/evidence",
  fdrCase: "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/fdr.md",
  fdrDemo: "https://crohnozlabs.cl/demos/fdr-centro-podologico",
  forge: "https://github.com/Crohnoz/Crohnoz-Forge",
  forgeCase: "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/forge.md",
  forgeDemo: "https://crohnoz-forge.netlify.app",
  freshMarket: "https://github.com/Crohnoz/Crohnoz-FreshMarket",
  freshMarketCase: "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/fresh-market.md",
  inclume: "https://github.com/Crohnoz/IncluMe",
  inclumeCase: "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/inclume.md",
  inclumeDemo: "https://inclume-chile.netlify.app/",
  rental: "https://github.com/Crohnoz/Crohnoz-Rental-Ops",
  rentalCase: "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/rental-operations.md",
  email: "mailto:prog.eflores@gmail.com",
  linkedin: "https://www.linkedin.com/in/prog-eflores/",
};

const copy = {
  es: {
    nav: {
      flagship: "Flagship",
      depth: "Ingeniería",
      portfolio: "Portfolio",
      evidence: "Evidencia",
      method: "Método",
      engagement: "Colaboración",
    },
    skip: "Saltar al contenido",
    heroEyebrow: "CROHNOZ SYSTEMS · PUBLIC ENGINEERING SURFACE",
    heroTitle: "Sistemas construidos alrededor de operaciones reales.",
    heroText:
      "Diseño productos, backends y herramientas operacionales partiendo desde el problema, las reglas del dominio y la evidencia. Esta superficie pública muestra qué puedo demostrar sin exponer implementación privada ni datos sensibles.",
    founder: "Founder · Product & Systems Architect",
    location: "Chile → Global",
    principle: "Evidence, not claims",
    openEvidence: "Explorar evidencia pública",
    openLabs: "Crohnoz Labs",
    openProfile: "Perfil profesional",
    flagshipEyebrow: "FLAGSHIP SYSTEM",
    flagshipTitle: "FDR · Healthcare Operations",
    flagshipText:
      "El sistema más maduro del portfolio. La evidencia pública se concentra en modelado de dominio, integridad backend, lifecycle operacional, privacidad, regresiones y entrega controlada.",
    openCase: "Engineering case study",
    openDemo: "Safe live demo",
    depthTitle: "Profundidad por problema, no por cantidad de badges.",
    depthText:
      "La tecnología es secundaria al contrato operacional que debe hacer cumplir. Estas son las capas que conecto al diseñar y entregar un sistema.",
    portfolioTitle: "Productos tempranos, presentados con madurez honesta.",
    portfolioText:
      "Los experimentos permanecen visibles porque prueban capacidades distintas, pero ninguno recibe el mismo peso que el flagship mientras la evidencia no lo justifique.",
    maturityTitle: "La madurez es una afirmación de evidencia.",
    maturityText:
      "Un build desplegable, una UI pulida o muchas líneas de código no suben el nivel por sí solos. Cada sistema avanza cuando la operación lo demuestra.",
    operationalEvidence: "Selected operational evidence",
    operationalEvidenceText:
      "Sistemas concretos que demuestran reglas operacionales y decisiones de arquitectura sin inflar su alcance comercial.",
    methodTitle: "De problema a evidencia",
    methodText:
      "El stack viene después del entendimiento operacional. Seguridad, privacidad, pruebas y continuidad forman parte del producto desde el diseño.",
    engagementTitle: "Dónde este enfoque genera más valor.",
    engagementText:
      "El mejor encaje es cuando el problema exige entender una operación, modelar sus reglas y convertirlas en software confiable, no simplemente acumular features.",
    inspectFirst: "Revisar evidencia primero",
    boundaryTitle: "Public by design. Private by default.",
    boundaryText:
      "La evidencia pública puede mostrar problemas, arquitectura sanitizada, demos y decisiones de ingeniería. Credenciales, datos reales, topología privada y lógica confidencial permanecen fuera del escaparate.",
    contactTitle: "Construir algo útil empieza entendiendo la operación.",
    contactText:
      "Para proyectos, colaboración técnica o revisión de sistemas, puedes entrar por Crohnoz Labs, el perfil profesional, GitHub o LinkedIn.",
    evidenceLink: "Ver evidencia",
    repoLink: "Abrir repositorio",
    liveDemo: "Demo pública",
    languageLabel: "Idioma",
    current: "Actual",
  },
  en: {
    nav: {
      flagship: "Flagship",
      depth: "Engineering",
      portfolio: "Portfolio",
      evidence: "Evidence",
      method: "Method",
      engagement: "Engagement",
    },
    skip: "Skip to content",
    heroEyebrow: "CROHNOZ SYSTEMS · PUBLIC ENGINEERING SURFACE",
    heroTitle: "Systems built around real operations.",
    heroText:
      "I design products, backends and operational tools starting from the problem, domain rules and evidence. This public surface shows what can be demonstrated without exposing private implementation or sensitive data.",
    founder: "Founder · Product & Systems Architect",
    location: "Chile → Global",
    principle: "Evidence, not claims",
    openEvidence: "Explore public evidence",
    openLabs: "Crohnoz Labs",
    openProfile: "Professional profile",
    flagshipEyebrow: "FLAGSHIP SYSTEM",
    flagshipTitle: "FDR · Healthcare Operations",
    flagshipText:
      "The most mature system in the portfolio. Public evidence focuses on domain modeling, backend integrity, operational lifecycle, privacy, regression thinking and controlled delivery.",
    openCase: "Engineering case study",
    openDemo: "Safe live demo",
    depthTitle: "Depth by problem domain, not badge count.",
    depthText:
      "Technology is secondary to the operational contract it must enforce. These are the layers I connect when designing and delivering a system.",
    portfolioTitle: "Early products, shown at honest maturity.",
    portfolioText:
      "Experiments remain visible because they prove different capabilities, but none receives flagship weight until the evidence supports it.",
    maturityTitle: "Maturity is an evidence claim.",
    maturityText:
      "A deployable build, polished UI or large codebase does not advance a level by itself. Each system moves when the operation proves it.",
    operationalEvidence: "Selected operational evidence",
    operationalEvidenceText:
      "Concrete systems that demonstrate operational rules and architecture decisions without inflating commercial scope.",
    methodTitle: "From problem to evidence",
    methodText:
      "The stack comes after operational understanding. Security, privacy, testing and continuity are product concerns from the design stage.",
    engagementTitle: "Where this approach creates the most value.",
    engagementText:
      "The best fit is when the challenge requires understanding an operation, modeling its rules and turning them into reliable software—not simply accumulating features.",
    inspectFirst: "Inspect evidence first",
    boundaryTitle: "Public by design. Private by default.",
    boundaryText:
      "Public evidence may show problems, sanitized architecture, demos and engineering decisions. Credentials, real data, private topology and confidential logic stay outside the storefront.",
    contactTitle: "Useful systems start by understanding the operation.",
    contactText:
      "For projects, technical collaboration or systems review, reach out through Crohnoz Labs, the professional profile, GitHub or LinkedIn.",
    evidenceLink: "View evidence",
    repoLink: "Open repository",
    liveDemo: "Public demo",
    languageLabel: "Language",
    current: "Current",
  },
};

const products = [
  {
    name: "Crohnoz Forge",
    maturity: "L1 · Prototype / R&D",
    description: {
      es: "Workspace de discovery y decisión: idea → evidencia → blueprint → prototype → testing → outcome.",
      en: "Discovery and decision workspace: idea → evidence → blueprint → prototype → testing → outcome.",
    },
    proof: "Local-first · stage gates · privacy · CI",
    href: LINKS.forge,
    evidenceHref: LINKS.forgeCase,
    demoHref: LINKS.forgeDemo,
  },
  {
    name: "Crohnoz Fresh Market",
    maturity: "L1 · Prototype / R&D",
    description: {
      es: "Exploración de operaciones para retail de productos frescos: inventario, lotes, recepción, preparación y merma.",
      en: "Fresh-food retail operations exploration: inventory, lots, receiving, preparation and waste.",
    },
    proof: "Django · DRF · FEFO · operations modeling",
    href: LINKS.freshMarket,
    evidenceHref: LINKS.freshMarketCase,
  },
  {
    name: "IncluMe",
    maturity: "L1 · Early Product",
    description: {
      es: "Producto de accesibilidad para información de estacionamientos, contribución ciudadana y revisión territorial.",
      en: "Accessibility product for parking information, citizen contribution and territorial review.",
    },
    proof: "Civic UX · contribution/review loop · public/admin boundary",
    href: LINKS.inclume,
    evidenceHref: LINKS.inclumeCase,
    demoHref: LINKS.inclumeDemo,
  },
];

const capabilities = [
  {
    title: "PRODUCT SYSTEMS",
    accent: "border-blue-400/30",
    description: {
      es: "Discovery · UX · modelado de dominio · arquitectura de producto · diseño de workflows.",
      en: "Discovery · UX · domain modeling · product architecture · workflow design.",
    },
    outcome: {
      es: "Fricción operacional → requisitos explícitos.",
      en: "Operational friction → explicit requirements.",
    },
  },
  {
    title: "BACKEND & DATA",
    accent: "border-cyan-400/30",
    description: {
      es: "Django · APIs · PostgreSQL · integridad · estados · tenancy · contratos server-side.",
      en: "Django · APIs · PostgreSQL · integrity · state · tenancy · server-side contracts.",
    },
    outcome: {
      es: "Las reglas viven donde pueden hacerse cumplir.",
      en: "Rules live where they can be enforced.",
    },
  },
  {
    title: "SECURITY & TRUST",
    accent: "border-violet-400/30",
    description: {
      es: "RBAC · privacidad · validación · auditoría · límites público/privado.",
      en: "RBAC · privacy · validation · auditability · public/private boundaries.",
    },
    outcome: {
      es: "Seguridad integrada a la arquitectura.",
      en: "Security integrated into architecture.",
    },
  },
  {
    title: "OPERATIONS",
    accent: "border-purple-400/30",
    description: {
      es: "CI/CD · staging · observabilidad · despliegue · continuidad · FinOps.",
      en: "CI/CD · staging · observability · deployment · continuity · FinOps.",
    },
    outcome: {
      es: "El producto continúa después del localhost.",
      en: "The product continues beyond localhost.",
    },
  },
  {
    title: "AI & AUTOMATION",
    accent: "border-fuchsia-400/30",
    description: {
      es: "Agentes · workflows · inteligencia operacional · reporting · human-in-the-loop.",
      en: "Agents · workflows · operational intelligence · reporting · human-in-the-loop.",
    },
    outcome: {
      es: "Automatizar sólo donde existe valor operacional.",
      en: "Automate only where operational value exists.",
    },
  },
  {
    title: "PHYSICAL SYSTEMS",
    accent: "border-amber-300/30",
    description: {
      es: "Linux nodes · dispositivos · electrónica · prototipado 3D · integración edge.",
      en: "Linux nodes · devices · electronics · 3D prototyping · edge integration.",
    },
    outcome: {
      es: "Software conectado al entorno físico.",
      en: "Software connected to the physical environment.",
    },
  },
];

const maturityRows = [
  {
    name: "FDR",
    domain: { es: "Operaciones de salud", en: "Healthcare operations" },
    level: "L2+",
    stage: "ADVANCED PILOT",
    width: "72%",
    dot: "bg-violet-400",
    bar: "from-fuchsia-500 via-violet-500 to-cyan-400",
  },
  {
    name: "Crohnoz Forge",
    domain: { es: "Razonamiento de producto", en: "Product reasoning" },
    level: "L1",
    stage: "PROTOTYPE / R&D",
    width: "25%",
    dot: "bg-blue-400",
    bar: "from-blue-500 to-cyan-400",
  },
  {
    name: "Fresh Market",
    domain: { es: "Operaciones de retail fresco", en: "Fresh-retail operations" },
    level: "L1",
    stage: "PROTOTYPE / R&D",
    width: "25%",
    dot: "bg-cyan-400",
    bar: "from-cyan-500 to-blue-400",
  },
  {
    name: "IncluMe",
    domain: { es: "Accesibilidad / civic product", en: "Accessibility / civic product" },
    level: "L1",
    stage: "EARLY PRODUCT",
    width: "25%",
    dot: "bg-fuchsia-400",
    bar: "from-fuchsia-500 to-violet-400",
  },
];

const engagements = [
  {
    number: "01",
    title: "PRODUCT & SYSTEMS ARCHITECTURE",
    description: {
      es: "Límites de dominio, workflows, decisiones de arquitectura y dirección técnica para productos con operación real detrás.",
      en: "Domain boundaries, workflows, architecture decisions and technical direction for products with real operations behind them.",
    },
  },
  {
    number: "02",
    title: "OPERATIONAL SOFTWARE",
    description: {
      es: "Django, APIs, datos e interfaces por rol cuando el software debe representar procesos diarios concretos.",
      en: "Django, APIs, data and role-aware interfaces when software must represent concrete daily processes.",
    },
  },
  {
    number: "03",
    title: "BACKEND INTEGRITY & MODERNIZATION",
    description: {
      es: "Scope, autorización, seguridad, testing, observabilidad, CI/CD y reducción de deuda en sistemas existentes.",
      en: "Scope, authorization, security, testing, observability, CI/CD and debt reduction in existing systems.",
    },
  },
  {
    number: "04",
    title: "APPLIED AI & AUTOMATION",
    description: {
      es: "Agentes y automatización orientados a operación, con límites explícitos, evidencia y supervisión humana donde corresponde.",
      en: "Agents and automation for operations, with explicit boundaries, evidence and human oversight where appropriate.",
    },
  },
];

const method = [
  ["01", "DISCOVER", "Real operation"],
  ["02", "DESIGN", "Domain + boundaries"],
  ["03", "BUILD", "Useful increment"],
  ["04", "VALIDATE", "Rules + workflows"],
  ["05", "DEPLOY", "Controlled delivery"],
  ["06", "OPERATE", "Continuity"],
  ["07", "IMPROVE", "Evidence-driven"],
];

function SignalMark() {
  const heights = [14, 24, 34, 44, 34, 24, 14];

  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center gap-[2px] rounded-xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/15 to-cyan-400/15 shadow-lg shadow-fuchsia-950/30"
    >
      {heights.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[2px] rounded-full bg-gradient-to-b from-fuchsia-300 via-violet-300 to-cyan-300"
          style={{ height }}
        />
      ))}
    </span>
  );
}

function ExternalLink({ href, children, variant = "primary", ariaLabel }) {
  const classes = {
    primary:
      "border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-100 hover:border-fuchsia-300/60 hover:bg-fuchsia-500/25",
    cyan:
      "border-cyan-400/30 bg-cyan-500/10 text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-500/20",
    neutral:
      "border-white/10 bg-white/[0.04] text-white/80 hover:border-white/20 hover:bg-white/[0.08]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B14] ${classes[variant]}`}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">{text}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("es");
  const t = copy[lang];
  const navItems = [
    ["#flagship", t.nav.flagship],
    ["#depth", t.nav.depth],
    ["#portfolio", t.nav.portfolio],
    ["#evidence", t.nav.evidence],
    ["#method", t.nav.method],
    ["#engagement", t.nav.engagement],
  ];

  return (
    <main className="min-h-screen bg-[#0A0B14] text-white selection:bg-fuchsia-500 selection:text-white">
      <a
        href="#content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-3 text-sm font-black text-[#0A0B14] transition focus:translate-y-0"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0B14]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a
            href="#top"
            aria-label="Crohnoz Systems"
            className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
          >
            <SignalMark />
            <div className="min-w-0">
              <p className="truncate text-sm font-black tracking-[0.12em] text-white md:text-base">
                CROHNOZ SYSTEMS
              </p>
              <p className="truncate text-xs text-white/45">by Crohnoz Labs</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/55 xl:flex" aria-label="Primary">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                className="rounded-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            className="flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
            role="group"
            aria-label={t.languageLabel}
          >
            {["es", "en"].map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={lang === item}
                aria-label={item === "es" ? "Español" : "English"}
                onClick={() => setLang(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-black uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                  lang === item ? "bg-white text-[#0A0B14]" : "text-white/50 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <nav
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 xl:hidden"
          aria-label="Mobile"
        >
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-white/60 transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <div id="content">
        <section id="top" className="relative scroll-mt-28 overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute left-[-12rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[-10rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-300">
              {t.heroEyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62 md:text-xl">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              {[t.founder, t.location, t.principle].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <ExternalLink href={LINKS.evidence}>{t.openEvidence}</ExternalLink>
              <ExternalLink href={LINKS.profile} variant="neutral">
                {t.openProfile}
              </ExternalLink>
              <ExternalLink href={LINKS.website} variant="cyan">
                {t.openLabs}
              </ExternalLink>
            </div>
          </div>
        </section>

        <section id="flagship" className="mx-auto scroll-mt-32 max-w-7xl px-5 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-500/10 shadow-2xl shadow-violet-950/20">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 md:p-10 lg:p-12">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-300">
                  {t.flagshipEyebrow}
                </p>
                <div className="mt-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/15 px-4 py-2 text-xs font-black text-violet-100">
                  L2+ · ADVANCED PILOT / PRODUCTION-ORIENTED
                </div>
                <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                  {t.flagshipTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                  {t.flagshipText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ExternalLink href={LINKS.fdrCase}>{t.openCase}</ExternalLink>
                  <ExternalLink href={LINKS.fdrDemo} variant="cyan">
                    {t.openDemo}
                  </ExternalLink>
                </div>
              </div>

              <div className="min-h-[22rem] border-t border-white/10 bg-[#070811] p-4 md:p-6 lg:border-l lg:border-t-0">
                <div className="h-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03]">
                  <img
                    src="/portfolio/fdr-podologia/Screenshot_20260510_010603.png"
                    alt="FDR public portfolio preview"
                    loading="lazy"
                    className="h-full min-h-[22rem] w-full object-cover object-top opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="depth" className="scroll-mt-32 border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionHeading eyebrow="ENGINEERING DEPTH" title={t.depthTitle} text={t.depthText} />

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className={`rounded-[1.5rem] border bg-[#10111D] p-6 ${capability.accent}`}
                >
                  <p className="text-sm font-black tracking-[0.12em] text-white">{capability.title}</p>
                  <p className="mt-5 text-sm leading-7 text-white/58">{capability.description[lang]}</p>
                  <p className="mt-6 border-t border-white/10 pt-5 text-sm font-bold text-white/82">
                    {capability.outcome[lang]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-32">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionHeading eyebrow="PRODUCT LAB" title={t.portfolioTitle} text={t.portfolioText} />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="flex min-h-[24rem] flex-col rounded-[1.75rem] border border-white/10 bg-[#10111D] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-xs font-black text-cyan-100">
                    {product.maturity}
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-white">
                    {product.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/58">
                    {product.description[lang]}
                  </p>
                  <p className="mt-6 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/38">
                    {product.proof}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <ExternalLink href={product.evidenceHref}>{t.evidenceLink}</ExternalLink>
                    {product.demoHref && (
                      <ExternalLink href={product.demoHref} variant="cyan">
                        {t.liveDemo}
                      </ExternalLink>
                    )}
                    <ExternalLink href={product.href} variant="neutral">
                      {t.repoLink}
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="maturity" className="border-y border-white/10 bg-[#070811]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionHeading eyebrow="PORTFOLIO MATURITY" title={t.maturityTitle} text={t.maturityText} />

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#10111D]">
              <div className="hidden grid-cols-5 border-b border-white/10 px-7 py-4 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white/35 md:grid">
                <span>L0 · Idea</span>
                <span>L1 · Prototype</span>
                <span>L2 · Pilot</span>
                <span>L3 · Production</span>
                <span>L4 · Scale</span>
              </div>

              <div className="divide-y divide-white/10">
                {maturityRows.map((item) => (
                  <article key={item.name} className="grid gap-5 p-6 md:grid-cols-[17rem_1fr] md:items-center md:p-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black text-white">{item.name}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white/70">
                          {t.current}: {item.level}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-white/42">{item.domain[lang]} · {item.stage}</p>
                    </div>

                    <div>
                      <div className="relative h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.bar}`}
                          style={{ width: item.width }}
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs font-bold text-white/45">
                        <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                        <span>{item.level} · {item.stage}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="evidence" className="mx-auto scroll-mt-32 max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING EVIDENCE"
            title={t.operationalEvidence}
            text={t.operationalEvidenceText}
          />

          <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/[0.08] to-cyan-500/[0.05] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div>
              <div className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-2 text-xs font-black text-fuchsia-100">
                SELECTED OPERATIONAL SYSTEM
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white">
                Rental Operations
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58 md:text-base">
                {lang === "es"
                  ? "Cobros, pagos, vouchers, liquidaciones, reglas de redondeo y separación estricta entre demo pública y operación privada con Auth + RLS."
                  : "Charges, payments, vouchers, settlements, rounding rules and strict separation between the public demo and private operation with Auth + RLS."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col">
              <ExternalLink href={LINKS.rentalCase}>{t.evidenceLink}</ExternalLink>
              <ExternalLink href={LINKS.rental} variant="neutral">
                {t.repoLink}
              </ExternalLink>
            </div>
          </div>
        </section>

        <section id="method" className="scroll-mt-32 border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionHeading eyebrow="OPERATING MODEL" title={t.methodTitle} text={t.methodText} />

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {method.map(([step, title, detail]) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-[#10111D] p-5">
                  <p className="text-xs font-black text-fuchsia-300">{step}</p>
                  <p className="mt-5 text-sm font-black tracking-[0.08em] text-white">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/38">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="engagement" className="mx-auto scroll-mt-32 max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="PROFESSIONAL ENGAGEMENT" title={t.engagementTitle} text={t.engagementText} />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {engagements.map((engagement) => (
              <article
                key={engagement.number}
                className="group rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/[0.045] to-transparent p-7 transition hover:border-fuchsia-400/25"
              >
                <p className="text-xs font-black tracking-[0.18em] text-fuchsia-300">{engagement.number}</p>
                <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-white md:text-2xl">
                  {engagement.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                  {engagement.description[lang]}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalLink href={LINKS.evidence}>{t.inspectFirst}</ExternalLink>
            <ExternalLink href={LINKS.profile} variant="cyan">
              {t.openProfile}
            </ExternalLink>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid gap-8 rounded-[2rem] border border-cyan-400/15 bg-cyan-500/[0.05] p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                {t.boundaryTitle}
              </h2>
              <p className="text-base leading-8 text-white/58">{t.boundaryText}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#070811]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-300">CONTACT</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
              {t.contactTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
              {t.contactText}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ExternalLink href={LINKS.profile}>{t.openProfile}</ExternalLink>
              <ExternalLink href={LINKS.website} variant="cyan">
                {t.openLabs}
              </ExternalLink>
              <ExternalLink href={LINKS.github} variant="neutral">
                GitHub
              </ExternalLink>
              <ExternalLink href={LINKS.linkedin} variant="neutral">
                LinkedIn
              </ExternalLink>
              <ExternalLink href={LINKS.email} variant="neutral">
                Email
              </ExternalLink>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-[#070811] px-5 py-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
        © 2026 Crohnoz Labs · Enrique Flores · Product & Systems Architect
      </footer>
    </main>
  );
}
