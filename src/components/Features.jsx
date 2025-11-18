import { motion } from 'framer-motion'
import { ShieldCheck, BarChart3, Clock, Globe } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Bank-grade security', desc: 'Encrypted transactions and multi-factor protection by default.' },
  { icon: BarChart3, title: 'Live analytics', desc: 'Track revenue, refunds, and subscriptions in real time.' },
  { icon: Clock, title: 'Fast onboarding', desc: 'Start accepting payments in minutes with automatic KYC.' },
  { icon: Globe, title: 'Global coverage', desc: 'Process payments in 135+ currencies with local methods.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Everything you need to move money
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-slate-300"
          >
            Built for fintechs, platforms, and ambitious teams.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-left shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 text-white ring-1 ring-white/15 shadow-md">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
