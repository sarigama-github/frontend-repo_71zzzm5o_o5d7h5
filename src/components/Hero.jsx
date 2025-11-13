export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">Personalized Padel Coaching</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Master the court with a proven training system
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            One-on-one and group coaching designed for all levels. Develop technique, strategy, and on-court IQ with data-driven sessions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700">
              Book your first session
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 text-slate-700 px-5 py-3 font-semibold hover:bg-white">
              Explore programs
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-slate-900">250+</div>
              <div className="text-slate-500">Athletes coached</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900">4.9/5</div>
              <div className="text-slate-500">Average rating</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900">8 yrs</div>
              <div className="text-slate-500">Coaching experience</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-200/40 blur-3xl rounded-full" />
          <img src="https://images.unsplash.com/photo-1716041040048-228dbae7b6ba?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWRlbCUyMHRyYWluaW5nfGVufDB8MHx8fDE3NjMwNDg4MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Padel training" className="relative rounded-2xl shadow-xl border border-emerald-100" />
        </div>
      </div>
    </section>
  );
}
