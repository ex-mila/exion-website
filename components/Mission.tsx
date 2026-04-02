"use client";

import { useEffect, useRef } from "react";
import type { T } from "@/lib/translations";

interface MissionProps {
  t: T["mission"];
  lang: string;
}

export default function Mission({ t, lang }: MissionProps) {
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
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Centered headline block */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="reveal inline-block text-xs font-bold text-[#009973] tracking-widest uppercase mb-6">
            {t.tag}
          </span>
          <h2 className={`reveal reveal-delay-1 ${isKo ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"} xl:text-5xl font-bold text-[#111827] leading-[1.15] tracking-tight whitespace-pre-line mb-8`}>
            {t.headline}
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-[#111827]/55 leading-relaxed max-w-2xl mx-auto">
            {t.body}
          </p>
        </div>

        {/* Values — 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden">
          {t.values.map((val, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-[#F9FAFB] hover:bg-white transition-colors duration-300 p-8 lg:p-10 flex flex-col gap-6`}
            >
              <span className="text-5xl font-black text-[#009973]/20 tabular-nums leading-none">
                {val.num}
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">{val.title}</h4>
                <p className="text-sm text-[#111827]/55 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
