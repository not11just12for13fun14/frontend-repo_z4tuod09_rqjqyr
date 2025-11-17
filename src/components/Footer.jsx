export default function Footer(){
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} AxisOps AI — Smarter Jobs. Happier Teams.</p>
        <div className="text-sm text-slate-500 flex gap-4">
          <a href="/docs" className="hover:text-slate-700">Docs</a>
          <a href="#pricing" className="hover:text-slate-700">Pricing</a>
          <a href="/test" className="hover:text-slate-700">System</a>
        </div>
      </div>
    </footer>
  )
}
