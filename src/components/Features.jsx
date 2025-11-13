import { Target, Users, LineChart, Clock, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Technique First",
    desc: "Biomechanics-focused drills to build reliable shots and footwork.",
    icon: Target,
  },
  {
    title: "Tactical Smarts",
    desc: "Pattern recognition and point construction for winning decisions.",
    icon: LineChart,
  },
  {
    title: "Flexible Formats",
    desc: "Private, pairs, and group sessions that fit your schedule.",
    icon: Users,
  },
  {
    title: "Video Analysis",
    desc: "High-speed capture and breakdowns to accelerate learning.",
    icon: Sparkles,
  },
  {
    title: "Progress Tracking",
    desc: "Session notes and KPIs to keep improvements measurable.",
    icon: Clock,
  },
  {
    title: "Injury-Safe Training",
    desc: "Warm-ups and load management built into every program.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Programs that build complete players</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Structured sessions for fundamentals, match play IQ, and athletic performance.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
