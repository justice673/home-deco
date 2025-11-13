import Image from 'next/image';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12 py-16">
        <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="space-y-6 max-w-xs">
            <h1 className="font-caveat text-3xl font-bold text-gray-900">HomeDeco</h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Featured design user interface every story. Space them convert to components that elevate everyday living.
            </p>
            <div className="flex gap-3">
              <span className="text-sm text-gray-500">hello@homedeco.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900 text-base">Quick Links</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link></li>
              <li><Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900 text-base">Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Residential Interiors</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Commercial Spaces</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Styling Consultant</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900 text-base">Resources</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Our Projects</Link></li>
              <li><Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Design Blog</Link></li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-6">
              <Link href="#" className="bg-[#f7f5f2] p-3 rounded-xl hover:bg-[#a47c5c]/10 transition-colors">
                <Image src="/file.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#" className="bg-[#f7f5f2] p-3 rounded-xl hover:bg-[#a47c5c]/10 transition-colors">
                <Image src="/globe.svg" alt="Website" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between text-xs sm:text-sm text-gray-500">
          <span>© {new Date().getFullYear()} HomeDeco. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-800 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
