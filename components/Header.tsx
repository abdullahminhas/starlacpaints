'use client'

import { Search, User, Heart, ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <>
      <div className="bg-gray-900 text-white text-center py-2 text-sm">
        Enjoy Free Shipping On All Orders
      </div>
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">StarLac</span>
              <div className="text-sm text-orange-500">Paints</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Products</a>
            <a href="#" className="hover:text-orange-500 transition">Expert Help</a>
            <a href="#" className="hover:text-orange-500 transition">Architects & Designers</a>
            <a href="#" className="hover:text-orange-500 transition">Press</a>
            <a href="#" className="hover:text-orange-500 transition">About Us</a>
            <a href="#" className="text-orange-500 hover:text-orange-400 transition">Sale</a>
            <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hover:text-orange-500 transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-orange-500 transition">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-orange-500 transition">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-orange-500 transition">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};