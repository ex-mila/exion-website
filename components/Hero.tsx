"use client";

import Image from "next/image";
import type { T } from "@/lib/translations";

interface HeroProps {
  t: T["hero"];
  lang: string;
  onDemoClick: () => void;
}

export default function Hero({ t, lang, onDemoClick }: HeroProps) {
  const isKo = lang === "ko";
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* Left: text */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#009973]/20 mb-7 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009973] animate-pulse" />
              <span className="text-xs font-semibold text-[#009973] tracking-widest uppercase">
                {t.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className={`${isKo ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"} xl:text-5xl font-bold text-[#111827] leading-[1.15] tracking-tight mb-5 whitespace-pre-line`}>
              {t.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#111827]/55 leading-relaxed mb-10 whitespace-pre-line">
              {t.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={onDemoClick}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#009973] text-white font-semibold text-sm hover:bg-[#007a5e] transition-all duration-200 shadow-md shadow-[#009973]/20 cursor-pointer"
              >
                {t.cta1}
              </button>
              <button
                onClick={() => scrollTo("#products")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#111827]/15 text-[#111827]/70 font-semibold text-sm hover:border-[#111827]/30 hover:text-[#111827] transition-all duration-200 cursor-pointer"
              >
                {t.cta2}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-[#111827]/08">
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-[#111827] tabular-nums">{stat.value}</div>
                  <div className="text-xs text-[#111827]/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: logo image */}
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/images/logo_s.png"
              alt="EXION"
              width={600}
              height={600}
              className="w-full max-w-[480px] lg:max-w-[580px] h-auto object-contain"
              priority
              quality={90}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
