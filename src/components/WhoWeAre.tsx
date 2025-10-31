import Image from 'next/image';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Of Experience' },
  { value: '12', label: 'Awards And Recognition' },
  { value: '98%', label: 'Client Satisfaction' },
];

const WhoWeAre = () => (
  <section className="w-full py-24 bg-[#f7f5f2]">
    <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch px-6 lg:px-12">
      
      {/* Stats Box */}
      <div className="bg-[#a47c5c] w-full lg:w-[360px] p-10 grid grid-cols-2 gap-10 text-white mb-10 lg:mb-0 lg:mr-10">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content + Image Wrapper */}
      <div className="flex items-center relative w-full">
        
        {/* Content Section */}
        <div className="relative flex-1 bg-[#f3ece3] px-16 py-14 lg:py-20 rounded-l-none rounded-r-3xl pr-[280px]">
          {/* Curved right edge */}
          <div className="absolute right-0 top-0 h-full w-[220px] bg-[#f7f5f2] rounded-l-full"></div>

          <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-800 font-caveat">
        Who We <span className="text-[#a47c5c]">Are</span>
      </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-5">
              We Believe Every Space Tells A Story. At <span className="font-caveat font-medium">HomeDeco</span>, 
              We Craft Modern, Minimal, And Timeless Interiors.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              That Blend Aesthetics With Functionality. From Cozy Homes To Dynamic Commercial Spaces, 
              Our Designs Reflect Your Personality While Maximizing Comfort And Utility.
            </p>
          </div>
        </div>

        {/* Image Section — touching content directly */}
        <div className="relative w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-full -ml-[220px] z-20">
          <Image
            src="/images/we-are.jpg"
            alt="Our team at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 380px, 420px"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
