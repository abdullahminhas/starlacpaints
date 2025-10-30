import { Palette, Store, TrendingUp, LucideIcon } from "lucide-react";

// Define TypeScript interface for Mission
interface Mission {
  icon: LucideIcon;
  title: string;
  color: string;
}

// Missions data array with TypeScript type
const missions: Mission[] = [
  {
    icon: Palette,
    title: "Quality you can see and feel",
    color: "text-purple-400",
  },
  {
    icon: Store,
    title: "Innovation that keeps us ahead",
    color: "text-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Trust that lasts as long as our paints",
    color: "text-blue-400",
  },
];

export default function OurMission() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Our mission
        </h2>
        <p className="text-center text-gray-400 mb-16">
          To help you bring your vision to life, one coat at a time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-8 rounded-lg text-center hover:bg-[#222] transition-colors"
            >
              <mission.icon className={`w-12 h-12 mx-auto mb-6 ${mission.color}`} />
              <h3 className="text-xl font-semibold">{mission.title}</h3>
              <div className={`w-16 h-1 ${mission.color.replace('text-', 'bg-')} mx-auto mt-4`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}