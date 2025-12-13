"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function RoboticsClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Particle Background */}
      <ParticleBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl w-full px-6 py-24 flex flex-col items-center text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white drop-shadow-2xl"
        >
          Robotics Research
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed"
        >
          Exploring humanoids, nanobots, xenobots, biological robots, and anti-robots —
          the frontier where AI meets genetics, medicine, and living programmable systems.
        </motion.p>

        {/* MAIN CONTENT CARDS */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 w-full max-w-3xl bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left text-zinc-100 shadow-2xl"
        >
          <h2 className="text-2xl font-bold">Robotics &amp; Biological Intelligence</h2>
          <p className="mt-2 text-zinc-200">Where AI, Biology, and Living Systems Converge</p>

          <div className="mt-4 space-y-4">
            <article>
              <h3 className="font-semibold">🎥 Early Vision (2016–2017)</h3>
              <p className="mt-1 text-zinc-200">
                Before biological robotics became mainstream, an early idea emerged: AI
                alone is incomplete — true adaptability and intelligence appear when AI
                is combined with biology and living systems.
              </p>
              <p className="mt-2 text-sm">
                Reference video: <a className="underline text-blue-300" href="https://www.youtube.com/watch?v=PrVHGdI6jcQ" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=PrVHGdI6jcQ</a>
              </p>
            </article>

            <hr className="border-white/6" />

            <article>
              <h3 className="font-semibold">The Shift: From Mechanical Robots to Living Machines</h3>
              <div className="mt-2 grid sm:grid-cols-2 gap-4">
                <div>
                  <strong>Traditional robotics:</strong>
                  <ul className="list-disc ml-5 mt-1 text-zinc-200">
                    <li>Metal</li>
                    <li>Motors</li>
                    <li>Code</li>
                    <li>Sensors</li>
                  </ul>
                </div>
                <div>
                  <strong>Modern/biological robotics:</strong>
                  <ul className="list-disc ml-5 mt-1 text-zinc-200">
                    <li>Living cells</li>
                    <li>Biological tissues</li>
                    <li>Neural systems</li>
                    <li>AI-guided biological design</li>
                  </ul>
                </div>
              </div>
            </article>

            <hr className="border-white/6" />

            <article>
              <h3 className="font-semibold">1. Xenobots (2020)</h3>
              <p className="mt-1 text-zinc-200">Origin: African clawed frog (<em>Xenopus laevis</em>). Developed by research teams at the University of Vermont, Tufts University and the Harvard Wyss Institute.</p>
              <p className="mt-1 text-zinc-200">Xenobots are living robots assembled from frog skin and heart cells, designed by AI algorithms. They are not genetically modified but biologically re-configured.</p>
              <ul className="list-disc ml-5 mt-2 text-zinc-200">
                <li>Move using heart-cell contractions</li>
                <li>Self-heal after damage</li>
                <li>Operate in swarms</li>
                <li>Fully biodegradable</li>
                <li>Can transport micro-payloads</li>
              </ul>
              <p className="mt-2 text-zinc-200"><strong>Applications:</strong> targeted drug delivery, cancer detection, microplastic cleanup, tissue regeneration.</p>
            </article>

            <hr className="border-white/6" />

            <article>
              <h3 className="font-semibold">2. Biobots (2022)</h3>
              <p className="mt-1 text-zinc-200">Biobots are hybrid machines built from engineered muscle tissue, collagen or synthetic scaffolds and 3D-printed biological frameworks. Research groups at Northwestern, MIT and other labs advanced these systems.</p>
              <ul className="list-disc ml-5 mt-2 text-zinc-200">
                <li>Capable of crawling, swimming and gripping</li>
                <li>Movement controlled via light (optogenetics)</li>
                <li>Can integrate biosensors</li>
                <li>Built using lab-grown muscle tissue</li>
              </ul>
              <p className="mt-2 text-zinc-200"><strong>Applications:</strong> micro-surgery, wound healing assistance, immune modulation, delivery of genetic therapies.</p>
            </article>

            <hr className="border-white/6" />

            <article>
              <h3 className="font-semibold">3. Neural Robotic Systems (2023–2024)</h3>
              <p className="mt-1 text-zinc-200">These systems use living neurons (cortical organoids or neural cultures) connected to electronic interfaces. They can learn from experience, adapt behaviour, and process information biologically, bridging AI and neuroscience.</p>
            </article>

            <hr className="border-white/6" />

            <article>
              <h3 className="font-semibold">Why Biological Robotics Is the Future</h3>
              <p className="mt-1 text-zinc-200">Biological robots offer capabilities traditional machines cannot: self-repair, biodegradability, energy efficiency, cellular-level precision, and natural interaction with living systems. They are especially promising for medicine, longevity research and regenerative therapies.</p>
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
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-200"
            >
              ⬅ Back to Home
            </a>
          </div>

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