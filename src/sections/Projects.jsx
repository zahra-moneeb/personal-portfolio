import kaaryabImage from "../assets/kaaryab.png";
import worldExplorerImage from "../assets/world-explorer.png";
import movieWatchlistImage from "../assets/movie-watchlist.png";
import zamluxImage from "../assets/zamlux.png";
import { ExternalLink, GitBranch } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const featuredProject = {
  title: "KaarYab Afghanistan",
  image: kaaryabImage,
  description:
    "An opportunity finder platform designed to help Afghan youth discover jobs, internships, scholarships, courses, and remote opportunities.",
  technologies: ["Next.js", "React", "Tailwind CSS", "REST API", "CRUD"],
  liveUrl: "https://kaaryab-youth.vercel.app/",
  githubUrl: "https://github.com/zahra-moneeb/kaaryab-youth",
};

const projects = [
  {
    title: "World Explorer",
    image: worldExplorerImage,
    description:
      "An interactive web application for exploring countries and discovering information about different places around the world.",
    technologies: ["React", "JavaScript", "REST API"],
    liveUrl: "https://world-explorer-liart.vercel.app/",
    githubUrl: "https://github.com/zahra-moneeb/world-explorer",
    shape: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg",
  },
  {
    title: "Movie Watchlist Manager",
    image: movieWatchlistImage,
    description:
      "A movie management application that allows users to explore movies and organize their personal watchlist.",
    technologies: ["React", "JavaScript", "LocalStorage"],
    liveUrl: "https://zahra-moneeb.github.io/Movie-Watchlist-Manager/",
    githubUrl: "https://github.com/zahra-moneeb/Movie-Watchlist-Manager",
    shape: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg",
  },
  {
    title: "Product Catalog",
    image: zamluxImage,
    description:
      "A modern product catalog interface with reusable components and a responsive shopping-oriented UI.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://zahra-moneeb.github.io/product-catalog",
    githubUrl: "https://github.com/zahra-moneeb/product-catalog",
    shape: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0D0F17] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#17C964]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal delay={80}>
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 font-mono text-sm font-medium tracking-wide text-[#17C964]">
              <span className="text-slate-500">{"//"}</span> projects
            </p>

            <h2 className="font-[Space_Grotesk,sans-serif] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Some things I&rsquo;ve built
            </h2>

            <p className="mt-4 max-w-xl text-slate-400">
              A selection of projects that showcase my experience with modern
              frontend technologies and web development.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured project */}
        <ScrollReveal delay={150} className="mb-8 overflow-hidden rounded-3xl border border-[#17C964]/25 bg-[#12141C] p-6 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Blob-shaped image that resolves into focus on hover */}
            <div className="group relative mx-auto w-full max-w-md">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#17C964]/20 blur-2xl transition-all duration-500 group-hover:rounded-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border border-white/10 shadow-2xl shadow-black/40 transition-all duration-500 group-hover:rounded-3xl">
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} screenshot`}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded border border-[#17C964]/30 bg-[#17C964]/10 px-2.5 py-1 font-mono text-[11px] text-[#17C964]">
                featured
              </span>

              <h3 className="text-2xl font-bold text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {featuredProject.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#17C964] px-5 py-2.5 text-sm font-medium text-[#0B0D12] transition hover:bg-white"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-[#17C964] hover:text-[#17C964]"
                >
                  GitHub
                  <GitBranch size={16} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary projects */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={200 + index * 80}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#12141C] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#17C964]/40"
            >
              {/* Notched-corner image with an offset accent frame */}
              <div className="relative mb-5">
                <div
                  className={`pointer-events-none absolute -bottom-3 -right-3 h-full w-full border border-[#17C964]/30 bg-[#17C964]/5 transition-all duration-500 ${project.shape}`}
                  aria-hidden="true"
                />
                <div
                  className={`relative h-44 overflow-hidden border border-white/10 bg-[#0B0D12] transition-all duration-500 ${project.shape}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-[#17C964] hover:text-[#17C964]"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-[#17C964] hover:text-[#17C964]"
                >
                  GitHub
                  <GitBranch size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;