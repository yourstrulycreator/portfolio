"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="bg-bg-deep/55 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-3">Experience</p>
          <h2
            className="display max-w-2xl text-4xl font-700 text-ink md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Delivery leadership with hands still on the keyboard
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-mute">
            Several roles overlap — concurrent freelance and contract
            engagements, not sequential job-hopping.
          </p>
        </motion.div>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.2) }}
              className="grid gap-3 border-t border-line py-8 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div>
                <p className="text-sm text-mute">{job.period}</p>
                {"href" in job && job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm font-600 text-signal-deep underline-offset-4 hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-600 text-ink">{job.company}</p>
                )}
              </div>
              <div>
                <h3
                  className="display text-xl font-700 text-ink md:text-2xl"
                  style={{ fontWeight: 700 }}
                >
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-[0.95rem] leading-relaxed text-ink-soft"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
