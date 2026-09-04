"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Code2, Cpu, ArrowRight, Lightbulb, ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";
import { getDictionary } from "@/i18n/translations";

export default function WebDevClient() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  const services = [
    {
      title: dict.webDevCard1Title,
      desc: dict.webDevCard1Desc,
      icon: Globe,
    },
    {
      title: dict.webDevCard2Title,
      desc: dict.webDevCard2Desc,
      icon: Code2,
    },
    {
      title: dict.webDevCard3Title,
      desc: dict.webDevCard3Desc,
      icon: Cpu,
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Torna alla Home */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-cyan-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-4">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-mono">
          {dict.webDevBadge}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-mono uppercase">
          {dict.webDevTitle}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono max-w-2xl leading-relaxed">
          {dict.webDevDesc}
        </p>
      </section>

      {/* Grid Servizi */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800/80 rounded-2xl space-y-3 backdrop-blur-md shadow-sm"
            >
              <div className="p-2.5 w-fit rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold font-mono text-gray-900 dark:text-white">
                {item.title}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono leading-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Banner di Attenzione / Idee */}
      <section className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-600 dark:text-cyan-400 shrink-0">
            <Lightbulb className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold font-mono text-gray-900 dark:text-white">
              {dict.webDevAttentionTitle}
            </h3>
            <p className="text-xs font-mono text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {dict.webDevAttentionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Sezione Contatti / Informazioni */}
      <section className="space-y-6">
        <div className="border-t border-gray-200 dark:border-gray-800/80 pt-8">
          <h2 className="text-lg font-bold font-mono text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            {dict.webDevCtaTitle} <ArrowRight className="w-4 h-4 text-cyan-500" />
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-mono mb-6">
            {dict.webDevCtaDesc}
          </p>
          <Contact />
        </div>
      </section>
    </main>
  );
}