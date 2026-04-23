"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-deep" : "glass"
          )}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 px-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand font-display text-sm font-bold text-primary-foreground shadow-glow">
              BK
            </span>
            <span className="hidden font-display text-sm font-semibold sm:block">
              Basant Kumar
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            
            {/* ✅ Resume Button (Desktop) */}
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-gradient-brand text-primary-foreground btn-glow md:inline-flex"
            >
              <a href="/resume.pdf" target="_blank" download>
                Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-3xl glass-strong p-3 md:hidden"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground rounded-2xl"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}

                {/* ✅ Resume Button (Mobile) */}
                <li className="px-2 pt-2">
                  <Button asChild className="w-full rounded-2xl">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      download
                      onClick={() => setOpen(false)}
                    >
                      Resume
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};