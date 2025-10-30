import { Trophy, ShieldCheck, Truck, Headphones, LucideIcon } from "lucide-react";

// Define TypeScript interface for Feature
interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

// Features data array with TypeScript type
const features: Feature[] = [
  {
    icon: Trophy,
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-[#0a0a0a] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <feature.icon className="w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}