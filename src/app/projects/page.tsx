import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import CompletedProjects from '@/components/CompletedProjects';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects - HomeDeco',
  description: 'Explore our completed interior design projects - residential, commercial, and styling projects',
};

const featuredProjects = [
  {
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    location: 'Mumbai, India',
    image: '/images/section.avif',
    description: 'A 3BHK apartment transformed into a warm, modern home with thoughtful design and personal touches.',
  },
  {
    title: 'Luxury Boutique Hotel',
    category: 'Commercial',
    location: 'Goa, India',
    image: '/images/section1.jpeg',
    description: 'Guest suites elevated with premium textures, lighting, and storytelling that boost guest experience.',
  },
  {
    title: 'Creative Startup Office',
    category: 'Commercial',
    location: 'Bangalore, India',
    image: '/images/section2.jpeg',
    description: 'An inspiring office space with biophilic design and thoughtful zoning for enhanced productivity.',
  },
  {
    title: 'Contemporary Family Home',
    category: 'Residential',
    location: 'Delhi, India',
    image: '/images/real-estate.jpg',
    description: 'A spacious family home designed for comfort, functionality, and timeless elegance.',
  },
  {
    title: 'Stylish Showroom',
    category: 'Commercial',
    location: 'Pune, India',
    image: '/images/right.jpeg',
    description: 'A retail space that seamlessly blends brand identity with customer experience.',
  },
  {
    title: 'Cozy Studio Apartment',
    category: 'Residential',
    location: 'Hyderabad, India',
    image: '/images/left.jpg',
    description: 'Maximizing space and style in a compact studio with smart storage solutions.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/section.avif"
            alt="Our projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-caveat mb-6">
              Our <span className="text-[#a47c5c]">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Explore our portfolio of completed projects. Each space tells a unique story of transformation, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[300px] sm:h-[350px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#a47c5c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-3">{project.location}</p>
                  <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Component */}
      <CompletedProjects />

      {/* CTA Section */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat">
              Start Your <span className="text-[#a47c5c]">Project</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your space? Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}


