import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Services - HomeDeco',
  description: 'Our interior design services including residential interiors, commercial spaces, and styling consultation',
};

const services = [
  {
    title: 'Residential Interiors',
    description: 'We turn houses into dream homes with personalized designs that reflect your lifestyle and preferences. From cozy apartments to luxury villas, we create spaces that are both beautiful and functional.',
    image: '/images/real-estate.jpg',
    features: [
      'Space Planning & Layout Design',
      'Color Scheme & Material Selection',
      'Furniture & Décor Curation',
      'Lighting Design',
      'Project Management',
    ],
  },
  {
    title: 'Commercial Spaces',
    description: 'Transform your business environment with designs that enhance productivity, reflect your brand identity, and create memorable experiences for clients and employees.',
    image: '/images/left.jpg',
    features: [
      'Office & Workspace Design',
      'Retail & Showroom Design',
      'Hospitality Interiors',
      'Brand Identity Integration',
      'Ergonomic Solutions',
    ],
  },
  {
    title: 'Styling Consultant',
    description: 'Expert styling services to elevate your existing space. We help you refine your décor, select the perfect accessories, and create cohesive design stories throughout your home or office.',
    image: '/images/right.jpeg',
    features: [
      'Décor Consultation',
      'Accessory Selection',
      'Art & Artwork Curation',
      'Seasonal Styling',
      'Color & Texture Coordination',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/real-estate.jpg"
            alt="Interior design services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-caveat mb-6">
              Our <span className="text-[#a47c5c]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Tailored design solutions for every space, from concept to completion. We bring your vision to life with creativity, expertise, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col gap-12 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-[#a47c5c] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors mt-4"
                  >
                    Get Started
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
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
              Ready to Transform Your <span className="text-[#a47c5c]">Space?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss your project and bring your vision to life. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}


