import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '0₪', features: ['1,000 NIS free volume', 'Basic analytics', 'Community support'], cta: 'Start free' },
  { name: 'Growth', price: '1.5% + 1₪', features: ['Priority support', 'Advanced analytics', 'Subscriptions'], cta: 'Choose Growth', popular: true },
  { name: 'Scale', price: 'Custom', features: ['Volume discounts', 'Dedicated manager', 'SLA & compliance'], cta: 'Contact sales' }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-slate-300">Pay as you grow. No hidden fees.</motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className={`relative rounded-2xl border ${t.popular ? 'border-orange-400/40' : 'border-white/10'} bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-left shadow-lg`}> 
              {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">Popular</div>}
              <div className="text-white text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-bold text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map(f => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium text-white ring-1 ring-white/15 transition ${t.popular ? 'bg-gradient-to-r from-orange-500 to-blue-600 shadow-lg shadow-blue-500/30' : 'bg-white/10 hover:bg-white/15'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
