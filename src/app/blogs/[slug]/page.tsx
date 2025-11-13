import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/data/blogPosts';
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

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  // Get posts for "You May Like" section
  const youMayLikePosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content Area */}
      <section className="pt-32 pb-12 sm:pt-40 lg:pt-48 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content Column (2/3 width) */}
            <div className="lg:col-span-2">
              {/* Back Link */}
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#a47c5c] hover:text-[#8B6642] mb-6 transition-colors font-caveat text-lg font-semibold group"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
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

              {/* Post Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-caveat mb-6">
                {post.title}
              </h1>

              {/* Featured Image */}
              <div className="relative w-full h-[400px] sm:h-[500px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{post.author.name}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                <span>•</span>
                <span>No Responses</span>
              </div>

              {/* Article Content */}
              <article className="blog-content mb-12">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Share Section */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex gap-3">
                  <button
                    className="w-10 h-10 rounded-full bg-[#f7f5f2] text-gray-700 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-[#f7f5f2] text-gray-700 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-[#f7f5f2] text-gray-700 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Column (1/3 width) */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Author Profile Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-[#a47c5c] flex items-center justify-center text-white text-3xl font-bold">
                      {post.author.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.author.role}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {post.author.name} is a passionate {post.category.toLowerCase()} expert, storyteller, and the creative force behind HomeDeco. With years of experience, {post.author.name.split(' ')[0]} helps transform spaces into beautiful, functional environments.
                  </p>
                  <div className="text-[#a47c5c] font-caveat text-lg mb-4">{post.author.name.split(' ')[post.author.name.split(' ').length - 1]}</div>
                  <div className="flex justify-center gap-3">
                    <button
                      className="w-8 h-8 rounded-full bg-[#f7f5f2] text-gray-600 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-[#f7f5f2] text-gray-600 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-[#f7f5f2] text-gray-600 hover:bg-[#a47c5c] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* You May Like Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">You May Like</h3>
                <div className="space-y-4">
                  {youMayLikePosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blogs/${relatedPost.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#a47c5c] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Promotional Content Block */}
              <div className="bg-gradient-to-br from-[#a47c5c] to-[#8B6642] rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Your Promotional Content</h3>
                <p className="text-sm text-white/90 mb-4">
                  Advertise your services, products, or special offers here.
                </p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded"></div>
                  <div className="w-12 h-12 bg-white/20 rounded"></div>
                  <div className="w-12 h-12 bg-white/20 rounded"></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Post</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {relatedPosts.slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blogs/${relatedPost.slug}`}
                className="group"
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a47c5c] transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MainFooter />
    </main>
  );
}
