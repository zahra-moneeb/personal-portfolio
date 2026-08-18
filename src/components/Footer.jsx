import { ArrowUp, Briefcase, Globe, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/zahra-moneeb",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zahra-moneeb-2b5953297?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: Briefcase,
  },
  {
    label: "Email",
    href: "mailto:zahramoneeb83@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D12] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <ScrollReveal delay={80}>
          <div>
            <p className="font-[Space_Grotesk,sans-serif] text-sm font-semibold text-slate-300">
              <span className="text-slate-600">{"</"}</span>
              Zahra
              <span className="text-[#17C964]">{" >"}</span>
            </p>
            <p className="mt-1 font-mono text-xs text-slate-600">
              © 2026 Zahra Moneeb. All rights reserved.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="flex items-center gap-6">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="flex items-center gap-1.5 font-mono text-sm text-slate-400 transition hover:text-[#17C964]"
                >
                  <Icon size={15} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <a
            href="#home"
            className="flex items-center gap-1.5 font-mono text-xs text-slate-500 transition hover:text-[#17C964]"
          >
            back to top
            <ArrowUp size={14} />
          </a>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;