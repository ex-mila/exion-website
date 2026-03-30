'use client';

import Image from 'next/image';
import type { T } from '@/lib/translations';

interface FooterProps {
  t: T['footer'];
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo_b.png"
              alt="EXIONLabs"
              width={130}
              height={30}
              className="h-7 w-auto mb-5"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8">
              {t.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${t.email}`}
                className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {t.email}
              </a>
              <span className="text-white/50 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                {t.phone}
              </span>
              <span className="text-white/40 text-xs flex items-start gap-2 mt-1 max-w-xs leading-relaxed whitespace-pre-line">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t.address}
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-xs font-bold text-white/30 tracking-widest uppercase mb-5">
              Navigation
            </h5>
            <ul className="flex flex-col gap-3">
              {t.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-xs font-bold text-white/30 tracking-widest uppercase mb-5">
              Products
            </h5>
            <ul className="flex flex-col gap-3">
              {['EXION DX', 'EXION EX'].map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="text-sm text-white/55 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector('#products')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} EXIONLabs. {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t.privacy}
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
