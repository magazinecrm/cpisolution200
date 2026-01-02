"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MentalHealthClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Particle Background */}
      <ParticleBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"></div>

      <main className="relative z-10 max-w-5xl w-full px-6 py-24 flex flex-col items-center text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white drop-shadow-2xl"
        >
          Mental Health Research
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Exploring the human mind — from severe psychiatric conditions to altered
          states of consciousness, AI-assisted mental care, and future brain–technology
          interfaces.
        </motion.p>

        {/* CONTENT CARD */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 w-full bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left text-zinc-100 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center">
            Mental Health Domains
          </h2>
          <p className="mt-2 text-center text-zinc-300">
            Each section opens into deeper research, tools, and evolving solutions
          </p>

          {/* GRID */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">

            {/* SCHIZOPHRENIA */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 hover:bg-black/40 transition">
              <h3 className="text-xl font-semibold">🧠 Schizophrenia Research</h3>
              <p className="mt-2 text-zinc-200">
                A complete schizophrenia knowledge hub — symptoms, subtypes,
                medicines, CBT, biomarkers, genetics, metabolism, aging, and
                future personalized treatments.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Covers medication-resistant cases and non-drug interventions.
              </p>

              <Link href="/mental-health/schizophrenia">
                <span className="inline-block mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer">
                  Explore Schizophrenia →
                </span>
              </Link>
            </article>

            {/* SUICIDE PREVENTION */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 hover:bg-black/40 transition">
              <h3 className="text-xl font-semibold">🛑 Suicide Prevention</h3>
              <p className="mt-2 text-zinc-200">
                Crisis education, early-warning understanding, emotional regulation,
                coping strategies, and AI-assisted psychological support systems.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Designed for safety-first intervention.
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/20 opacity-60 cursor-not-allowed">
                Coming Soon →
              </span>
            </article>

            {/* ALTERED STATES */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 hover:bg-black/40 transition">
              <h3 className="text-xl font-semibold">🌌 Altered States of Consciousness</h3>
              <p className="mt-2 text-zinc-200">
                Alpha, Beta, Theta states, meditation, trauma states, psychedelics,
                anesthesia, flow states, and neurobiology of consciousness.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Science-focused, non-sensational.
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/20 opacity-60 cursor-not-allowed">
                Coming Soon →
              </span>
            </article>

            {/* LUCID DREAMING */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 hover:bg-black/40 transition">
              <h3 className="text-xl font-semibold">💤 Lucid Dreaming</h3>
              <p className="mt-2 text-zinc-200">
                Conscious dreaming, neural correlates, therapeutic use,
                trauma processing, and creativity enhancement.
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/20 opacity-60 cursor-not-allowed">
                Coming Soon →
              </span>
            </article>

            {/* MIND TOOLS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 hover:bg-black/40 transition md:col-span-2">
              <h3 className="text-xl font-semibold">🧩 Mind Tools & Wearables</h3>
              <p className="mt-2 text-zinc-200">
                EEG, neurofeedback, HRV tools, sleep tech, AI psychology systems,
                and future brain–computer interfaces.
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-md bg-white/10 border border-white/20 opacity-60 cursor-not-allowed">
                Coming Soon →
              </span>
            </article>

          </div>
        </motion.section>

        {/* TOP NAVIGATION */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-center absolute top-6 left-0 px-6 z-30"
        >
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-200"
          >
            ⬅ Home
          </Link>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/robotics"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              Robotics
            </Link>
            <Link
              href="/genetics"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              Genetics
            </Link>
          </div>
        </motion.nav>

      </main>
    </div>
  );
}