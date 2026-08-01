"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="work" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-label mb-3">Selected work</p>
            <h2
              className="display max-w-2xl text-4xl font-700 leading-tight text-ink md:text-5xl"
              style={{ fontWeight: 700 }}
            >
              Products I&apos;ve built, led, or shipped recently
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute md:text-right">
            Client delivery at Big Kitty Labs, Korean Flutter work, and products
            I own — outcomes over demos.
          </p>
        </motion.div>

        <div className="border-t border-line">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.24) }}
              className="project-row group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-7 md:grid-cols-[140px_1.2fr_1.6fr_auto] md:items-center md:gap-8 md:py-8"
            >
              <div className="hidden md:block">
                <p className="text-sm text-mute">{project.year}</p>
                <p className="mt-1 text-xs font-600 uppercase tracking-[0.14em] text-signal-deep">
                  {project.tag}
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-3 md:hidden">
                  <span className="text-xs text-mute">{project.year}</span>
                  <span className="text-xs font-600 uppercase tracking-[0.14em] text-signal-deep">
                    {project.tag}
                  </span>
                </div>
                <h3
                  className="display text-2xl font-700 text-ink transition-colors group-hover:text-signal-deep md:text-3xl"
                  style={{ fontWeight: 700 }}
                >
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="mt-2 inline-block text-xs font-600 uppercase tracking-[0.12em] text-mute">
                    Featured
                  </span>
                )}
              </div>

              <div>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>
                <p className="mt-3 text-xs tracking-wide text-mute">
                  {project.stack.join(" · ")}
                </p>
              </div>

              <span className="display pt-1 text-xl text-ink transition-transform group-hover:translate-x-1 group-hover:text-signal-deep">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
