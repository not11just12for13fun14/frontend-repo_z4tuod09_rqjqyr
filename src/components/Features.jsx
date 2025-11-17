import { Calendar, BadgeDollarSign, FileText, Boxes, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'AI Scheduler',
    desc: 'Assigns jobs based on proximity, duration, traffic, and availability to minimize idle time.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Instant Quotes',
    desc: 'Price ranges generated from size, type, and frequency with smart discounts built-in.'
  },
  {
    icon: FileText,
    title: 'Proposals',
    desc: 'Auto-formatted proposals pulling client details and service scope from templates.'
  },
  {
    icon: Boxes,
    title: 'Inventory',
    desc: 'Forecast supply runouts from job counts and usage trends with reorder nudges.'
  },
  {
    icon: BarChart3,
    title: 'AI Dashboard',
    desc: 'Weekly snapshot of revenue, labor hours, job mix, and retention — no spreadsheets.'
  },
  {
    icon: ShieldCheck,
    title: 'Inspections',
    desc: 'Generate checklists, analyze photos, and flag issues for quick follow-up.'
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Made for modern service teams</h2>
          <p className="mt-3 text-slate-600">Founders and operators use AxisOps AI to plan routes, quote fast, and keep margins sharp.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <f.icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
