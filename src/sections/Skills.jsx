import {
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    icon: Layout,
    title: "UI & Styling",
    technologies: ["Tailwind CSS", "Bootstrap", "MUI", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend",
    technologies: ["Node.js", "Express", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    technologies: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    technologies: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    icon: Wrench,
    title: "Other",
    technologies: [
      "API Integration",
      "CRUD",
      "Form Validation",
      "State Management",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B0D12] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#17C964]/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm font-medium tracking-wide text-[#17C964]">
            <span className="text-slate-500">{"//"}</span> skills
          </p>

          <h2 className="font-[Space_Grotesk,sans-serif] text-3xl font-bold tracking-tight text-white md:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-xl text-slate-400">
            A collection of technologies and tools I use to build modern web
            applications.
          </p>
        </div>

        {/* Skills grid — equal-sized cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-white/10 bg-[#12141C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#17C964]/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#17C964]/10 text-[#17C964] transition group-hover:bg-[#17C964] group-hover:text-[#0B0D12]">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>

                <div className="mt-4 flex flex-wrap content-start gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;