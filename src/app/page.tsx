import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeOffer from '@/components/WhatWeOffer';
import CompletedProjects from '@/components/CompletedProjects';
import CraftingSpaces from '@/components/CraftingSpaces';
import WhyChooseUs from '@/components/WhyChooseUs';
import Newsletter from '@/components/Newsletter';
import MainFooter from '@/components/MainFooter';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <CompletedProjects />
      <CraftingSpaces />
      <WhyChooseUs />
      <Newsletter />
      <MainFooter />
    </main>
  );
}
