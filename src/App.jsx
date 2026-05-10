import { useEffect, useMemo, useState } from "react";

const WHATSAPP_URL = "https://wa.me/56935079652";
const EMAIL_URL = "mailto:prog.eflores@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/prog-eflores/";
const GITHUB_URL = "https://github.com/Crohnoz";

const content = {
  es: {
    nav: {
      projects: "Proyectos",
      services: "Servicios",
      process: "Proceso",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Desarrollo Full Stack • Sistemas Web • Automatización",
      title: "Soluciones digitales claras para negocios reales.",
      subtitle:
        "Diseño y desarrollo plataformas web, paneles administrativos, tiendas online y herramientas internas que ayudan a ordenar procesos, vender mejor y trabajar con más control.",
      primary: "Ver proyectos",
      secondary: "Contactar por WhatsApp",
      stat1: "Proyectos funcionales",
      stat2: "Stack principal",
      stat3: "Enfoque",
      stat3Value: "Negocios reales",
    },
    servicesTitle: "Qué puedo construir para tu negocio",
    servicesSubtitle:
      "No se trata solo de hacer una página bonita. La idea es construir herramientas útiles, fáciles de usar y pensadas para resolver problemas concretos.",
    services: [
      {
        title: "Sistemas administrativos",
        text: "Paneles para gestionar clientes, productos, reservas, trabajos, prioridades y estados operativos.",
      },
      {
        title: "Tiendas online",
        text: "Catálogos digitales, administración de productos, experiencia responsive y flujos de venta claros.",
      },
      {
        title: "Reservas y agendas",
        text: "Sistemas para clínicas, servicios profesionales y negocios que necesitan ordenar horarios y atención.",
      },
      {
        title: "Automatización de procesos",
        text: "Herramientas para reemplazar planillas, mensajes sueltos y tareas repetitivas por flujos digitales claros.",
      },
    ],
    projectsTitle: "Proyectos destacados",
    projectsSubtitle:
      "Cada proyecto muestra una necesidad distinta: ventas, gestión interna, automatización, reservas, diagnóstico digital o administración de sorteos.",
    processTitle: "Cómo trabajo un proyecto",
    processSubtitle:
      "Primero se entiende el problema. Después se diseña una solución útil, escalable y fácil de usar.",
    process: [
      {
        step: "01",
        title: "Diagnóstico",
        text: "Entiendo el negocio, sus problemas actuales y los procesos que necesitan ordenarse o automatizarse.",
      },
      {
        step: "02",
        title: "Diseño de solución",
        text: "Defino módulos, usuarios, flujos, permisos, pantallas y lógica principal antes de programar.",
      },
      {
        step: "03",
        title: "Desarrollo",
        text: "Construyo interfaz, backend, base de datos, paneles y funcionalidades principales con enfoque práctico.",
      },
      {
        step: "04",
        title: "Mejora continua",
        text: "El sistema se prueba con uso real, se ajusta y puede crecer con nuevas funciones según el negocio.",
      },
    ],
    ctaTitle: "¿Tu negocio todavía depende de Excel, WhatsApp o procesos manuales?",
    ctaText:
      "Podemos convertir esas tareas repetitivas en una plataforma clara, moderna y fácil de administrar.",
    email: "Correo",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    viewProject: "Ver capturas",
    imageHint: "Haz clic en cualquier captura para verla en grande",
    close: "Cerrar",
    next: "Siguiente",
    prev: "Anterior",
  },
  en: {
    nav: {
      projects: "Projects",
      services: "Services",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Full Stack Development • Web Systems • Automation",
      title: "Clear digital solutions for real businesses.",
      subtitle:
        "I design and build web platforms, admin dashboards, online stores and internal tools that help businesses organize processes, sell better and work with more control.",
      primary: "View projects",
      secondary: "Contact on WhatsApp",
      stat1: "Functional projects",
      stat2: "Main stack",
      stat3: "Focus",
      stat3Value: "Real businesses",
    },
    servicesTitle: "What I can build for your business",
    servicesSubtitle:
      "This is not just about building good-looking websites. It is about creating useful, easy-to-use tools designed to solve concrete business problems.",
    services: [
      {
        title: "Admin systems",
        text: "Panels to manage customers, products, bookings, jobs, priorities and operational states.",
      },
      {
        title: "Online stores",
        text: "Digital catalogs, product administration, responsive experiences and clear sales flows.",
      },
      {
        title: "Booking systems",
        text: "Platforms for clinics, professional services and businesses that need better scheduling.",
      },
      {
        title: "Process automation",
        text: "Tools that replace spreadsheets, scattered messages and repetitive tasks with clear digital workflows.",
      },
    ],
    projectsTitle: "Selected work",
    projectsSubtitle:
      "Each project addresses a different need: sales, internal operations, automation, bookings, digital diagnosis or raffle management.",
    processTitle: "How I approach a project",
    processSubtitle:
      "First, understand the problem. Then design a useful, scalable and easy-to-use solution.",
    process: [
      {
        step: "01",
        title: "Discovery",
        text: "I understand the business, current problems and processes that need structure or automation.",
      },
      {
        step: "02",
        title: "Solution design",
        text: "I define modules, users, flows, permissions, screens and core logic before development.",
      },
      {
        step: "03",
        title: "Development",
        text: "I build the interface, backend, database, dashboards and main features with a practical focus.",
      },
      {
        step: "04",
        title: "Continuous improvement",
        text: "The system is tested in real use, adjusted and expanded with new features as needed.",
      },
    ],
    ctaTitle: "Is your business still depending on Excel, WhatsApp or manual processes?",
    ctaText:
      "We can turn those repetitive tasks into a clear, modern and easy-to-manage platform.",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    viewProject: "View screenshots",
    imageHint: "Click any screenshot to view it larger",
    close: "Close",
    next: "Next",
    prev: "Previous",
  },
};

