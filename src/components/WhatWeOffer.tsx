import Image from 'next/image';

const WhatWeOffer = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* Header with subtitle */}
        <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-800 font-caveat">What We <span className="text-[#a47c5c]">Offer</span></h2>
          <p className="text-lg text-gray-600 max-w-xs text-right">
            Tailored Design Solutions For Every Space, From Concept To Completion.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left large card */}
          <div className="relative group h-[700px] lg:col-span-3 overflow-hidden">
            <Image
              src="/images/real-estate.jpg"
              alt="Residential Interiors"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-3">Residential Interiors</h3>
              <p className="text-lg text-white/90">We turn houses into dream homes</p>
            </div>
            {/* Share icon */}
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>

          {/* Right column with two cards */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Top right card */}
            <div className="relative group h-[335px] overflow-hidden">
              <Image
                src="/images/right.jpeg"
                alt="Styling Consultant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold">Styling Consultant</h3>
              </div>
              {/* Share icon */}
              <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>

            {/* Bottom right card */}
            <div className="relative group h-[335px] overflow-hidden">
              <Image
                src="/images/left.jpg"
                alt="Commercial Spaces"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold">Commercial Spaces</h3>
              </div>
              {/* Share icon */}
              <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
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
