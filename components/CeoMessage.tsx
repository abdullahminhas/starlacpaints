'use client'

import Image from "next/image";
import CEOMessage_image from "../assets/ceo_img.jpg";

export default function CEOMessage() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* CEO Image */}
        <div>
          <Image
            src={CEOMessage_image}
            alt="CEO Haseeb Butt"
            width={600}
            height={600}
            className="w-full h-[600px] object-cover rounded-lg"
            placeholder="blur"
          />
        </div>

        {/* Message Content */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            "A Message from the CEO HASEEB BUTT"
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Since our founding in 2009 in Gujranwala, Punjab, Pakistan, Star Lac
              Paints has grown into an international brand trusted for quality,
              innovation, and reliability. Our mission is simple — to deliver paints and
              coatings that not only beautify spaces but also stand the test of time.
            </p>
            <p>
              With a strong global presence, we remain committed to excellence,
              sustainability, and customer trust, ensuring every product reflects the
              values that define us. Looking ahead, our vision is to strengthen our
              position as a class paint brand, recognized for setting new standards in
              the industry.
            </p>
            <p className="font-medium text-white">
              Star Lac Paints — coloring the world with excellence.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="https://images.unsplash.com/photo-1620843002805-05a08cb72f57?w=200&h=80&fit=crop"
              alt="Signature"
              width={200}
              height={80}
              className="h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}