const projects = [
  {
    slug: "diagnostico-web",
    title: "Diagnóstico Web",
    type: "Herramienta interactiva / Consultoría digital",
    impact:
      "Permite levantar requerimientos de clientes mediante preguntas guiadas, reduciendo ambigüedad y mejorando la calidad de las propuestas.",
    description:
      "Sistema interactivo diseñado para entender necesidades digitales de negocios y orientar soluciones web, automatización o sistemas internos.",
    stack: ["React", "Vite", "UX", "Lógica dinámica"],
    status: "Activo",
    images: [
      "/portfolio/diagnostico-web/Screenshot_20260510_010157.png",
      "/portfolio/diagnostico-web/Screenshot_20260510_010207.png",
      "/portfolio/diagnostico-web/Screenshot_20260510_010226.png",
      "/portfolio/diagnostico-web/Screenshot_20260510_010311.png",
    ],
  },
  {
    slug: "katyta-studio",
    title: "Katyta Studio",
    type: "E-commerce administrable",
    impact:
      "Permite publicar productos, administrar catálogo y presentar una tienda clara para clientes finales.",
    description:
      "Tienda online orientada a emprendimiento de moda, con homepage, catálogo, productos y panel de administración funcional.",
    stack: ["React", "Tailwind", "Admin", "Catálogo"],
    status: "Funcional",
    images: [
      "/portfolio/katyta-studio/Screenshot_20260510_005847.png",
      "/portfolio/katyta-studio/Screenshot_20260510_005920.png",
      "/portfolio/katyta-studio/Screenshot_20260510_010010.png",
      "/portfolio/katyta-studio/Screenshot_20260510_010023.png",
    ],
  },
  {
    slug: "john-hughes-service",
    title: "John Hughes Service",
    type: "Dashboard operacional para taller mecánico",
    impact:
      "Ayuda a organizar clientes, trabajos y prioridades diarias en un taller automotriz de Perth, Australia.",
    description:
      "Sistema de gestión interna creado para ordenar el flujo operativo de un taller mecánico real, actualmente utilizado para organizar trabajos y prioridades.",
    stack: ["Dashboard", "CRUD", "Prioridades", "Operaciones"],
    status: "En uso real",
    images: [
      "/portfolio/john-hughes-service/Screenshot_20260510_011341.png",
      "/portfolio/john-hughes-service/Screenshot_20260510_011438.png",
      "/portfolio/john-hughes-service/Screenshot_20260510_011511.png",
    ],
  },
  {
    slug: "rifa-galactica",
    title: "Rifa Galáctica",
    type: "Sistema automatizado de rifas",
    impact:
      "Permite configurar premios, vender números, registrar compradores y realizar el sorteo de forma automática.",
    description:
      "Aplicación interactiva para administrar rifas familiares o comunitarias con selección de números, registro de participantes y generación automática de ganadores.",
    stack: ["Interacción", "Estados", "Automatización", "Sorteo"],
    status: "Funcional",
    images: [
      "/portfolio/rifa-galactica/Screenshot_20260510_010856.png",
      "/portfolio/rifa-galactica/Screenshot_20260510_010918.png",
      "/portfolio/rifa-galactica/Screenshot_20260510_011023.png",
      "/portfolio/rifa-galactica/Screenshot_20260510_011045.png",
    ],
  },
  {
    slug: "fdr-podologia",
    title: "FDR Podología",
    type: "Agenda clínica en desarrollo",
    impact:
      "Primer módulo de una plataforma clínica orientada a reservas, agenda profesional y futura gestión de pacientes.",
    description:
      "Sistema en evolución para una clínica podológica, iniciado con agenda y reservas. El objetivo es escalar hacia fichas clínicas, historial e imágenes de seguimiento.",
    stack: ["Django", "Agenda", "Reservas", "Clínica"],
    status: "MVP en desarrollo",
    images: [
      "/portfolio/fdr-podologia/Screenshot_20260510_010603.png",
      "/portfolio/fdr-podologia/Screenshot_20260510_010649.png",
      "/portfolio/fdr-podologia/Screenshot_20260510_010659.png",
    ],
  },
];

