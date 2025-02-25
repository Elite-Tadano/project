"use client";

import { Coffee } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-semibold">Coffe Shop</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/#home" className="text-black hover:text-amber-700">
                Home
              </a>
              <a href="/menu" className="text-black hover:text-amber-700">
                Menu
              </a>
              <a href="/#about" className="text-black hover:text-amber-700">
                About
              </a>
              <a href="/#contact" className="text-black hover:text-amber-700">
                Contact
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/#home"
                className="block px-3 py-2 text-black hover:text-amber-700"
              >
                Home
              </a>
              <a
                href="/menu"
                className="block px-3 py-2 text-black hover:text-amber-700"
              >
                Menu
              </a>
              <a
                href="/#about"
                className="block px-3 py-2 text-black hover:text-amber-700"
              >
                About
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-black hover:text-amber-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=800&fit=crop"
            alt="Coffee shop cover"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 animate-fade-in">
              <h1 className="text-5xl font-bold tracking-tight">Our Menu</h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto px-4">
                Discover our carefully curated selection of artisanal coffees
                and freshly baked pastries
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
