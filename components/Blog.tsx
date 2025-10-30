'use client'

import Image from "next/image";

// Define TypeScript interface for Blog
interface Blog {
  image: string;
  title: string;
}

// Blog data array with TypeScript type
const blogs: Blog[] = [
  {
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=400&fit=crop",
    title: "10 Expert Tips for Painting Interior Walls Like a Pro",
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    title: "Easy DIY Paint Projects to Transform Your Home on a Budget",
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    title: "How to Choose the Best Exterior Paint for All Weather Conditions",
  },
  {
    image: "https://images.unsplash.com/photo-1621905195952-0a5d1e12d8e3?w=600&h=400&fit=crop",
    title: "Top Color Trends for Modern Homes in 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Read Our Blog
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Your guide to smarter painting, fresh styles, and creative ideas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}