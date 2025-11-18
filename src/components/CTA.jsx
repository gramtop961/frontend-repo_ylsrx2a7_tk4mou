import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/10 via-blue-600/10 to-purple-600/10 p-8 ring-1 ring-white/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-3 items-center">
            <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-white">Ready to unlock growth?</motion.h3>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-slate-200">Speak with our team for a tailored payments plan.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex gap-3">
              <a href="#" className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/20 transition hover:opacity-95">Book a demo</a>
              <a href="#" className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/15">Contact sales</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
