"use client";

import ParticleBackground from "../../components/ParticleBackground";
import { motion } from "framer-motion";
import { useState } from "react";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-black/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 text-left font-semibold text-white flex justify-between items-center"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-zinc-200 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function SchizophreniaClient() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">

        {/* NAVIGATION */}
        <nav className="absolute top-6 left-0 w-full px-6 flex justify-between z-30">
          <a href="/" className="btn">⬅ Home</a>
          <div className="flex gap-3">
            <a href="/mental-health" className="btn">Mental Health</a>
            <a href="/genetics" className="btn">Genetics</a>
          </div>
        </nav>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          Schizophrenia
        </motion.h1>

        <p className="mt-6 text-zinc-300 max-w-3xl mx-auto">
          A complete, research-driven knowledge base — from symptoms and types to
          modern medicine, CBT, biomarkers, metabolism, and aging.
        </p>

        {/* WHAT IS SCHIZOPHRENIA */}
        <section className="mt-12 text-left">
          <Accordion title="What is Schizophrenia?">
            <p>
              Schizophrenia is a disorder that can impact a person's thinking,
              behaviour, and emotions. At times, a person may not be able to
              understand reality and may experience increased symptom severity.
            </p>
          </Accordion>
        </section>

        {/* SYMPTOMS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">Symptoms</h2>
          <div className="grid md:grid-cols-3 gap-4">

            <Accordion title="Positive Symptoms">
              <ul className="list-disc ml-5">
                <li>Hallucinations (auditory, visual, tactile, olfactory)</li>
                <li>Delusions</li>
                <li>Thought disorder</li>
              </ul>
              <p className="mt-2">
                These symptoms can come and go and may vary in severity.
              </p>
            </Accordion>

            <Accordion title="Hallucinations">
              <ul className="list-disc ml-5">
                <li>Auditory: hearing voices</li>
                <li>Visual: seeing things not present</li>
                <li>Tactile: false physical sensations</li>
                <li>Olfactory: smelling non-existent odors</li>
              </ul>
            </Accordion>

            <Accordion title="Negative Symptoms">
              <ul className="list-disc ml-5">
                <li>Anhedonia</li>
                <li>Avolition</li>
                <li>Social withdrawal</li>
                <li>Emotional flattening</li>
                <li>Alogia</li>
              </ul>
            </Accordion>

          </div>
        </section>

        {/* TYPES */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Types of Schizophrenia
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <Accordion title="Paranoid Schizophrenia">
              <p>
                Characterized by delusions and auditory hallucinations.
                Primarily involves positive symptoms.
              </p>
            </Accordion>

            <Accordion title="Hebephrenic (Disorganized)">
              <ul className="list-disc ml-5">
                <li>Disorganized speech</li>
                <li>Disorganized behavior</li>
                <li>Flat or inappropriate affect</li>
              </ul>
            </Accordion>

            <Accordion title="Catatonic Schizophrenia">
              <p>
                Marked by excessive or reduced movement (excited or retarded catatonia).
              </p>
            </Accordion>

            <Accordion title="Residual Schizophrenia">
              <p>
                Milder form with persistent negative symptoms after acute episodes.
              </p>
            </Accordion>

            <Accordion title="Schizoaffective Disorder">
              <p>
                Combines schizophrenia symptoms with mood disorders
                (depression or bipolar).
              </p>
            </Accordion>

            <Accordion title="Delusional & Brief Psychotic Disorders">
              <p>
                Fixed false beliefs or short-term psychotic episodes with remission.
              </p>
            </Accordion>

          </div>
        </section>

        {/* MEDICINES */}
        <section className="mt-12 text-left">
          <Accordion title="Medicines">
            <p>
              Most medicines target positive symptoms. Many are decades old.
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>First generation: Chlorpromazine, Haloperidol</li>
              <li>Second generation: Risperidone, Olanzapine, Aripiprazole</li>
              <li>Emerging: KarXT, Karuna Therapeutics, Acadia</li>
            </ul>
          </Accordion>
        </section>

        {/* CBT */}
        <section className="mt-10 text-left">
          <Accordion title="Cognitive Behaviour Therapy (CBT)">
            <p>
              CBT helps patients manage delusions, hallucinations, and thought
              distortions by identifying activating events, beliefs, and responses.
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>ERP (Exposure & Response Prevention)</li>
              <li>ACT, DBT, MBCT</li>
              <li>Trauma-focused CBT</li>
            </ul>
          </Accordion>
        </section>

        {/* BIOMARKERS */}
        <section className="mt-10 text-left">
          <Accordion title="Biomarkers & Genetics">
            <p>
              There are three types of biomarkers: genetic, inflammatory, and
              pharmacogenomic.
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>22q11.2 deletion</li>
              <li>CRP, IL-1, IL-2 receptor</li>
              <li>CYP450 drug metabolism</li>
            </ul>
          </Accordion>
        </section>

        {/* KETO & AGING */}
        <section className="mt-10 text-left">
          <Accordion title="Keto, Inflammation & Aging">
            <p>
              Schizophrenia patients show increased inflammation, oxidative stress,
              and shorter telomeres. Ketogenic diets have shown symptom remission
              in long-term case studies.
            </p>
          </Accordion>
        </section>

      </main>

      <style jsx>{`
        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          font-weight: 600;
        }
        .btn:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}