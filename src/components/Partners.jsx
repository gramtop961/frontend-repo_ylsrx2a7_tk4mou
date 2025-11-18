export default function Partners() {
  const items = [
    'Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay', 'Bit', 'PayPal'
  ]
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400">שותפים ואמצעי תשלום נתמכים</p>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center">
          {items.map((name) => (
            <div key={name} className="h-12 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 flex items-center justify-center text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
