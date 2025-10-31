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
      <div className="relative container mx-auto px-4 pt-48 sm:pt-56 lg:pt-64">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-caveat">
            Designing Spaces,
            <br />
            Defining Lifestyles
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            A Modern Admin Panel Built To Save Time And Make Content Management Effortless.
          </p>
          <Link 
            href="/work"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
