import Link from 'next/link'

export const metadata = {
  title: 'Mental Health',
}

export default function MentalHealthIndex() {
  return (
    <main style={{padding: '2rem'}}>
      <h1>Mental Health</h1>
      <p>This section contains resources and articles about mental health topics.</p>
      <ul>
        <li>
          <Link href="/mental-health/schizophrenia">Schizophrenia — overview, symptoms, and treatments</Link>
        </li>
      </ul>
    </main>
  )
}
