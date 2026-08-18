import ScrollReveal from "../components/ScrollReveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0D12] px-6 pt-28 pb-20"
    >
      {/* dot-grid ambience */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff14_1px,transparent_0)] bg-[length:28px_28px]"
        aria-hidden="true"
      />
      {/* accent glow behind the panel */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#17C964]/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-[360px] w-[360px] rounded-full bg-[#17C964]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_1fr]">
        {/* Left: copy */}
        <ScrollReveal delay={100}>
          <div>
            <p className="mb-5 font-mono text-sm font-medium tracking-wide text-[#17C964]">
              <span className="text-slate-500">{"//"}</span> frontend developer
            </p>

            <h1 className="font-[Space_Grotesk,sans-serif] text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Hi, I&rsquo;m
              <br />
              Zahra Moneeb
              <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 animate-pulse bg-[#17C964] align-middle" />
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              I build modern, responsive, and user-friendly web applications
              using React, TypeScript, and Tailwind CSS.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-[#17C964] px-6 py-3 font-medium text-[#0B0D12] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17C964]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-md border border-white/15 px-6 py-3 font-medium text-slate-200 transition hover:border-[#17C964] hover:text-[#17C964] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17C964]"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs text-slate-400">
              {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/10 bg-white/5 px-2.5 py-1"
                >
                  &lt;{tech}&nbsp;/&gt;
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: code panel */}
        <ScrollReveal delay={200}>
          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#12141C] shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#171A24] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-slate-400">
                zahra.tsx
              </span>
            </div>

            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7">
              <code>
                <span className="text-[#C586C0]">const</span>{" "}
                <span className="text-[#9CDCFE]">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-400">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#9CDCFE]">name</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-[#CE9178]">{"'Zahra Moneeb'"}</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#9CDCFE]">role</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-[#CE9178]">{"'Frontend Developer'"}</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#9CDCFE]">stack</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-slate-400">[</span>
                <span className="text-[#CE9178]">{"'React'"}</span>
                <span className="text-slate-400">, </span>
                <span className="text-[#CE9178]">{"'TypeScript'"}</span>
                <span className="text-slate-400">, </span>
                <span className="text-[#CE9178]">{"'Tailwind'"}</span>
                <span className="text-slate-400">],</span>
                {"\n"}
                {"  "}
                <span className="text-[#9CDCFE]">location</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-[#CE9178]">{"'Remote'"}</span>
                <span className="text-slate-400">,</span>
                {"\n"}
                {"};"}
              </code>
            </pre>

              <div className="flex items-center gap-2 border-t border-white/10 bg-[#171A24] px-5 py-3 font-mono text-xs text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#17C964] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#17C964]" />
                </span>
                status: available for work
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;