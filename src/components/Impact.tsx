"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/content";

export function Impact() {
  return (
    <section className="border-y border-line px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <p
              className="display text-4xl font-700 text-ink md:text-5xl"
              style={{ fontWeight: 700 }}
            >
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-mute">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
