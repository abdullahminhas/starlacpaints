'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">
              Join Our Club, Get 15% Off For Your Birthday
            </h3>
            <div className="relative mb-4">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent border-white text-white placeholder:text-gray-400 pr-12"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 bg-transparent hover:bg-white/10"
              >
                →
              </Button>
            </div>
            <label className="flex items-start gap-2 text-xs text-gray-400">
              <input type="checkbox" className="mt-1" />
              <span>
                By Submitting your email, you agree to receive advertising emails from Modimal.
              </span>
            </label>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <button className="hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </button>
              <button className="hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </button>
              <button className="hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* About Star Lac */}
          <div>
            <h4 className="font-semibold mb-4">About Star Lac</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contracters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DEsigners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retailers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Join Up */}
          <div>
            <h4 className="font-semibold mb-4">Join Up</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Star Lac Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visit Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2025 Star Lac. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}