import Image from 'next/image';

const CompletedProjects = () => {
  const topImages = [
    {
      src: '/images/section.avif',
      alt: 'Modern interior design project'
    },
    {
      src: '/images/section1.jpeg',
      alt: 'Luxury home interior'
    },
    {
      src: '/images/section2.jpeg',
      alt: 'Contemporary living space'
    }
  ];

  const bottomImages = [
    {
      src: '/images/real-estate.jpg',
      alt: 'Residential interior project'
    },
    {
      src: '/images/right.jpeg',
      alt: 'Styling consultation project'
    },
    {
      src: '/images/left.jpg',
      alt: 'Commercial space design'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#f7f5f2]">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 font-caveat">
            Our Completed <span className="text-[#a47c5c]">Projects</span>
          </h2>
        </div>

        {/* Top row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-[300px] overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />
              
              {/* View Project Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors">
                  View Project
                </button>
              </div>

              {/* Share icon */}
              <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-[300px] overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />
              
              {/* View Project Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors">
                  View Project
                </button>
              </div>

              {/* Share icon */}
              <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
