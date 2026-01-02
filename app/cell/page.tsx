"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function CellReprogrammingClient() {
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
          Cell Reprogramming
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Rewriting cellular identity to reverse aging, repair tissues, and redefine
          what is biologically possible.
        </motion.p>

        {/* CONTENT */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 w-full bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left text-zinc-100 shadow-2xl"
        >
          {/* WHAT IS CELL REPROGRAMMING */}
          <article>
            <h2 className="text-2xl font-bold">What Is Cell Reprogramming?</h2>
            <p className="mt-3 text-zinc-200">
              Cell reprogramming is the process of changing a cell’s identity by
              altering its gene expression patterns — without changing its DNA.
              In simple terms, it means teaching a cell to behave like a younger or
              different type of cell.
            </p>
            <p className="mt-3 text-zinc-200">
              A skin cell can be reprogrammed into a stem-like state, or partially
              rejuvenated to restore youthful function while keeping its original role.
            </p>
          </article>

          <hr className="my-6 border-white/10" />

          {/* WHY IT MATTERS */}
          <article>
            <h2 className="text-2xl font-bold">Why Cell Reprogramming Matters</h2>
            <ul className="list-disc ml-6 mt-3 text-zinc-200 space-y-1">
              <li>Aging is largely an information loss problem, not just damage</li>
              <li>Cells forget how to function optimally over time</li>
              <li>Reprogramming restores youthful gene expression</li>
              <li>It addresses the root cause, not just symptoms</li>
            </ul>
          </article>

          <hr className="my-6 border-white/10" />

          {/* YAMANAKA FACTORS */}
          <article>
            <h2 className="text-2xl font-bold">Yamanaka Factors (2006)</h2>
            <p className="mt-3 text-zinc-200">
              In 2006, Shinya Yamanaka discovered that introducing four transcription
              factors (OSKM) could revert adult cells into induced pluripotent stem cells (iPSCs).
            </p>
            <ul className="list-disc ml-6 mt-3 text-zinc-200 space-y-1">
              <li>Oct4</li>
              <li>Sox2</li>
              <li>Klf4</li>
              <li>c-Myc</li>
            </ul>
            <p className="mt-3 text-zinc-200">
              This discovery reshaped biology and earned a Nobel Prize.
            </p>
          </article>

          <hr className="my-6 border-white/10" />

          {/* PARTIAL REPROGRAMMING */}
          <article>
            <h2 className="text-2xl font-bold">Partial Reprogramming & Anti-Aging</h2>
            <p className="mt-3 text-zinc-200">
              Full reprogramming resets identity completely — but partial reprogramming
              resets aging markers while preserving cell function.
            </p>
            <ul className="list-disc ml-6 mt-3 text-zinc-200 space-y-1">
              <li>Reverses epigenetic age</li>
              <li>Improves mitochondrial function</li>
              <li>Restores tissue regeneration</li>
              <li>Reduces inflammation</li>
            </ul>
            <p className="mt-3 text-zinc-200">
              This approach is considered one of the most promising anti-aging strategies.
            </p>
          </article>

          <hr className="my-6 border-white/10" />

          {/* EPIGENETIC CLOCK */}
          <article>
            <h2 className="text-2xl font-bold">Epigenetic Clocks</h2>
            <p className="mt-3 text-zinc-200">
              Aging can be measured using epigenetic clocks based on DNA methylation.
              Cell reprogramming has been shown to reverse these clocks in animal models.
            </p>
          </article>

          <hr className="my-6 border-white/10" />

          {/* CURRENT LIMITATIONS */}
          <article>
            <h2 className="text-2xl font-bold">Current Challenges</h2>
            <ul className="list-disc ml-6 mt-3 text-zinc-200 space-y-1">
              <li>Risk of cancer if reprogramming is uncontrolled</li>
              <li>Precise timing and dosage required</li>
              <li>Delivery mechanisms still evolving</li>
              <li>Human trials are limited</li>
            </ul>
          </article>

          <hr className="my-6 border-white/10" />

          {/* FUTURE */}
          <article>
            <h2 className="text-2xl font-bold">The Future Direction</h2>
            <p className="mt-3 text-zinc-200">
              Cell reprogramming is expected to integrate with:
            </p>
            <ul className="list-disc ml-6 mt-3 text-zinc-200 space-y-1">
              <li>AI-guided gene control</li>
              <li>Personalized longevity medicine</li>
              <li>Regenerative organ repair</li>
              <li>Disease-specific rejuvenation</li>
            </ul>
          </article>
        </motion.section>

        {/* TOP NAVIGATION */}
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
              href="/genetics"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              Genetics
            </a>
            <a
              href="/ai-research"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              AI Research
            </a>
          </div>
        </motion.nav>

      </main>
    </div>
  );
}