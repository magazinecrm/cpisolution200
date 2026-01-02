"use client";

import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function AIResearchClient() {
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
          AI Research
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Foundational and applied artificial intelligence — mathematics, machine
          learning, deep learning, large language models, autonomous agents, and
          future intelligence architectures.
        </motion.p>

        {/* CONTENT */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 w-full bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left text-zinc-100 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center">Core AI Research Areas</h2>
          <p className="mt-2 text-center text-zinc-300">
            Built on strong mathematical foundations and real-world experimentation
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            {/* MATH */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">📐 Mathematics for AI</h3>
              <p className="mt-2 text-zinc-200">
                Linear algebra, probability theory, statistics, PCA, Bayesian
                inference, optimization, and information theory — the backbone of AI.
              </p>
            </article>

            {/* PYTORCH */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🔥 Deep Learning & PyTorch</h3>
              <p className="mt-2 text-zinc-200">
                Neural networks, CNNs, RNNs, transformers, training dynamics,
                optimization strategies, and hands-on PyTorch experimentation.
              </p>
            </article>

            {/* LLM */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🧠 Large Language Models</h3>
              <p className="mt-2 text-zinc-200">
                Transformers, attention, fine-tuning, RAG, prompt engineering,
                evaluation, and real-world LLM applications.
              </p>
            </article>

            {/* AGENTS */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">🤖 Autonomous AI Agents</h3>
              <p className="mt-2 text-zinc-200">
                Tool-using agents, planning, memory systems, self-reflection loops,
                multi-agent coordination, and decision-making architectures.
              </p>
            </article>

            {/* FUTURE */}
            <article className="rounded-xl bg-black/30 border border-white/10 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">🚀 Future AI Directions</h3>
              <p className="mt-2 text-zinc-200">
                Neuro-symbolic AI, biologically inspired intelligence, AI + genetics,
                reasoning systems, and long-term artificial general intelligence
                research.
              </p>
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
              href="/robotics"
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition"
            >
              Robotics
            </a>
          </div>
        </motion.nav>

      </main>
    </div>
  );
}