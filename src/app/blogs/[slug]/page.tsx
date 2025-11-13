import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - HomeDeco',
    };
  }

  return {
    title: `${post.title} - HomeDeco Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="inline-block bg-[#a47c5c] text-white text-sm font-semibold px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-caveat mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-12">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Author Section */}
      <section className="py-16 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#a47c5c] flex items-center justify-center text-white text-2xl font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                <p className="text-gray-600 mb-4">{post.author.role}</p>
                <p className="text-gray-700 leading-relaxed">
                  {post.author.name} is an expert in {post.category.toLowerCase()} with years of experience helping clients create beautiful, functional spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts / Navigation */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#a47c5c] font-semibold hover:gap-3 transition-all"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Blog Posts
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Share this article:</span>
              <button
                className="w-10 h-10 rounded-full bg-[#f7f5f2] text-gray-700 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Share on social media"
              >
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}

