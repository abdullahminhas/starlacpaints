'use client'

import { Play } from "lucide-react";
import Image from "next/image";

// Tutorial images array
const tutorialImages: string[] = [
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=400&fit=crop",
];

export default function DIYTutorials() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          DIY Tutorials
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Video */}
          <div className="md:col-span-1 relative bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"
              alt="DIY Tutorial"
              width={800}
              height={600}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold mb-8">DIY Tutorials!</h3>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tutorialImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Tutorial ${idx + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}