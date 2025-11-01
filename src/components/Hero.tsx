import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Modern interior design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-44 pb-16 sm:pt-56 sm:pb-24 lg:pt-64 flex items-start md:items-center">
        <div className="max-w-3xl text-white space-y-5 sm:space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] md:leading-tight font-caveat">
            Designing Spaces,
            <br className="hidden sm:block" />
            <span className="inline md:block">Defining Lifestyles</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
            A modern admin panel built to save time and make content management effortless, crafted for teams who value both beauty and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Work
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/40 hover:bg-white/15 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
