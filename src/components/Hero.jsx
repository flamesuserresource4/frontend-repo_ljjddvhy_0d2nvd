import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
          Press Release Repurposing Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl text-violet-100/90">
          Paste a link to any press release and get a clean, publish-ready article with multiple variants.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/40 to-transparent" />
    </section>
  )
}
