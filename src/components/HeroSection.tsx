"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tag: "SAP FICO Staffing",
    headline: "Finance & Controlling",
    highlight: "Experts On Demand",
    sub: "We place specialist SAP FICO and CO consultants into enterprise transformation programmes across the globe.",
    cta1: { label: "Find a Consultant", href: "/contact" },
    cta2: { label: "View Open Roles", href: "/jobs" },
    bg: "from-[#e8f4fd] to-white",
    accent: "#1e6fd4",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&fit=crop",
    imageAlt: "SAP finance consultant working at desk",
  },
  {
    tag: "SAP S/4HANA Migration",
    headline: "S/4HANA Migration",
    highlight: "Done Right",
    sub: "Our certified S/4HANA consultants bring deep hands-on experience to greenfield, brownfield and selective data transition projects.",
    cta1: { label: "Talk to Us", href: "/contact" },
    cta2: { label: "Our Services", href: "/services" },
    bg: "from-[#f0f7ff] to-white",
    accent: "#0f2d5c",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&fit=crop",
    imageAlt: "Enterprise technology team in meeting",
  },
  {
    tag: "SAP HR & SuccessFactors",
    headline: "HR Transformation",
    highlight: "Powered by SAP",
    sub: "From SAP HCM to SuccessFactors cloud, we supply HR technology specialists who understand both the people and the platform.",
    cta1: { label: "Get In Touch", href: "/contact" },
    cta2: { label: "SAP HR Services", href: "/services/sap-hcm" },
    bg: "from-[#eaf5ff] to-white",
    accent: "#1e6fd4",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop",
    imageAlt: "HR team collaboration",
  },
  {
    tag: "SAP Logistics",
    headline: "Supply Chain",
    highlight: "Staffing at Scale",
    sub: "Need SAP MM, SD or WM expertise fast? We connect you with vetted logistics consultants ready to deploy.",
    cta1: { label: "Submit a Requirement", href: "/contact" },
    cta2: { label: "Browse Roles", href: "/jobs" },
    bg: "from-[#e8f4fd] to-white",
    accent: "#0f2d5c",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&fit=crop",
    imageAlt: "Supply chain and logistics operations",
  },
];

const wordVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] } },
  exit: { y: -30, opacity: 0, transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] } },
};

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`min-w-full bg-gradient-to-br ${slide.bg} relative`}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1e6fd4]/5 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0f2d5c]/5 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Left: text */}
                  <div>
                    <motion.div
                      key={`tag-${i}-${current}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={current === i ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e6fd4]/10 text-[#1e6fd4] text-sm font-medium mb-6"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e6fd4] inline-block" />
                      {slide.tag}
                    </motion.div>

                    <h1
                      className="text-5xl lg:text-6xl font-normal text-[#0f2d5c] leading-tight mb-4"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      <AnimatePresence mode="wait">
                        {current === i && (
                          <motion.span
                            key={`h1-${i}`}
                            variants={wordVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="block"
                          >
                            {slide.headline}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <AnimatePresence mode="wait">
                        {current === i && (
                          <motion.span
                            key={`h1b-${i}`}
                            variants={wordVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="block"
                            style={{ color: slide.accent }}
                          >
                            {slide.highlight}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </h1>

                    <motion.p
                      key={`sub-${i}-${current}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={current === i ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-lg text-[#4a6080] leading-relaxed mb-10 max-w-lg"
                    >
                      {slide.sub}
                    </motion.p>

                    <motion.div
                      key={`cta-${i}-${current}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={current === i ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        href={slide.cta1.href}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1e6fd4] text-white font-medium hover:bg-[#1a5fba] transition-colors shadow-md shadow-blue-200"
                      >
                        {slide.cta1.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={slide.cta2.href}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0f2d5c] text-[#0f2d5c] font-medium hover:bg-[#0f2d5c] hover:text-white transition-colors"
                      >
                        {slide.cta2.label}
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right: image */}
                  <motion.div
                    key={`img-${i}-${current}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={current === i ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:block relative"
                  >
                    {/* Decorative frame */}
                    <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#1e6fd4]/20" />
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 aspect-[4/3]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        unoptimized
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2d5c]/10 to-transparent" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-blue-50">
                      <div className="w-10 h-10 rounded-full bg-[#1e6fd4]/10 flex items-center justify-center shrink-0">
                        <span className="text-lg">✓</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0f2d5c]">Pre-Vetted Consultants</p>
                        <p className="text-xs text-[#4a6080]">Ready to deploy in 48hrs</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-white/80 border border-blue-100 shadow-sm hover:bg-white transition-colors text-[#0f2d5c]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                current === i ? "w-6 h-2 bg-[#1e6fd4]" : "w-2 h-2 bg-[#1e6fd4]/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-white/80 border border-blue-100 shadow-sm hover:bg-white transition-colors text-[#0f2d5c]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
