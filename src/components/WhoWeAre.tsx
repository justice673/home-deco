import Image from 'next/image';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Of Experience' },
  { value: '12', label: 'Awards And Recognition' },
  { value: '98%', label: 'Client Satisfaction' },
];

const WhoWeAre = () => (
  <section className="w-full py-24 bg-[#f7f5f2]">
    <div className="max-w-[1700px] mx-auto flex flex-col gap-12 xl:gap-16 lg:flex-row items-center lg:items-stretch px-6 md:px-10 lg:px-12">
      
      {/* Stats Box */}
      <div className="bg-[#a47c5c] w-full lg:w-[360px] px-8 py-10 sm:px-10 rounded-3xl shadow-xl grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-10 text-white">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content + Image Wrapper */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch relative w-full gap-10 lg:gap-0">
        
        {/* Content Section */}
        <div className="relative flex-1 bg-[#f3ece3] rounded-3xl lg:rounded-l-none lg:rounded-r-[48px] px-6 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-20 pr-0 lg:pr-[280px] overflow-hidden">
          {/* Curved right edge */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-[220px] bg-[#f7f5f2] rounded-l-full"></div>

          <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-800 font-caveat">
        Who We <span className="text-[#a47c5c]">Are</span>
      </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-5">
              We Believe Every Space Tells A Story. At <span className="font-caveat font-medium">HomeDeco</span>, 
              We Craft Modern, Minimal, And Timeless Interiors.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              That Blend Aesthetics With Functionality. From Cozy Homes To Dynamic Commercial Spaces, 
              Our Designs Reflect Your Personality While Maximizing Comfort And Utility.
            </p>
          </div>
        </div>

        {/* Image Section — touching content directly */}
        <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none h-[260px] sm:h-[320px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-full lg:-ml-[220px] z-20 shadow-xl">
          <Image
            src="/images/we-are.jpg"
            alt="Our team at work"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 420px"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
