import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Blogs - HomeDeco',
  description: 'Interior design tips, trends, and inspiration from HomeDeco',
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/section1.jpeg"
            alt="Design blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-caveat mb-6">
              Design <span className="text-[#a47c5c]">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Explore design tips, trends, and inspiration. Learn from our experts and discover how to transform your space.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#a47c5c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a47c5c] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#a47c5c] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-caveat">
              Stay <span className="text-[#a47c5c]">Updated</span>
            </h2>
            <p className="text-lg text-gray-600">
              Subscribe to our newsletter for the latest design tips, trends, and project updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#a47c5c]"
              />
              <button
                type="submit"
                className="bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}


