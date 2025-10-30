'use client'

import Image from "next/image";

// Define TypeScript interface for InspirationImage
interface InspirationImage {
  url: string;
  span: string;
}

// Inspiration images data array with TypeScript type
const inspirationImages: InspirationImage[] = [
  { url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&h=500&fit=crop", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=400&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=500&fit=crop", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=300&h=300&fit=crop", span: "" },
  { url: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=400&h=300&fit=crop", span: "" },
];

export default function GetInspired() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          #Get Inspired
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {inspirationImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.url}
                alt={`Inspiration ${idx + 1}`}
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}