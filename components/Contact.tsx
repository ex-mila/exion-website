"use client";

import { useEffect, useRef } from "react";
import type { T } from "@/lib/translations";

interface ContactProps {
  t: T["contact"];
  lang: string;
}

export default function Contact({ t, lang }: ContactProps) {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: headline */}
          <div>
            <span className="reveal inline-block text-xs font-bold text-[#009973] tracking-widest uppercase mb-5">
              {t.tag}
            </span>
            <h2 className={`reveal reveal-delay-1 ${isKo ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"} xl:text-5xl font-bold text-[#111827] leading-[1.15] tracking-tight mb-6`}>
              {t.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line.split('EXION').map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && <span className="text-[#009973]">EXION</span>}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-[#111827]/50 leading-relaxed mb-10">
              {t.sub}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="reveal reveal-delay-3 inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#009973] text-white font-semibold text-sm hover:bg-[#007a5e] transition-colors duration-200"
            >
              {t.options[0].title}
            </a>
          </div>

          {/* Right: contact option cards */}
          <div className="flex flex-col gap-3">
            {t.options.map((opt, i) => (
              <a
                key={i}
                href={`mailto:${t.email}?subject=${opt.subject}`}
                className={`reveal reveal-delay-${i + 1} group flex items-center justify-between p-8 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#009973]/30 hover:bg-white transition-all duration-200`}
              >
                <div>
                  <p className="text-base font-semibold text-[#111827] mb-1">
                    {opt.title}
                  </p>
                  <p className="text-sm text-[#111827]/45 leading-relaxed">{opt.desc}</p>
                </div>
                <svg className="w-5 h-5 text-[#111827]/20 group-hover:text-[#009973] group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}

            {/* Email */}
            <div className="pt-4 mt-1">
              <p className="text-xs text-[#111827]/25 mb-2 uppercase tracking-widest font-semibold">{t.emailLabel}</p>
              <a
                href={`mailto:${t.email}`}
                className="text-sm font-semibold text-[#111827]/50 hover:text-[#009973] transition-colors duration-200"
              >
                {t.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
