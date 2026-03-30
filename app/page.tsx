"use client";

import { useState } from "react";
import { translations, type Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Products from "@/components/Products";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main data-lang={lang}>
      <Navbar
        t={t.nav}
        lang={lang}
        onLangToggle={() => setLang(lang === "en" ? "ko" : "en")}
      />
      <Hero t={t.hero} lang={lang} onDemoClick={scrollToContact} />
      <Problem t={t.problem} lang={lang} />
      <Products t={t.products} lang={lang} />
      <Mission t={t.mission} lang={lang} />
      <Contact t={t.contact} lang={lang} />
      <Footer t={t.footer} />
    </main>
  );
}
