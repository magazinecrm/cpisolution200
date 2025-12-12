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

        {/* BACK TO HOME BUTTON */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20
                     text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          ⬅ Back to Home
        </motion.a>
      </main>
    </div>
  );
}