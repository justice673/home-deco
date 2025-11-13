"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-center pt-6 sm:pt-8 pb-2 pointer-events-none z-20">
      <nav className="relative flex items-center justify-between w-[92vw] max-w-5xl bg-white/80 backdrop-blur-md shadow-lg px-6 sm:px-8 py-4 rounded-2xl pointer-events-auto border border-white/40">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/home.png"
            alt="HomeDeco Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 font-caveat hover:text-[#a47c5c] transition-colors cursor-pointer">HomeDeco</span>
        </Link>

        {/* Desktop Links */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-[#A67C52] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#8B6642] transition-colors"
          >
            Contact Us
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full mt-4 md:hidden transition-transform duration-300 ease-out origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100 pointer-events-auto translate-y-0' : 'scale-y-0 opacity-0 pointer-events-none -translate-y-3'
          }`}
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={`mobile-${href}`}
                  href={href}
                  className="px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="px-4 pb-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex justify-center bg-[#A67C52] text-white px-5 py-3 rounded-xl font-semibold shadow hover:bg-[#8B6642] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
