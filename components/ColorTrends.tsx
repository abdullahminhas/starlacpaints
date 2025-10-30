'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

// Define TypeScript interface for Slide
interface Slide {
  image: string;
  number: string;
  category: string;
  title: string;
}

// Slides data array with TypeScript type
const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    number: "02",
    category: "Living Room",
    title: "Modern White",
  },
  {
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&h=600&fit=crop",
    number: "03",
    category: "Kitchen",
    title: "Fresh Vibes",
  },
];

export default function ColorTrends() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              50+ Colors Trend in 2025
            </h2>
            <p className="text-gray-300 mb-8">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Explore More
            </Button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    idx === currentSlide ? "w-full" : "w-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <span className="text-2xl font-bold">{slide.number}</span>
                      <span className="text-sm">——</span>
                      <span className="text-sm">{slide.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {slide.title}
                    </h3>
                    <button className="flex items-center gap-2 text-orange-500 hover:gap-3 transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? "w-8 bg-orange-500" : "w-2 bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}