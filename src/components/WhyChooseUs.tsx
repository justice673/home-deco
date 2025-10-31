import Image from 'next/image';

const WhyChooseUs = () => (
  <section className="w-full py-24 bg-[#f7f5f2]">
    <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
      {/* Section Heading with description */}
      <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-800 font-caveat">
        Why <span className="text-[#a47c5c]">Choose Us</span>
      </h2>
        <p className="text-lg text-gray-600 max-w-[420px]">
          With a balance of creativity, strategy and flawless execution, we turn spaces into stories.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-6">
        {/* Left column */}
        <div className="col-span-3 space-y-6">
          {/* Top cards row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative overflow-hidden p-8 h-[250px] shadow-lg shadow-[#a47c5c]/20 bg-gradient-to-br from-[#a47c5c] via-[#b88c64] to-[#8c5d36]">
              <div className="absolute -top-10 -left-12 w-52 h-52 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#f4d7b2]/20 blur-3xl" />
              <div className="relative z-10 h-full flex flex-col justify-center text-white text-center space-y-3">
                <h3 className="text-xl font-semibold tracking-wide">On-Time, On-Budget Delivery</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  We value your time and investment — transparent timelines and no hidden surprises.
                </p>
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden p-[1px] bg-gradient-to-br from-white via-[#f3ebdf] to-[#e5d4bc] shadow-lg shadow-neutral-200/60">
              <div className="h-full w-full bg-white/80 backdrop-blur-sm flex flex-col justify-center px-10 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Thoughtful Design Approach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every space we design begins with understanding your lifestyle, needs, and vision.
                </p>
              </div>
            </div>
          </div>

          {/* Image card */}
          <div className="relative overflow-hidden h-[300px] shadow-xl">
            <Image
              src="/images/images.jpeg"
              alt="Sustainable Design"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 text-white max-w-[420px]">
              <h3 className="text-xl font-semibold mb-3">Sustainable Design Choices</h3>
              <p className="text-sm text-white/85 leading-relaxed">
                We prioritise eco-friendly materials, mindful sourcing, and responsible design decisions throughout every project.
              </p>
            </div>
          </div>
        </div>

        {/* Right column - gradient card */}
        <div className="relative col-span-1 h-full min-h-[574px] bg-gradient-to-br from-[#3d2516] via-[#5b3520] to-[#1c120b] p-[1px] shadow-2xl shadow-[#4c2c19]/40">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="relative h-full w-full bg-gradient-to-b from-[#4d2c19]/80 via-[#4a2a17]/40 to-[#120a05]/80 px-10 pb-12 pt-16 flex flex-col justify-end text-white space-y-3">
            <div className="absolute -top-24 right-8 w-56 h-56 rounded-full bg-[#f2d6b7]/10 blur-3xl" />
            <h3 className="text-2xl font-semibold">Long-Lasting Value</h3>
            <p className="text-sm text-white/85 leading-relaxed">
              Designs that age gracefully, complement evolving lifestyles, and stay relevant for years to come.
            </p>
            <div className="pt-6 text-sm uppercase tracking-[0.35em] text-white/50">Premium finishes · Tailored maintenance guides</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