export default function App() {
  const [lang, setLang] = useState("es");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const t = content[lang];
  const heroProject = useMemo(() => projects[0], []);

  const selectedImage = selectedProject?.images?.[selectedIndex];

  const openLightbox = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setSelectedIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setSelectedIndex(0);
  };

  const goNext = () => {
    if (!selectedProject) return;
    setSelectedIndex((current) =>
      current === selectedProject.images.length - 1 ? 0 : current + 1
    );
  };

  const goPrev = () => {
    if (!selectedProject) return;
    setSelectedIndex((current) =>
      current === 0 ? selectedProject.images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!selectedProject) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0D1B2A] selection:bg-[#06B6D4] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-lg font-black text-white shadow-lg shadow-blue-500/20">
              CZ
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">Crohnoz Systems</p>
              <p className="text-xs font-medium text-slate-500">by Enrique Flores</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-500 md:flex">
            <a className="transition hover:text-[#0D1B2A]" href="#projects">
              {t.nav.projects}
            </a>
            <a className="transition hover:text-[#0D1B2A]" href="#services">
              {t.nav.services}
            </a>
            <a className="transition hover:text-[#0D1B2A]" href="#process">
              {t.nav.process}
            </a>
            <a className="transition hover:text-[#0D1B2A]" href="#contact">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm">
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                lang === "es"
                  ? "bg-[#0D1B2A] text-white"
                  : "text-slate-500 hover:text-[#0D1B2A]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                lang === "en"
                  ? "bg-[#0D1B2A] text-white"
                  : "text-slate-500 hover:text-[#0D1B2A]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              {t.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0D1B2A] md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-[#1D4ED8]"
              >
                {t.hero.primary}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm font-black text-emerald-700 shadow-sm transition hover:-translate-y-1 hover:bg-emerald-100"
              >
                {t.hero.secondary}
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <Stat value="6+" label={t.hero.stat1} />
              <Stat value="Django + React" label={t.hero.stat2} />
              <Stat value={t.hero.stat3Value} label={t.hero.stat3} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <button
              onClick={() => openLightbox(heroProject, 0)}
              className="group relative block overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0D1B2A] p-3 text-left shadow-2xl"
            >
              <div className="mb-3 flex items-center gap-2 px-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 text-xs font-bold text-white/50">
                  {heroProject.title}
                </span>
              </div>

              <img
                src={heroProject.images[0]}
                alt={heroProject.title}
                className="aspect-[16/10] w-full rounded-3xl object-cover transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute bottom-7 right-7 rounded-full bg-white px-4 py-2 text-xs font-black text-[#0D1B2A] opacity-0 shadow-lg transition group-hover:opacity-100">
                Ampliar captura
              </div>
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title={t.servicesTitle}
          text={t.servicesSubtitle}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-sm font-black text-white">
                0{index + 1}
              </div>

              <h3 className="text-xl font-black tracking-tight">{service.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title={t.projectsTitle}
            text={t.projectsSubtitle}
          />

          <div className="mt-6 rounded-3xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm font-semibold text-cyan-800">
            {t.imageHint}
          </div>

          <div className="mt-10 space-y-10">
            {projects.map((project, index) => (
              <ProjectShowcase
                key={project.slug}
                project={project}
                index={index}
                onOpenImage={openLightbox}
                viewLabel={t.viewProject}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Metodología"
          title={t.processTitle}
          text={t.processSubtitle}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.process.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-black text-[#F59E0B]">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#0D1B2A] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#06B6D4]">
            Contacto
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {t.ctaText}
          </p>

          <ContactButtons t={t} />
        </div>
      </section>

      <footer className="bg-[#08111F] px-5 py-7 text-center text-sm font-medium text-white/45">
        © 2026 Crohnoz Systems — Enrique Flores · Full Stack Developer
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#10B981] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-[#059669]"
        aria-label="Contactar por WhatsApp"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">↗</span>
        WhatsApp
      </a>

      {selectedProject && selectedImage && (
        <Lightbox
          project={selectedProject}
          selectedImage={selectedImage}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
          setSelectedIndex={setSelectedIndex}
          labels={t}
        />
      )}
    </main>
  );
}

function ContactButtons({ t }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        className="rounded-2xl bg-[#10B981] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#059669]"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
      >
        {t.whatsapp}
      </a>

      <a
        className="rounded-2xl bg-[#06B6D4] px-6 py-4 text-sm font-black text-[#0D1B2A] transition hover:-translate-y-1 hover:bg-[#22D3EE]"
        href={EMAIL_URL}
      >
        {t.email}
      </a>

      <a
        className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
      >
        {t.linkedin}
      </a>

      <a
        className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        {t.github}
      </a>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#2563EB]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#0D1B2A] md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-lg font-black leading-tight text-[#0D1B2A]">{value}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
}

function ProjectShowcase({ project, index, onOpenImage, viewLabel }) {
  const featured = project.images[0];
  const gallery = project.images.slice(1);
  const reverse = index % 2 === 1;

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col justify-between p-7 md:p-10">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0D1B2A] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                {project.status}
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-500">
                {project.type}
              </span>
            </div>

            <h3 className="text-4xl font-black tracking-[-0.04em] text-[#0D1B2A]">
              {project.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B]">
                Impacto
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">{project.impact}</p>
            </div>
          </div>

          <div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => onOpenImage(project, 0)}
              className="mt-7 rounded-2xl bg-[#2563EB] px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-[#1D4ED8]"
            >
              {viewLabel}
            </button>
          </div>
        </div>

        <div className="bg-[#0D1B2A] p-4 md:p-6">
          <button
            onClick={() => onOpenImage(project, 0)}
            className="group block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left"
          >
            <img
              src={featured}
              alt={project.title}
              className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </button>

          {gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {gallery.map((image, imageIndex) => (
                <button
                  key={image}
                  onClick={() => onOpenImage(project, imageIndex + 1)}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <img
                    src={image}
                    alt={`${project.title} captura ${imageIndex + 2}`}
                    className="aspect-[16/10] w-full object-cover opacity-85 transition hover:scale-[1.06] hover:opacity-100"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Lightbox({
  project,
  selectedImage,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
  setSelectedIndex,
  labels,
}) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#020617]/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-7xl flex-col rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl md:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-3 px-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB]">
              {project.title}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              {selectedIndex + 1} / {project.images.length}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-[#0D1B2A] transition hover:bg-slate-200"
          >
            {labels.close}
          </button>
        </div>

        <div className="relative grid min-h-0 flex-1 place-items-center overflow-hidden rounded-[1.5rem] bg-slate-950">
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-sm font-black text-[#0D1B2A] shadow-lg transition hover:bg-white"
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt={`${project.title} captura ampliada`}
            className="max-h-[72vh] w-full object-contain"
          />

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-sm font-black text-[#0D1B2A] shadow-lg transition hover:bg-white"
          >
            ›
          </button>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {project.images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedIndex(index)}
              className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                selectedIndex === index ? "border-[#2563EB]" : "border-transparent opacity-60"
              }`}
            >
              <img
                src={image}
                alt={`${project.title} miniatura ${index + 1}`}
                className="h-16 w-28 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
