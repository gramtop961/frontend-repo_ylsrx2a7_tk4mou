import { useState } from 'react'
import { Menu, X, CreditCard, Phone, Languages } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2 text-white font-semibold">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
                <CreditCard className="h-5 w-5" />
              </div>
              MoneyKey
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 transition hover:bg-white/15">
                <Languages className="h-4 w-4" />
                HE
              </button>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:opacity-95">
                <Phone className="h-4 w-4" />
                Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <div className="flex flex-col gap-3">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 transition hover:bg-white/15">
                  <Languages className="h-4 w-4" />
                  HE
                </button>
                <a href="#cta" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:opacity-95">
                  <Phone className="h-4 w-4" />
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
