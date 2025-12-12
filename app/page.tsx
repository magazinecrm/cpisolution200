"use client";
import ParticleBackground from "./components/ParticleBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Particle Background */}
      <ParticleBackground />

      {/* Soft overlay for clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none"></div>

      {/* Main Section */}
      <main className="relative z-10 max-w-5xl w-full px-6 py-24 flex flex-col items-center text-center">

        {/* HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight"
        >
          CPISolution Research Hub
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl"
        >
          Exploring breakthroughs in Artificial Intelligence, Genetics, Stem Cells,
          Cell Reprogramming, Anti-Aging, Mental Health, Cancer Science, and Emerging Technologies.
        </motion.p>

        {/* RESEARCH GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full"
        >
          {[
            { title: "AI Research", link: "/ai" },
            { title: "Genetics", link: "/genetics" },
            { title: "Stem Cells", link: "/health" },
            { title: "Cell Reprogramming", link: "/cell" },
            { title: "Anti-Aging", link: "/antiaging" },
            { title: "Robotics", link: "/robotics" },     // 🌟 Added here
            { title: "Mental Health", link: "/mentalhealth" },
            { title: "Cancer Research", link: "/cancer" },
            { title: "Science News", link: "/Sciencenews" },
            { title: "Daily Activity", link: "/Da" },
            { title: "Contact Us", link: "/Contactus" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                         text-white font-semibold shadow-lg hover:bg-white/20 
                         transition-all duration-300"
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>

        {/* FOOTER */}
        <p className="mt-14 text-sm text-zinc-400">
          Built with Next.js • Tailwind CSS • Framer Motion • Particle Engine
        </p>
      </main>
    </div>
  );
}