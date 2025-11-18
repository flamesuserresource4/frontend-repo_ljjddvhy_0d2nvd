import { useMemo, useState } from 'react'

export default function Results({ ingest, onGenerate }) {
  const [tone, setTone] = useState('neutral')
  const [style, setStyle] = useState('news')
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const rawText = ingest?.raw_text || ''
  const title = ingest?.title || 'Press release'

  const handleGenerate = async () => {
    const res = await fetch(`${backend}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: ingest?.id,
        title,
        raw_text: rawText,
        options: { tone, style }
      })
    })
    const data = await res.json()
    onGenerate?.(data)
  }

  const wordCount = useMemo(() => rawText.split(/\s+/).filter(Boolean).length, [rawText])

  return (
    <div className="mt-6 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select value={tone} onChange={(e) => setTone(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white">
          <option value="neutral">Neutral</option>
          <option value="informational">Informational</option>
          <option value="analytical">Analytical</option>
          <option value="engaging">Engaging</option>
          <option value="authoritative">Authoritative</option>
        </select>
        <select value={style} onChange={(e) => setStyle(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white">
          <option value="news">News</option>
          <option value="blog">Blog</option>
          <option value="feature">Feature</option>
          <option value="neutral_report">Neutral report</option>
          <option value="analysis">Analysis</option>
          <option value="trend">Trend commentary</option>
        </select>
        <button onClick={handleGenerate} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
          Generate Article
        </button>
        <div className="text-sm text-slate-300/80">Words: {wordCount}</div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <h3 className="text-slate-200 font-semibold">Extracted content</h3>
        <p className="mt-2 text-slate-300/80 whitespace-pre-wrap text-sm max-h-60 overflow-auto">{rawText}</p>
      </div>
    </div>
  )
}
