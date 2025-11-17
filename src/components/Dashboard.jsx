import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [token, setToken] = useState('')
  const [snapshot, setSnapshot] = useState(null)
  const [quote, setQuote] = useState(null)
  const [quoteInputs, setQuoteInputs] = useState({ property_size_sqft: 1200, cleaning_type: 'standard', frequency: 'biweekly' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    // Demo login
    const email = 'founder@axisops.ai'
    fetch(`${API}/api/auth/demo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Demo Founder', email })
    }).then(r => r.json()).then(async () => {
      const t = await (await fetch(`${API}/api/session/token?email=${encodeURIComponent(email)}`)).json()
      setToken(t.token)
      setStatus('Signed in')
      const snap = await (await fetch(`${API}/api/dashboard/snapshot`, { headers: { Authorization: `Bearer ${t.token}` } })).json()
      setSnapshot(snap)
    }).catch(() => setStatus('Error signing in'))
  }, [])

  const requestQuote = async () => {
    const res = await fetch(`${API}/api/quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(quoteInputs)
    })
    const data = await res.json()
    setQuote(data)
  }

  return (
    <section id="get-started" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Operator Console</h2>
            <p className="text-slate-600 mt-2">Your weekly snapshot and AI tools in one place.</p>
          </div>
          <div>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </div>

        {/* Snapshot */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {snapshot ? (
            <>
              <div className="rounded-xl border p-4 bg-slate-50">
                <p className="text-slate-500 text-xs">Week of</p>
                <p className="text-xl font-bold">{snapshot.week_of}</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-slate-500 text-xs">Revenue</p>
                <p className="text-xl font-bold">${snapshot.revenue.toLocaleString()}</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-slate-500 text-xs">Labor Hours</p>
                <p className="text-xl font-bold">{snapshot.labor_hours}</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-slate-500 text-xs">Retention</p>
                <p className="text-xl font-bold">{Math.round(snapshot.retention_rate * 100)}%</p>
              </div>
            </>
          ) : (
            <div className="col-span-4 text-slate-500">Loading snapshot...</div>
          )}
        </div>

        {/* Quote tool */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6">
            <p className="font-semibold text-slate-800">AI Quote Generator</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-sm text-slate-600">Property size (sqft)</label>
                <input type="number" value={quoteInputs.property_size_sqft} onChange={e => setQuoteInputs(v => ({ ...v, property_size_sqft: Number(e.target.value) }))} className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Cleaning type</label>
                <select value={quoteInputs.cleaning_type} onChange={e => setQuoteInputs(v => ({ ...v, cleaning_type: e.target.value }))} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="standard">Standard</option>
                  <option value="deep">Deep</option>
                  <option value="move_in_out">Move In/Out</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Frequency</label>
                <select value={quoteInputs.frequency} onChange={e => setQuoteInputs(v => ({ ...v, frequency: e.target.value }))} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="one_time">One time</option>
                  <option value="monthly">Monthly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>
            <button onClick={requestQuote} className="mt-4 rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold">Generate Quote</button>
            {quote ? (
              <div className="mt-4 rounded-lg bg-slate-50 p-4">
                <p className="text-slate-600 text-sm">Price range</p>
                <p className="text-2xl font-bold">${quote.low} - ${quote.high}</p>
                <p className="mt-2 text-xs text-slate-500">Reflection: {quote.reflection}</p>
              </div>
            ) : (
              <p className="mt-4 text-slate-500 text-sm">Set your inputs and click Generate Quote.</p>
            )}
          </div>

          <div className="rounded-2xl border p-6">
            <p className="font-semibold text-slate-800">AI Scheduler (Demo)</p>
            <p className="text-slate-600 text-sm mt-2">We route jobs by proximity and service windows. Reflection shows time wasters.</p>
            <pre className="mt-3 text-xs bg-slate-50 p-3 rounded-lg overflow-auto">{"{"}jobs: [3], staff: [3]{"}"}</pre>
            <a href="/test" className="mt-4 inline-flex rounded-lg border px-4 py-2 text-slate-700">Run Backend Tests</a>
          </div>
        </div>
      </div>
    </section>
  )
}
