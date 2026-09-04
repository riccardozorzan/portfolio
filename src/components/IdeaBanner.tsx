"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightbulb, ArrowRight, Send } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function IdeaBanner() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-black/40 to-black p-6 backdrop-blur-md shadow-lg my-10">
      {/* Glow d'effetto sullo sfondo */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 font-mono">
        {/* Testo dell'Attention Box */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-600 dark:text-cyan-400 shrink-0">
            <Lightbulb className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              [?] {dict.webDevAttentionTitle}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {dict.webDevAttentionDesc}
            </p>
          </div>
        </div>

        {/* Pulsanti di Azione */}
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
          <Link
            href="/web-development"
            className="flex-1 md:flex-none px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Sviluppo Web</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contacts"
            className="flex-1 md:flex-none px-4 py-2.5 border border-gray-300 dark:border-gray-800 bg-white/5 hover:bg-white/10 text-gray-800 dark:text-gray-200 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-cyan-500" />
            <span>Contattami</span>
          </Link>
        </div>
      </div>
    </section>
  );
}