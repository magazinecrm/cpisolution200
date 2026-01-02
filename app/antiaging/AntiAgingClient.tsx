"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function AntiAgingClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

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
          Anti-Aging Research
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Understanding aging as a biological process — and how metabolism,
          genetics, inflammation, and cellular repair influence longevity.
        </motion.p>

        {/* MAIN CARD */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 w-full bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left text-zinc-100 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center">Core Anti-Aging Domains</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            {/* BIOLOGICAL AGING */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🧬 Biological Aging</h3>
              <p className="mt-2 text-zinc-200">
                Aging is driven by cellular damage, telomere shortening,
                mitochondrial dysfunction, and loss of repair mechanisms.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Focus: cellular stress, oxidative damage, and regeneration limits.
              </p>
            </article>

            {/* INFLAMMATION */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🔥 Chronic Inflammation</h3>
              <p className="mt-2 text-zinc-200">
                Long-term low-grade inflammation accelerates aging and increases
                risk of metabolic and neurodegenerative disorders.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Inflammaging is a core driver of biological decline.
              </p>
            </article>

            {/* METABOLIC HEALTH */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">⚙️ Metabolic Health</h3>
              <p className="mt-2 text-zinc-200">
                Insulin sensitivity, glucose regulation, and lipid metabolism
                strongly influence lifespan and healthspan.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Diet, fasting, and activity directly impact aging speed.
              </p>
            </article>

            {/* VO2 MAX */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🏃 VO₂ Max</h3>
              <p className="mt-2 text-zinc-200">
                VO₂ max reflects the body’s oxygen utilization capacity and is
                one of the strongest predictors of longevity.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Regular aerobic activity can slow age-related decline.
              </p>
            </article>

            {/* HRV */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">❤️ Heart Rate Variability (HRV)</h3>
              <p className="mt-2 text-zinc-200">
                HRV measures nervous system resilience and stress adaptability.
                Higher HRV is associated with better recovery and longevity.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Breathing, sleep, and recovery are key regulators.
              </p>
            </article>

            {/* GENETICS & EPIGENETICS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🧠 Genetics & Epigenetics</h3>
              <p className="mt-2 text-zinc-200">
                Genes influence aging, but epigenetic changes determine how
                genes are expressed over time.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Lifestyle can slow or accelerate epigenetic aging clocks.
              </p>
            </article>

            {/* FUTURE TECH */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">🚀 Future Longevity Technologies</h3>
              <p className="mt-2 text-zinc-200">
                Cell reprogramming, senolytics, gene therapy, AI-driven biomarkers,
                and biological robotics may redefine aging in the coming decades.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Experimental today — foundational tomorrow.
              </p>
            </article>

          </div>
        </motion.section>

        {/* NAV */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-center absolute top-6 left-0 px-6 z-30"
        >
          <a
            href="/"
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition"
          >
            ⬅ Home
          </a>

          <div className="hidden sm:flex items-center gap-3">
            <a href="/genetics" className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition">
              Genetics
            </a>
            <a href="/ai-research" className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition">
              AI Research
            </a>
          </div>
        </motion.nav>

      </main>
    </div>
  );
}