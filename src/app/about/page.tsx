import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - HomeDeco',
  description: 'Learn about HomeDeco - crafting modern, minimal, and timeless interiors that blend aesthetics with functionality',
};

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Of Experience' },
  { value: '12', label: 'Awards And Recognition' },
  { value: '98%', label: 'Client Satisfaction' },
];

const values = [
  {
    title: 'Creativity & Innovation',
    description: 'We push boundaries and explore new design possibilities while respecting timeless principles.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your vision is our starting point. We listen, understand, and translate your needs into beautiful realities.',
  },
  {
    title: 'Quality & Craftsmanship',
    description: 'We partner with skilled artisans and use premium materials to ensure lasting beauty and functionality.',
  },
  {
    title: 'Sustainability',
    description: 'We prioritize eco-friendly materials and responsible design decisions for a better future.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/we-are.jpg"
            alt="Our team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-caveat mb-6">
              Who We <span className="text-[#a47c5c]">Are</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              We believe every space tells a story. At HomeDeco, we craft modern, minimal, and timeless interiors that blend aesthetics with functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/we-are.jpg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat">
                Our <span className="text-[#a47c5c]">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a passion for transforming spaces into meaningful environments, HomeDeco has been at the forefront of interior design for over a decade. We started with a simple belief: every space should reflect the people who inhabit it.
                </p>
                <p>
                  From cozy homes to dynamic commercial spaces, our designs reflect your personality while maximizing comfort and utility. We combine creative vision with practical expertise to deliver spaces that are not just beautiful, but truly livable.
                </p>
                <p>
                  Our team of experienced designers, architects, and project managers work collaboratively to ensure every project exceeds expectations. We take pride in our attention to detail, commitment to quality, and dedication to bringing your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="bg-[#a47c5c] rounded-3xl shadow-xl px-8 py-12 sm:px-12 sm:py-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-white">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm sm:text-base opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat mb-4">
              Our <span className="text-[#a47c5c]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#f7f5f2] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat">
              Let's Work <span className="text-[#a47c5c]">Together</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your space? Get in touch with us today and let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}


