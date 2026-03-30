"use client";

import { useEffect, useRef } from "react";
import { ScanLine, Layers, ShieldAlert } from "lucide-react";
import type { T } from "@/lib/translations";

interface ProductsProps {
  t: T["products"];
  lang: string;
}

const checklistIcons = [
  <ScanLine key="scan" size={12} strokeWidth={2} />,
  <Layers key="layers" size={12} strokeWidth={2} />,
  <ShieldAlert key="shield" size={12} strokeWidth={2} />,
];

export default function Products({ t, lang }: ProductsProps) {
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

  const [featured, ...rest] = t.roadmap;

  return (
    <section id="products" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="reveal inline-block text-xs font-bold text-[#009973] tracking-widest uppercase mb-4">
            {t.tag}
          </span>
          <h2 className={`reveal reveal-delay-1 ${isKo ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"} xl:text-5xl font-bold text-[#111827] leading-[1.15] tracking-tight`}>
            {t.headline.split('\n').map((line, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-[#009973]' : ''}`}>{line}</span>
            ))}
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-[#111827]/55 mt-5 leading-relaxed whitespace-pre-line">
            {t.sub}
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">

          {/* EXION DX — featured */}
          <div className="reveal reveal-delay-1 bg-gradient-to-br from-[#009973] to-[#006b52] rounded-3xl p-8 lg:p-10 flex flex-col shadow-xl shadow-[#009973]/20">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30">
                <span className="relative flex w-1.5 h-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <span className="text-xs font-semibold text-white tracking-wide">{featured.badge}</span>
              </span>
            </div>
            <p className="text-xs font-bold text-white/60 tracking-widest uppercase mb-2 tabular-nums">
              {featured.year}
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
              {featured.name}
            </h3>
            <p className="text-sm text-white/85 leading-relaxed mb-8">
              {featured.desc}
            </p>
            <div className="border-t border-white/20 pt-7 mt-auto flex flex-col gap-5">
              {t.checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    {checklistIcons[i]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/75 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXION EX + EXION V-1 */}
          {rest.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 2} bg-[#F9FAFB] border border-[#EFEFEF] rounded-3xl p-8 lg:p-10 flex flex-col`}
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="relative flex w-1.5 h-1.5 shrink-0">
                  <span className="animate-pulse absolute inline-flex w-full h-full rounded-full bg-[#D1D5DB]" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#D1D5DB]" />
                </span>
                <span className="inline-block text-xs font-semibold text-[#111827]/35 bg-white border border-[#E5E7EB] px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs font-bold text-[#111827]/25 tracking-widest uppercase mb-2 tabular-nums">
                {item.year}
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#111827]/40 mb-4 tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm text-[#111827]/30 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
