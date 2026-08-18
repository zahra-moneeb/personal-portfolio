"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0D12]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-[Space_Grotesk,sans-serif] text-xl font-bold tracking-tight text-white"
        >
          <span className="text-slate-500">{"<"}</span>
          Zahra
          <span className="text-[#17C964]">{" />"}</span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative font-mono text-sm text-slate-400 transition hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#17C964] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>
          <a
        
            href="#contact"

          className="hidden rounded-md bg-[#17C964] px-5 py-2.5 text-sm font-medium text-[#0B0D12] transition hover:bg-white md:block"
        >
          Let&rsquo;s Talk
        </a>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0D12] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-base text-slate-300 transition hover:text-[#17C964]"
              >
                {item.name}
              </a>
            ))}
            <a
            
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-md bg-[#17C964] px-5 py-2.5 text-center text-sm font-medium text-[#0B0D12] transition hover:bg-white"
            >
              Let&rsquo;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;