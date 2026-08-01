"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[12%] top-[-8%] h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(0,168,143,0.22),transparent_62%)]" />
        <div className="absolute bottom-[8%] left-[-10%] h-[45vmin] w-[45vmin] rounded-full bg-[radial-gradient(circle,rgba(10,22,40,0.08),transparent_65%)]" />
        <div className="absolute inset-x-0 top-[28%] mx-auto h-px max-w-6xl bg-line" />
        <div className="absolute inset-y-[18%] left-[8%] hidden w-px bg-line md:block" />
        <div className="absolute inset-y-[18%] right-[8%] hidden w-px bg-line md:block" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="section-label mb-6"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="display max-w-[11ch] text-[clamp(3.4rem,12vw,8.5rem)] font-800 leading-[0.9] text-ink"
          style={{ fontWeight: 800 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="cta cta-primary">
            Email me
          </a>
          <a
            href={profile.resumeHref}
            className="cta cta-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-mute"
        >
          {profile.location}
        </motion.p>
      </div>
    </section>
  );
}
