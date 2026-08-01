"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl border-t border-line pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Contact</p>
          <h2
            className="display max-w-[14ch] text-[clamp(2.6rem,8vw,5.5rem)] font-800 leading-[0.95] text-ink"
            style={{ fontWeight: 800 }}
          >
            Let&apos;s build something that ships.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Actively looking for senior / lead engineering roles and high-trust
            contract work. Fast replies — send the brief or the JD.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="cta cta-primary">
              {profile.email}
            </a>
            <a
              href={profile.resumeHref}
              className="cta cta-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>
            <a
              href={profile.links.linkedin}
              className="cta cta-ghost"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              className="cta cta-ghost"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.links.x}
              className="cta cta-ghost"
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
