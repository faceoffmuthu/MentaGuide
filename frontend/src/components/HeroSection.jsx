import React from 'react';
import { homepagebg1 } from '../assets/images';

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full relative bg-white font-sans overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-[length:150%] md:bg-[length:85%] lg:bg-[length:70%] xl:bg-[length:60%] bg-right-bottom"
        style={{ backgroundImage: `url(${homepagebg1})` }}
      />

      {/* Main Content */}
      <main className="absolute top-1/2 left-0 md:left-32 lg:left-48 xl:left-56 max-w-2xl transform -translate-y-1/2 w-full px-8 md:px-0 z-10">
        <h1 className="text-[2.75rem] md:text-6xl lg:text-[3.5rem] font-gilroy font-bold text-[#2d2f31] leading-[1.1] mb-6 tracking-tight">
          Your gateway to<br />
          <span className="text-[#a4d64f]"> big global</span> orders
        </h1>
        
        <p className="text-[#5c5c5c] text-sm md:text-base lg:text-[1.05rem] max-w-lg lg:max-w-xl leading-relaxed mb-10 md:mb-16 font-bold font-gilroy-light">
          We take the stress out of export certifications and paperwork, making your factory 100% audit-ready for international buyers.
        </p>
        
        {/* <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm md:text-[0.95rem] font-bold text-[#444648]">
          <a href="#" className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Login</a>
          <a href="#" className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Advertiser Signup</a>
          <a href="#" className="font-gilroy hover:text-[#a4d64f] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#a4d64f] after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left pt-1 pb-1">Affiliate Signup</a>
        </div> */}

        {/* CTA buttons */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center mt-8 md:mt-10">

         
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
