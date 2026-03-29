"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  suffix?: string | null;
  label: string;
};

const FALLBACK_STATS: Stat[] = [
  { value: "500", suffix: "+", label: "SAP Placements" },
  { value: "120", suffix: "+", label: "Enterprise Clients" },
  { value: "15", suffix: "+", label: "Years Experience" },
  { value: "20", suffix: "+", label: "Countries Served" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10) || 0;
  const count = useCountUp(numericValue, 2000, active);

  return (
    <div className="flex flex-col items-center text-center px-8">
      <div
        className="text-5xl lg:text-6xl font-bold text-white mb-2"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        {count}
        <span className="text-[#4a9fe8]">{stat.suffix}</span>
      </div>
      <p className="text-sm font-medium uppercase tracking-widest text-blue-200/70">
        {stat.label}
      </p>
    </div>
  );
}

type Props = {
  stats: Stat[];
};

export default function StatsStrip({ stats }: Props) {
  const displayStats = stats.length > 0 ? stats : FALLBACK_STATS;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#0f2d5c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#1e6fd4]/20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#1e6fd4]/20 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 divide-x-0 lg:divide-x divide-blue-800">
          {displayStats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
