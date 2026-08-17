// import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "KaarYab Afghanistan",
//       description:
//         "An opportunity finder platform designed to help Afghan youth discover jobs, internships, scholarships, courses, and remote opportunities.",
//       technologies: [
//         "Next.js",
//         "React",
//         "Tailwind CSS",
//         "REST API",
//         "CRUD",
//       ],
//       liveUrl:
//         "https://kaaryab-youth-gyld9s87r-zahra-m-projects6.vercel.app/",
//       githubUrl: "#",
//       featured: true,
//     },
//     {
//       title: "Countries Explorer",
//       description:
//         "A web application for exploring countries and viewing information such as population, region, capital, and other details.",
//       technologies: ["React", "JavaScript", "REST API", "CSS"],
//       liveUrl: "#",
//       githubUrl: "#",
//       featured: false,
//     },
//     {
//       title: "Movie Watchlist Manager",
//       description:
//         "A movie management application where users can explore movies and manage their personal watchlist.",
//       technologies: ["React", "JavaScript", "LocalStorage"],
//       liveUrl: "#",
//       githubUrl: "#",
//       featured: false,
//     },
//   ];

//   return (
//     <section id="projects" className="bg-slate-50 px-6 py-24">
//       <div className="mx-auto max-w-6xl">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
//             My Projects
//           </p>

//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
//             Some things I've built
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-slate-600">
//             A selection of projects that showcase my experience with modern
//             frontend technologies and web development.
//           </p>
//         </div>

//         {/* Projects */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((project) => (
//             <article
//               key={project.title}
//               className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
//                 project.featured
//                   ? "border-indigo-200 md:col-span-2"
//                   : "border-slate-200"
//               }`}
//             >
//               {/* Project Image Placeholder */}
//               <div className="flex h-56 items-center justify-center bg-slate-100">
//                 <div className="text-center">
//                   <span className="text-4xl">💻</span>

//                   <p className="mt-3 text-sm font-medium text-slate-500">
//                     Project Preview
//                   </p>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 md:p-8">
//                 {project.featured && (
//                   <span className="mb-3 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
//                     Featured Project
//                   </span>
//                 )}

//                 <h3 className="text-2xl font-bold text-slate-900">
//                   {project.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-slate-600">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.technologies.map((technology) => (
//                     <span
//                       key={technology}
//                       className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
//                     >
//                       {technology}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="mt-7 flex flex-wrap gap-3">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
//                   >
//                     Live Demo
//                     <ExternalLink size={16} />
//                   </a>

//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
//                   >
//                     GitHub
//                     <Github size={16} />
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-indigo-600">
          MY PROJECTS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Some Things I've Built
        </h2>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            KaarYab Afghanistan
          </h3>

          <p className="mt-4 text-slate-600">
            An opportunity finder platform for Afghan youth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;