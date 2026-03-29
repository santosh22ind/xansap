"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string | null;
  company?: string | null;
};

const FALLBACK: Testimonial[] = [
  { _id: "1", quote: "XanSAP delivered three SAP FICO consultants within five days of our request. The quality was exceptional — all three are still with us two years on.", authorName: "James Hartley", authorRole: "SAP Programme Director", company: "Global FMCG Enterprise" },
  { _id: "2", quote: "We've worked with many SAP staffing agencies over the years. XanSAP stands out because they actually understand SAP — they ask the right questions and send the right people.", authorName: "Priya Mehta", authorRole: "Head of IT Transformation", company: "European Manufacturing Group" },
  { _id: "3", quote: "Our S/4HANA migration was at risk due to a resource gap. XanSAP placed two senior consultants within a week and saved the programme.", authorName: "Stefan Bauer", authorRole: "CIO", company: "Logistics & Supply Chain Firm" },
  { _id: "4", quote: "The SuccessFactors consultant XanSAP placed was exactly what we needed — hands-on experience, great communication, and no ramp-up time required.", authorName: "Claire Dubois", authorRole: "VP HR Technology", company: "Financial Services Group" },
  { _id: "5", quote: "Responsive, knowledgeable and honest about what they can and can't deliver. That transparency is rare and exactly why we keep coming back.", authorName: "Raj Patel", authorRole: "IT Sourcing Manager", company: "Pharmaceutical Enterprise" },
];

type Props = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: Props) {
  const items = testimonials.length > 0 ? testimonials : FALLBACK;

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
    <section className="py-24 bg-[#f4f8ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a9fe8] mb-3">Client Stories</p>
          <h2 className="text-4xl lg:text-5xl text-[#0f2d5c] leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {items.map((t) => (
                <div key={t._id} className="min-w-full px-4 lg:px-24">
                  <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-sm border border-blue-100 relative">
                    <div className="absolute top-8 right-10 opacity-10">
                      <Quote className="w-20 h-20 text-[#1e6fd4]" />
                    </div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#1e6fd4] text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-xl lg:text-2xl text-[#0f2d5c] leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-serif)" }}>
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0f2d5c] flex items-center justify-center text-white font-bold text-lg">
                        {t.authorName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f2d5c]">{t.authorName}</p>
                        <p className="text-sm text-[#4a6080]">
                          {[t.authorRole, t.company].filter(Boolean).join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={scrollPrev} className="p-3 rounded-full bg-white border border-blue-100 shadow-sm hover:bg-[#0f2d5c] hover:text-white hover:border-[#0f2d5c] transition-all text-[#0f2d5c]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`rounded-full transition-all duration-300 ${current === i ? "w-6 h-2 bg-[#1e6fd4]" : "w-2 h-2 bg-[#1e6fd4]/30"}`} />
              ))}
            </div>
            <button onClick={scrollNext} className="p-3 rounded-full bg-white border border-blue-100 shadow-sm hover:bg-[#0f2d5c] hover:text-white hover:border-[#0f2d5c] transition-all text-[#0f2d5c]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
