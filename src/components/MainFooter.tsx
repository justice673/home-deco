import Image from 'next/image';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className="w-full bg-white py-16">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            <h1 className="font-caveat text-3xl font-bold text-gray-900">HomeDeco</h1>
            <p className="text-gray-600">
              Featured Design User Interface Every Story.
              Space Them Convert To Components.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">How We Work</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">AI Creation And Integration</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Full-stack Applications</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Products Training Board</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link href="#" className="bg-[#f7f5f2] p-3 rounded-lg hover:bg-[#a47c5c]/10 transition-colors">
                <Image src="/file.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="bg-[#f7f5f2] p-3 rounded-lg hover:bg-[#a47c5c]/10 transition-colors">
                <Image src="/globe.svg" alt="Twitter" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
