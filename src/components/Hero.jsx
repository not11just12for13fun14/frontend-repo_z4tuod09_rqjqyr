import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
        <div className="backdrop-blur-sm bg-white/60 rounded-xl p-6 md:p-8 shadow-xl">
          <p className="text-sky-600 font-semibold">AxisOps AI</p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2">Schedule, Quote, and Run Operations with AI</h1>
          <p className="mt-4 text-slate-700 max-w-2xl">The operating system for service businesses. AI-powered scheduling, instant quotes, proposal templates, inventory forecasting, and inspection workflows — all in one clean dashboard.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-sky-600 text-white font-semibold px-5 py-3 hover:bg-sky-700 transition">Start Free Demo</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-sky-700 font-semibold px-5 py-3 border border-sky-200 hover:bg-sky-50 transition">See Pricing</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </section>
  )
}
