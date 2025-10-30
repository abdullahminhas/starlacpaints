'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";
import product_4 from "../assets/product_4.png";
import product_5 from "../assets/product_5.png";
import product_6 from "../assets/product_6.png";
import product_7 from "../assets/product_7.png";
import product_8 from "../assets/product_8.png";
import product_9 from "../assets/product_9.png";
import product_10 from "../assets/product_10.png";

// Define TypeScript interfaces
interface Product {
  name: string;
  category: string;
  image: any; // Using 'any' for image imports, can be more specific with StaticImageData
}

interface CategoryTabsProps {
  categories: string[];
}

// Product data array
const products: Product[] = [
  {
    name: "Weather Shield",
    category: "Interior",
    image: product_1,
  },
  {
    name: "Texture",
    category: "Exterior",
    image: product_2,
  },
  {
    name: "Wall Filling Acrylic Sheesha Putty",
    category: "Interior",
    image: product_3,
  },
  {
    name: "Gold Series Plastic Emulsion",
    category: "Interior",
    image: product_4,
  },
  {
    name: "Gold Series Matt Finish",
    category: "Interior",
    image: product_5,
  },
  {
    name: "Plastic Emulsion All Rounder",
    category: "Interior",
    image: product_6,
  },
  {
    name: "Aqua Water Matt",
    category: "Interior",
    image: product_7,
  },
  {
    name: "Water Shield",
    category: "Interior",
    image: product_8,
  },
  {
    name: "Plastic Emulsion All Rounder",
    category: "Interior",
    image: product_9,
  },
  {
    name: "Filling",
    category: "Interior",
    image: product_10,
  },
];

const categories: string[] = ["Interior", "Exterior", "Interior", "Interior", "Interior"];

// Category Tabs Component
function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <div className="flex justify-center gap-8 mb-16 flex-wrap">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`text-lg pb-2 transition-all ${
            idx === 0
              ? "text-white border-b-2 border-white font-medium"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// Product Card Component
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div key={index} className="text-center group cursor-pointer">
      <div className="bg-transparent rounded-2xl p-6 mb-4 transition-transform group-hover:scale-105">
        <Image
          src={product.image}
          alt={product.name}
          width={160} // Approximate for h-40
          height={160} // Approximate for h-40
          className="w-full h-40 object-contain"
          placeholder="blur"
        />
      </div>
      <h3 className="font-medium text-sm">{product.name}</h3>
    </div>
  );
}

export default function BestSellingProducts() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Best Selling Paints Products
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Buy premium quality paint products for your interior and exterior at economical prices. Book your orders Now!
        </p>

        {/* Category Tabs */}
        <CategoryTabs categories={categories} />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} index={idx} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 rounded-full text-lg transition-all"
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
}