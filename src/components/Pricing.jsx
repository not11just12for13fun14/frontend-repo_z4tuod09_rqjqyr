export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Simple plans that scale</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you grow. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sky-700 font-semibold">Starter</p>
            <p className="mt-2 text-4xl font-black">$0<span className="text-base font-semibold text-slate-500">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• 1 user</li>
              <li>• Quotes + Proposals</li>
              <li>• Basic dashboard</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-lg bg-slate-900 text-white py-2 font-semibold">Start Free</a>
          </div>

          <div className="rounded-2xl border-2 border-sky-600 bg-white p-6 shadow-lg">
            <p className="text-sky-700 font-semibold">Team</p>
            <p className="mt-2 text-4xl font-black">$49<span className="text-base font-semibold text-slate-500">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• 5 users</li>
              <li>• AI Scheduler</li>
              <li>• Inventory forecasts</li>
              <li>• Inspections</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-lg bg-sky-600 text-white py-2 font-semibold">Choose Team</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sky-700 font-semibold">Business</p>
            <p className="mt-2 text-4xl font-black">$149<span className="text-base font-semibold text-slate-500">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Unlimited users</li>
              <li>• Advanced analytics</li>
              <li>• Priority support</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-lg bg-white text-sky-700 border border-sky-200 py-2 font-semibold">Talk to Sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
