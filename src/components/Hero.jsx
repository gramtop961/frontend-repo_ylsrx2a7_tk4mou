import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay top to bottom to ensure contrast, allow interaction with scene below */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
            >
              Smart payments for modern businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-xl"
            >
              Accept cards in minutes, track revenue in real‑time, and grow with advanced analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/20 transition hover:opacity-95">
                Get started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/15">
                Learn more
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle glow accents */}
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
    </section>
  )
}
