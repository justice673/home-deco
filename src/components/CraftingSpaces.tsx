"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';

type Slide = {
  image: string;
  alt: string;
  name: string;
  role: string;
  quote: string;
};

const slides: Slide[] = [
  {
    image: '/images/image.jpeg',
    alt: 'Modern living room with warm lighting and contemporary decor',
    name: 'Sneha Jain',
    role: 'Homeowner',
    quote:
      'The team completely transformed our 3BHK apartment into a warm, modern home. Every corner now feels intentional and personal to us. They truly understood our lifestyle before designing — that made all the difference.',
  },
  {
    image: '/images/section1.jpeg',
    alt: 'Luxury bedroom interior with neutral tones and layered textures',
    name: 'Rahul & Mira Patel',
    role: 'Boutique Hotel Owners',
    quote:
      'Their approach to layering textures and lighting elevated our guest suites to a premium experience. Guests constantly compliment the ambience and story behind each space. It has boosted our bookings immensely.',
  },
  {
    image: '/images/section2.jpeg',
    alt: 'Open office space with collaborative seating and natural elements',
    name: 'Aarav Menon',
    role: 'Startup Founder',
    quote:
      'They crafted an office that inspires creativity while staying incredibly functional. The biophilic touches and thoughtful zoning keep our team energised throughout the day.',
  },
];

const CraftingSpaces = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length;

  const currentSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % totalSlides);
  };

  return (
    <section className="w-full py-24 bg-[#f7f5f2] overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* Heading with navigation arrows */}
        <div className="flex justify-between items-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-800 font-caveat">
        Crafting <span className="text-[#a47c5c]">Spaces</span>
      </h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#a47c5c] text-[#a47c5c] flex items-center justify-center hover:bg-[#a47c5c] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#a47c5c] text-[#a47c5c] flex items-center justify-center hover:bg-[#a47c5c] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Card Layout */}
        <div className="relative flex items-center justify-start">
          {/* Brown Panel */}
          <div className="w-full bg-[#a47c5c] h-[340px] mt-24" />

          {/* Image Card */}
          <div className="absolute top-0 left-24 w-[380px] h-[520px] bg-white shadow-2xl rounded-md overflow-hidden flex items-center justify-center transition-all duration-500">
            <Image
              key={currentSlide.image}
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              className="object-cover"
              priority={activeIndex === 0}
            />
          </div>

          {/* Text Content */}
          <div className="absolute right-16 top-1/2 -translate-y-[10%] max-w-[800px] text-white px-10 transition-opacity duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{currentSlide.name}</h3>
            <span className="text-base mb-4 block opacity-80">{currentSlide.role}</span>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">{currentSlide.quote}</p>
            <div className="mt-6 flex gap-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span>—</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingSpaces;
