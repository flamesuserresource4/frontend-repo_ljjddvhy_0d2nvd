export default function Preview({ generated }) {
  if (!generated) return null

  const { article, brief, headlines, meta_description, keywords, social, scores } = generated

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white">Article</h3>
        <div className="mt-3 text-slate-200 whitespace-pre-wrap leading-relaxed">
          {article}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold">Brief</h4>
          <pre className="mt-2 text-slate-200 whitespace-pre-wrap text-sm">{brief}</pre>
        </div>
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold">Headline ideas</h4>
          <ul className="list-disc list-inside text-slate-200 mt-2 text-sm space-y-1">
            {headlines?.map((h, i) => (<li key={i}>{h}</li>))}
          </ul>
        </div>
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold">SEO</h4>
          <p className="text-slate-300/90 text-sm"><span className="font-medium">Meta:</span> {meta_description}</p>
          <p className="text-slate-300/90 text-sm mt-1"><span className="font-medium">Keywords:</span> {keywords?.join(', ')}</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold">Scores</h4>
          <div className="text-slate-300/90 text-sm space-y-1">
            <p>Readability (FK): {scores?.readability_flesch_kincaid}</p>
            <p>PR Jargon %: {scores?.pr_jargon_percent}</p>
            <p>Plagiarism %: {scores?.plagiarism_percent}</p>
            <p>Quote effectiveness: {scores?.quote_effectiveness}</p>
            <p>Headline strength: {scores?.headline_strength}</p>
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold">Social posts</h4>
          <div className="text-slate-200 text-sm space-y-2">
            <p><span className="font-medium">LinkedIn:</span> {social?.linkedin}</p>
            <p><span className="font-medium">Twitter:</span> {social?.twitter}</p>
            <p><span className="font-medium">Instagram:</span> {social?.instagram}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
