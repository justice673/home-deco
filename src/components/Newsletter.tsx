import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer.webp"
          alt="Newsletter background"
          fill
          className="object-cover brightness-[0.3]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="absolute bottom-16 left-0 right-0 px-6 lg:px-12">
          <div className="flex items-end justify-between">
            {/* Get in Touch Text */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-white/80 text-lg">
                Submit your email address and we&apos;ll reach out to you for demo.
              </p>
            </div>

            {/* Email Input and Button */}
            <div className="flex flex-col items-end">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-[300px] px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-white/90 transition-colors whitespace-nowrap">
                  Explore Our Work
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                By submitting you agree to our Terms and Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
