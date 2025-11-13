export default function CTA() {
  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to level up your padel?</h3>
          <p className="text-teal-100 mt-1">Book an intro session and get a personalized plan in 24 hours.</p>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-teal-900 px-5 py-3 font-semibold shadow hover:bg-teal-50">
          Get started
        </a>
      </div>
    </section>
  );
}
