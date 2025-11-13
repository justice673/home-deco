import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#f7f5f2]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 font-caveat mb-6">
              Blog Post Not <span className="text-[#a47c5c]">Found</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-[#a47c5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6642] transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}

