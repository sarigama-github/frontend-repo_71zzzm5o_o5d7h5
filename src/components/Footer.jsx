export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black flex items-center justify-center">PP</div>
          <span>Padel Professor</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Padel Professor. All rights reserved.</p>
      </div>
    </footer>
  );
}
