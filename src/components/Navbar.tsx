import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center pt-8 pb-2 pointer-events-none z-20">
      <nav className="flex items-center justify-between w-[90vw] max-w-5xl bg-white rounded-2xl shadow-lg px-8 py-4 pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800 font-caveat">HomeDeco</span>
        </div>
        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium">Projects</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900 font-medium">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </div>
        </div>
        {/* Shop Now Button */}
        <div>
          <Link 
            href="/shop" 
            className="bg-[#A67C52] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#8B6642] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
