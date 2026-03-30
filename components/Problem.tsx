"use client";

import { useEffect, useRef } from "react";
import type { T } from "@/lib/translations";

interface ProblemProps {
  t: T["problem"];
  lang: string;
}

export default function Problem({ t, lang }: ProblemProps) {
  const isKo = lang === "ko";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="reveal inline-block text-xs font-bold text-[#009973] tracking-widest uppercase mb-5">
            {t.tag}
          </span>
          <h2 className={`reveal reveal-delay-1 ${isKo ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"} xl:text-5xl font-bold leading-[1.15] tracking-tight mb-6`}>
            <span className="block text-[#111827]">{t.headline}</span>
            <span className="text-[#E8455A]">{t.headlineAccent}</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-[#111827]/50 leading-relaxed max-w-xl">
            {t.sub}
          </p>
        </div>

        {/* Stats — dark container */}
        <div className="reveal reveal-delay-3 bg-[#111827] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/08">
            {t.stats.map((stat, i) => (
              <div key={i} className="p-10 lg:p-12 group hover:bg-white/04 transition-colors duration-300">
                <div className={`${isKo ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"} xl:text-5xl font-bold text-[#E8455A] mb-4 tabular-nums`}>
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-white/75 leading-snug mb-3">
                  {stat.label}
                </p>
                <p className="text-xs text-white/30">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
