export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Players see real results</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">From social players to tournament competitors, see what trainees are saying.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            quote: "The video feedback and tactical drills transformed my doubles game.",
            name: "Alex R.",
          }, {
            quote: "I went from beginner to playing matches confidently in 8 weeks!",
            name: "Priya K.",
          }, {
            quote: "Super clear coaching with measurable goals each session.",
            name: "Diego M.",
          }].map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
