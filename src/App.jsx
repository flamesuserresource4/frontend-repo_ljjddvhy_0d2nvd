import { useState } from 'react'
import Hero from './components/Hero'
import IngestForm from './components/IngestForm'
import Results from './components/Results'
import Preview from './components/Preview'

function App() {
  const [ingest, setIngest] = useState(null)
  const [generated, setGenerated] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <main className="relative z-10 max-w-6xl mx-auto px-6 -mt-20">
        <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-xl">
          <IngestForm onResult={(data) => { setIngest(data); setGenerated(null) }} />
          {ingest && <Results ingest={ingest} onGenerate={setGenerated} />}
          <Preview generated={generated} />
        </div>
        <p className="text-center text-slate-400/80 text-xs mt-6">
          Tip: Use public press releases or PDFs. Paywalled pages may not fetch.
        </p>
      </main>
    </div>
  )
}

export default App
