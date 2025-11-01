import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer.webp"
          alt="Newsletter background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center justify-between">
          {/* Get in Touch Text */}
          <div className="max-w-2xl text-white space-y-4 text-left">
            <h2 className="text-4xl sm:text-5xl font-bold">Get in Touch</h2>
            <p className="text-base sm:text-lg text-white/80 max-w-lg">
              Submit your email address and we&apos;ll reach out to you for a personalised walkthrough of our latest projects.
            </p>
          </div>

          {/* Email Input and Button */}
          <div className="w-full max-w-xl">
            <form className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-6 py-4 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                Explore Our Work
              </button>
            </form>
            <p className="text-white/60 text-xs sm:text-sm mt-4">
              By submitting you agree to our Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
