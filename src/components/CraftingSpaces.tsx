"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';

type Slide = {
  image: string;
  alt: string;
  name: string;
  role: string;
  quote: string;
  date: string;
};

const slides: Slide[] = [
  {
    image: '/images/image.jpeg',
    alt: 'Modern living room with warm lighting and contemporary decor',
    name: 'Sneha Jain',
    role: 'Homeowner',
    quote:
      'The team completely transformed our 3BHK apartment into a warm, modern home. Every corner now feels intentional and personal to us. They truly understood our lifestyle before designing — that made all the difference.',
    date: '16/07/24',
  },
  {
    image: '/images/section1.jpeg',
    alt: 'Luxury bedroom interior with neutral tones and layered textures',
    name: 'Rahul & Mira Patel',
    role: 'Boutique Hotel Owners',
    quote:
      'Their approach to layering textures and lighting elevated our guest suites to a premium experience. Guests constantly compliment the ambience and story behind each space. It has boosted our bookings immensely.',
    date: '08/12/24',
  },
  {
    image: '/images/section2.jpeg',
    alt: 'Open office space with collaborative seating and natural elements',
    name: 'Aarav Menon',
    role: 'Startup Founder',
    quote:
      'They crafted an office that inspires creativity while staying incredibly functional. The biophilic touches and thoughtful zoning keep our team energised throughout the day.',
    date: '23/03/25',
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
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Heading with navigation arrows */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 font-caveat lg:mb-0">
            Crafting <span className="text-[#a47c5c]">Spaces</span>
          </h2>
          <div className="hidden lg:flex gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#a47c5c] text-[#a47c5c] flex items-center justify-center hover:bg-[#a47c5c] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#a47c5c] text-[#a47c5c] flex items-center justify-center hover:bg-[#a47c5c] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Experience */}
        <div className="lg:hidden">
          <div className="relative rounded-[36px] overflow-hidden h-[460px] sm:h-[520px]">
            <Image
              key={`mobile-${currentSlide.image}`}
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-white">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">Client Stories</span>
                <h3 className="text-2xl font-semibold mt-2">Testimonials</h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                  className="h-10 w-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                  className="h-10 w-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white/80 text-sm uppercase tracking-[0.35em]">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">—</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="-mt-16 space-y-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl px-5 py-6">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden">
                  <Image
                    src={currentSlide.image}
                    alt={`${currentSlide.name} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-gray-900">{currentSlide.name}</h4>
                    <span className="text-xs text-gray-400">{currentSlide.date}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a47c5c] mt-1">★★★★★</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">{currentSlide.quote}</p>
              <div className="mt-4 flex items-center justify-end text-sm text-[#a47c5c] font-medium">
                <span className="mr-2">View Story</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Experience */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-start">
            <div className="w-full bg-[#a47c5c] h-[340px] mt-24" />

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
      </div>
    </section>
  );
};

export default CraftingSpaces;
