import Image from 'next/image';

const WhatWeOffer = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header with subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8 justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 font-caveat">
            What We <span className="text-[#a47c5c]">Offer</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-sm sm:text-right">
            Tailored Design Solutions For Every Space, From Concept To Completion.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Left large card */}
          <div className="relative group min-h-[340px] sm:min-h-[420px] md:min-h-[520px] lg:h-[700px] lg:col-span-3 overflow-hidden rounded-3xl">
            <Image
              src="/images/real-estate.jpg"
              alt="Residential Interiors"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:from-black/80 group-hover:via-black/25" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white max-w-xs sm:max-w-sm">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Residential Interiors</h3>
              <p className="text-base sm:text-lg text-white/90">We turn houses into dream homes</p>
            </div>
            {/* Share icon */}
            <button
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Share Residential Interiors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>

          {/* Right column with two cards */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:col-span-2">
            {/* Top right card */}
            <div className="relative group min-h-[220px] sm:min-h-[260px] lg:h-[335px] overflow-hidden rounded-3xl">
              <Image
                src="/images/right.jpeg"
                alt="Styling Consultant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-opacity group-hover:from-black/80" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">Styling Consultant</h3>
              </div>
              {/* Share icon */}
              <button
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Share Styling Consultant"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>

            {/* Bottom right card */}
            <div className="relative group min-h-[220px] sm:min-h-[260px] lg:h-[335px] overflow-hidden rounded-3xl">
              <Image
                src="/images/left.jpg"
                alt="Commercial Spaces"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-opacity group-hover:from-black/80" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">Commercial Spaces</h3>
              </div>
              {/* Share icon */}
              <button
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Share Commercial Spaces"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
