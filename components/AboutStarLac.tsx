'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutImage_Prim from "../assets/about_img1.jpg";
import AboutImage_Sec from "../assets/about_img2.jpg";

export default function AboutStarLac() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative w-fit mx-auto md:mx-0">
          {/* Back Image (Top Right) */}
          <Image
            src={AboutImage_Sec}
            alt="Professional woman"
            width={384} // 96 * 4 = 384 (md:w-96)
            height={384} // 96 * 4 = 384 (md:h-96)
            className="w-72 h-80 md:h-96 md:w-96 rounded-lg object-cover absolute top-0 left-48 md:left-56 -translate-y-8 z-0 grayscale"
            placeholder="blur" // Optional: adds blur placeholder while loading
          />

          {/* Front Image (Bottom Left, Smaller) */}
          <Image
            src={AboutImage_Prim}
            alt="Team working"
            width={288} // 72 * 4 = 288 (md:w-72)
            height={288} // 72 * 4 = 288 (calculated based on aspect ratio)
            className="w-60 md:w-72 rounded-lg object-cover relative z-10 grayscale mt-3"
            placeholder="blur" // Optional: adds blur placeholder while loading
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              ABOUT STAR LAC
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to know about
            <br />
            <span className="text-orange-500">Star Lac</span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            <span className="text-orange-500">At Star Lac Paints</span>, we
            believe every space deserves a perfect finish. With a passion for
            quality and innovation, we provide paints and coatings that combine
            durability, vibrant color, and smooth application.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-none">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}