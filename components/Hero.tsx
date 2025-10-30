import Image from "next/image";
import Hero_image from "../assets/hero_image.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-gray-100">
      <Image
        src={Hero_image}
        alt="Modern interior"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
    </section>
  );
}