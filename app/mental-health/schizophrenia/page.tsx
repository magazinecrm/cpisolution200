"use client"

import React, { useState } from "react"
import styles from "./styles.module.css"

export const metadata = {
  title: "Schizophrenia — Mental Health",
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.card}>
      <button className={styles.toggle} onClick={() => setOpen((v) => !v)}>
        <span className={styles.caret}>{open ? "▾" : "▸"}</span>
        {title}
      </button>
      {open && <div className={styles.content}>{children}</div>}
    </div>
  )
}

export default function SchizophreniaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Schizophrenia</h1>
        <p className={styles.lead}>
          A concise, user-friendly guide to schizophrenia — symptoms, types,
          biomarkers, and treatments (including medication, CBT and lifestyle
          approaches).
        </p>
      </header>

      <section className={styles.grid}>
        <Accordion title="Overview">
          <p>
            Schizophrenia is a condition that can affect thinking, behaviour,
            and emotions, and sometimes alters a person's sense of reality.
            Symptoms vary, and early diagnosis plus personalised treatment can
            improve outcomes.
          </p>
        </Accordion>

        <Accordion title="Symptoms — Positive">
          <ul>
            <li><strong>Hallucinations:</strong> hearing or seeing things that others do not.</li>
            <li><strong>Auditory hallucinations:</strong> hearing voices or sounds.</li>
            <li><strong>Delusions:</strong> fixed false beliefs (persecution, grandiosity, somatic).</li>
            <li><strong>Disorganised thinking/speech:</strong> sudden topic shifts or nonsensical words.</li>
          </ul>
        </Accordion>

        <Accordion title="Symptoms — Negative & Cognitive">
          <ul>
            <li><strong>Negative symptoms:</strong> reduced motivation, flat affect, social withdrawal, poor self-care.</li>
            <li><strong>Cognitive symptoms:</strong> difficulty concentrating, slowed thinking, memory impacts.</li>
            <li>These symptoms can be long-standing and affect daily functioning.</li>
          </ul>
        </Accordion>

        <Accordion title="Types and Related Conditions">
          <p>Common subtypes and related presentations include:</p>
          <ul>
            <li><strong>Paranoid schizophrenia:</strong> prominent delusions and/or auditory hallucinations.</li>
            <li><strong>Hebephrenic (disorganised):</strong> disorganised speech/behaviour and inappropriate affect.</li>
            <li><strong>Catatonic:</strong> motor disturbance ranging from immobility to agitation.</li>
            <li><strong>Schizoaffective, schizophreniform, delusional disorder:</strong> related diagnoses with overlapping features.</li>
          </ul>
        </Accordion>

        <Accordion title="Treatments — Medication">
          <p>
            Antipsychotic medications are commonly used to treat positive
            symptoms. Newer medications and research aim to better address
            negative symptoms and cognitive deficits. Medication choice and
            dosing are personalised and may require monitoring for side effects.
          </p>
        </Accordion>

        <Accordion title="Treatments — Psychotherapy (CBT & more)">
          <p>
            Cognitive Behavioural Therapy (CBT) and related therapies help
            patients develop coping strategies, build rapport, and gently
            challenge distressing beliefs and hallucinations. Modern therapy
            approaches include acceptance, mindfulness, and trauma-focused
            methods.
          </p>
        </Accordion>

        <Accordion title="Biomarkers & Pharmacogenetics">
          <p>
            Research explores genetic markers, inflammatory markers (e.g.
            CRP, cytokines), and pharmacogenomics to predict drug response and
            personalise treatment. This is an evolving area with promise for
            faster, safer medication matching.
          </p>
        </Accordion>

        <Accordion title="Diet & Lifestyle — Ketogenic Diet">
          <p>
            Case reports and small studies have described improvements in some
            people with serious mental illness after adopting a ketogenic or
            low-carbohydrate diet, possibly via reduced inflammation and
            metabolic benefits. These findings are preliminary; dietary
            changes should be supervised by medical professionals.
          </p>
        </Accordion>

        <Accordion title="Quick FAQs & Practical Tips">
          <ul>
            <li>Agree and build rapport if someone is experiencing delusions — avoid direct confrontation.</li>
            <li>Medication targets positive symptoms; therapy helps with coping and long-term recovery.</li>
            <li>Biomarker testing and pharmacogenetics may reduce trial-and-error prescribing in the future.</li>
            <li>If someone is in danger or acutely unwell, seek emergency help immediately.</li>
          </ul>
        </Accordion>

        <Accordion title="Resources & Notes">
          <p>
            Content here summarises a mix of clinical concepts, case reports,
            and research findings. It is not a substitute for professional
            medical advice. For clinical decisions, consult a psychiatrist
            or other qualified health professional.
          </p>
        </Accordion>
      </section>
    </main>
  )
}
