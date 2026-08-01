"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#top"
          className="display text-sm tracking-tight text-ink md:text-base"
          style={{ fontWeight: 700 }}
        >
          {profile.name}
        </a>
        <nav className="flex items-center gap-5 text-sm text-ink-soft md:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cta cta-primary !px-4 !py-2 text-sm">
            Hire me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
