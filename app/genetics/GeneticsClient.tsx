"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function GeneticsClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"></div>

      <main className="relative z-10 max-w-5xl w-full px-6 py-24 flex flex-col items-center text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white drop-shadow-2xl"
        >
          Genetics Research
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Understanding life at its most fundamental level — genes, regulation,
          inheritance, disease risk, longevity, and the future of personalized
          medicine powered by biology and AI.
        </motion.p>

        {/* CONTENT */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 w-full bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left text-zinc-100 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center">
            Core Genetics Domains
          </h2>
          <p className="mt-2 text-center text-zinc-300">
            Structured knowledge — from fundamentals to cutting-edge research
          </p>

          {/* GRID */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">

            {/* GENOMICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🧬 Genomics</h3>
              <p className="mt-2 text-zinc-200">
                Study of the complete DNA sequence of organisms — including
                whole-genome sequencing, variant analysis, and population genetics.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Used to understand disease risk, inherited traits, and evolution.
              </p>
            </article>

            {/* EPIGENETICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🧠 Epigenetics</h3>
              <p className="mt-2 text-zinc-200">
                How genes are switched ON or OFF without changing DNA sequence —
                influenced by age, environment, stress, diet, and lifestyle.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Central to aging, cancer, mental health, and cell reprogramming.
              </p>
            </article>

            {/* DISEASE GENETICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🩺 Disease Genetics</h3>
              <p className="mt-2 text-zinc-200">
                Genetic variants linked to schizophrenia, cancer, diabetes,
                cardiovascular disease, neurodegeneration, and rare disorders.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Includes polygenic risk scores and inherited mutations.
              </p>
            </article>

            {/* PHARMACOGENOMICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">💊 Pharmacogenomics</h3>
              <p className="mt-2 text-zinc-200">
                How genetic differences affect drug response — dosage, side effects,
                effectiveness, and toxicity.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Reduces trial-and-error medicine.
              </p>
            </article>

            {/* LONGEVITY */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">⏳ Genetics of Aging & Longevity</h3>
              <p className="mt-2 text-zinc-200">
                Telomeres, DNA damage, epigenetic clocks, mitochondrial genetics,
                inflammation, and cellular stress pathways that control aging speed.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Foundation for anti-aging and regenerative medicine.
              </p>
            </article>

            {/* AI + GENETICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">🤖 AI × Genetics</h3>
              <p className="mt-2 text-zinc-200">
                AI models applied to gene expression analysis, variant prediction,
                protein folding, drug discovery, and personalized treatment design.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Future medicine will be computational + biological.
              </p>
            </article>

          </div>
        </motion.section>

        {/* NAVIGATION */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-center absolute top-6 left-0 px-6 z-30"
        >
          <a
            href="/"
            className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition"
          >
            ⬅ Home
          </a>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/ai-research"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              AI Research
            </a>
            <a
              href="/cell-reprogramming"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              Cell Reprogramming
            </a>
          </div>
        </motion.nav>

      </main>
    </div>
  );
}