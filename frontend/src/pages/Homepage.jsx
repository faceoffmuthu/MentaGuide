import React, { useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import VerticalsSection from '../components/VerticalsSection';
import TrafficSourcesSection from '../components/TrafficSourcesSection';
import AdvertisersSection from '../components/AdvertisersSection';
import NumbersSection from '../components/NumbersSection';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Shared/Navbar';

const Homepage = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showHeroLogo, setShowHeroLogo] = useState(true);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop, clientHeight } = containerRef.current;
        const heroHeight = containerRef.current.firstElementChild?.clientHeight || clientHeight;
        setShowHeroLogo(scrollTop < heroHeight - 1);

        // Add small buffer to perfectly snap before updating dot index
        const scrollIndex = Math.round(scrollTop / clientHeight);
        if (scrollIndex !== activeIndex && scrollIndex >= 0 && scrollIndex < 9) {
            setActiveIndex(scrollIndex);
        }
    };

    const scrollTo = (index) => {
        if (!containerRef.current) return;
        containerRef.current.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative font-sans text-white h-screen w-full overflow-hidden">
            {/* Sticky Overlays */}
            {/* Global Navigation Shell */}
            <Navbar activeIndex={activeIndex} showHeroLogo={showHeroLogo} />

            {/* Pagination Dots Fixed Corner (Kept in Homepage for scroll context) */}
            <div className="fixed bottom-3 left-4 md:bottom-5 md:left-6 lg:bottom-6 lg:left-8 flex items-center gap-2 md:gap-3 z-50 pointer-events-auto">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`rounded-full transition-colors focus:outline-none pointer-events-auto ${activeIndex === idx
                            ? 'w-2 md:w-2.5 h-2 md:h-2.5 bg-[#a4d64f]'
                            : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-500 hover:bg-[#a4d64f]'
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="relative z-0 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[#0a0a0a]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                <div className="w-full h-screen snap-start overflow-hidden relative"><HeroSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><VisionSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><VerticalsSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><TrafficSourcesSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><AdvertisersSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><ProcessSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><NumbersSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><TeamSection /></div>
                <div className="w-full h-screen snap-start overflow-hidden relative"><ContactSection /></div>
            </div>
        </div>
    );
};

export default Homepage;
