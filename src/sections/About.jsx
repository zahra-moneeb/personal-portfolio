import { ArrowUpRight, Code2, Layout, Rocket } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const highlights = [
  {
    icon: Code2,
    tag: "core",
    title: "Frontend Development",
    description:
      "Building responsive and modern web interfaces with React and JavaScript.",
  },
  {
    icon: Layout,
    tag: "design",
    title: "Clean UI",
    description:
      "Creating simple, accessible, and user-friendly interfaces with attention to detail.",
  },
];

const growth = {
  icon: Rocket,
  tag: "growth",
  title: "Always Learning",
  description:
    "Continuously improving my skills and exploring modern web technologies, from state management patterns to accessibility and performance.",
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0D0F17] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#17C964]/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <ScrollReveal delay={80}>
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 font-mono text-sm font-medium tracking-wide text-[#17C964]">
              <span className="text-slate-500">{"//"}</span> about
            </p>

            <h2 className="font-[Space_Grotesk,sans-serif] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Turning ideas into web experiences
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-3">
          {/* Bio — large tile */}
          <ScrollReveal delay={120} className="relative rounded-2xl border border-white/10 bg-[#12141C] p-8 md:col-span-2 md:row-span-2">
            <span
              className="font-mono text-sm text-[#17C964]"
              aria-hidden="true"
            >
              {"/**"}
            </span>

            <h3 className="mt-5 text-xl font-bold text-white">
              Hi, I&rsquo;m Zahra.
            </h3>

            <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-400">
              <p>
                I&rsquo;m a frontend developer passionate about building
                modern, responsive, and user-friendly web applications. I
                enjoy turning ideas and designs into functional digital
                experiences.
              </p>

              <p>
                My main focus is React and modern JavaScript development. I
                have also worked with technologies such as Next.js, Tailwind
                CSS, REST APIs, Git, and GitHub.
              </p>

              <p>
                I&rsquo;m currently looking for opportunities where I can
                contribute, learn from experienced developers, and continue
                growing as a frontend developer.
              </p>
            </div>

            <span
              className="mt-6 block font-mono text-sm text-[#17C964]"
              aria-hidden="true"
            >
              {"*/"}
            </span>
          </ScrollReveal>

          {/* Currently — status tile */}
          <ScrollReveal
            delay={150}
            className="rounded-2xl border border-white/10 bg-[#12141C] p-6 md:col-span-2"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#17C964] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#17C964]" />
              </span>
              currently
            </div>

            <p className="mt-3 text-base leading-7 text-slate-300">
              Open to frontend roles and freelance projects, working remotely
              across time zones.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-slate-400">
              {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/10 bg-white/5 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlight tiles */}
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.title}
                delay={180 + index * 60}
                className="group relative rounded-2xl border border-white/10 bg-[#12141C] p-6 transition hover:-translate-y-1 hover:border-[#17C964]/40"
              >
                <span className="absolute right-5 top-5 rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-500 transition group-hover:text-[#17C964]">
                  {item.tag}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17C964]/10 text-[#17C964]">
                  <Icon size={20} />
                </div>

                <h4 className="mt-4 font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </ScrollReveal>
            );
          })}

          {/* Growth — wide tile */}
          <ScrollReveal delay={250} className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-[#12141C] p-6 transition hover:-translate-y-1 hover:border-[#17C964]/40 md:col-span-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#17C964]/10 text-[#17C964]">
              <growth.icon size={20} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-white">{growth.title}</h4>
                <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-500 transition group-hover:text-[#17C964]">
                  {growth.tag}
                </span>
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                {growth.description}
              </p>
            </div>
          </ScrollReveal>

          {/* CTA tile */}
          <ScrollReveal
            delay={320}
            className="group rounded-2xl border border-[#17C964]/30 bg-[#17C964]/10 p-6 transition hover:bg-[#17C964]/15 md:col-span-2"
          >
            <a href="#contact" className="flex w-full items-center justify-between">
              <div>
                <p className="font-semibold text-white">
                  Have a project in mind?
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Let&rsquo;s talk about it.
                </p>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17C964] text-[#0B0D12] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;