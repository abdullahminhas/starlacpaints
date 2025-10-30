'use client'

import { useState } from "react";
import { Twitter, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maverick",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    title: "Loved the product!",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    title: "Excellent quality and service!",
    quote: "The paint quality is exceptional and the color selection is perfect for modern interior designs. My clients are always happy with the results."
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    title: "Transformed my home!",
    quote: "Used Star Lac paints for my entire house renovation. The colors are vibrant and the finish is smooth. Highly recommended!"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const handleSocialClick = (platform: string): void => {
    console.log(`Clicked ${platform} social icon for ${testimonials[currentTestimonial].name}`);
  };

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-wider text-center mb-4">
          TESTIMONIAL
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Client Success Stories
        </h2>

        {/* Testimonial Card */}
        <div className="bg-black rounded-3xl p-12 relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={200}
                height={200}
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold text-center mt-4">{testimonial.name}</h3>
              <p className="text-sm text-gray-400 text-center">{testimonial.role}</p>
              
              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-4">
                <button 
                  onClick={() => handleSocialClick('twitter')}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleSocialClick('facebook')}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <div className="text-6xl text-gray-600 mb-4">"</div>
              <h4 className="text-2xl font-bold mb-4">{testimonial.title}</h4>
              <p className="text-gray-300 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}