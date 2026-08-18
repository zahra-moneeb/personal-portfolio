import { Briefcase, Globe, Mail } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const links = [
  {
    label: "Email Me",
    value: "zahramoneeb83@gmail.com",
    href: "mailto:zahramoneeb83@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "/in/zahra-moneeb",
    href: "https://www.linkedin.com/in/zahra-moneeb-2b5953297?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: Briefcase,
    primary: false,
  },
  {
    label: "GitHub",
    value: "/zahra-moneeb",
    href: "https://github.com/zahra-moneeb",
    icon: Globe,
    primary: false,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0D12] px-6 py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#17C964]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal delay={80}>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 font-mono text-sm font-medium tracking-wide text-[#17C964]">
              <span className="text-slate-500">{"//"}</span> contact
            </p>

            <h2 className="font-[Space_Grotesk,sans-serif] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let&rsquo;s work together
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              I&rsquo;m open to new opportunities, interesting projects, and
              collaborations.
            </p>
          </div>
        </ScrollReveal>

        {/* Terminal card */}
        <ScrollReveal delay={180} className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#12141C] shadow-2xl shadow-black/40">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#171A24] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-slate-400">
              contact.sh
            </span>
          </div>

          {/* body */}
          <div className="px-6 py-8 md:px-8">
            <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-slate-500">$</span>{" "}
                <span className="text-[#9CDCFE]">echo</span>{" "}
                <span className="text-[#CE9178]">
                  {"'have a project in mind?'"}
                </span>
                {"\n"}
                <span className="text-slate-500">{">"}</span>{" "}
                <span className="text-slate-400">
                  status: ready to collaborate
                </span>
              </code>
            </pre>

            <div className="mt-8 flex flex-col gap-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.primary ? undefined : "_blank"}
                    rel={link.primary ? undefined : "noreferrer"}
                    className={`group flex items-center justify-between rounded-lg border px-5 py-3.5 transition ${
                      link.primary
                        ? "border-[#17C964]/30 bg-[#17C964]/10 hover:bg-[#17C964]/15"
                        : "border-white/10 bg-white/5 hover:border-[#17C964]/40"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className={
                          link.primary ? "text-[#17C964]" : "text-slate-400"
                        }
                      />
                      <span className="font-mono text-sm text-slate-200">
                        {link.label}
                      </span>
                    </span>

                    <span className="font-mono text-xs text-slate-500 transition group-hover:text-[#17C964]">
                      {link.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;