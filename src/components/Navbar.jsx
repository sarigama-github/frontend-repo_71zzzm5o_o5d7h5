import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Coaching", href: "#coaching" },
    { label: "Programs", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black">PP</div>
            <span className="font-semibold text-slate-800">Padel Professor</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking" className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700 transition-colors">
              Book a Session
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-lg text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700">
                Book a Session
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
