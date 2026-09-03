"use client";

import { useEffect, useState } from "react";
import { Terminal, Zap } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Hero() {
  const [dict, setDict] = useState(getDictionary("en"));
  const [terminalText, setTerminalText] = useState("Initializing kernel modules...");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    const selectedDict = getDictionary(currentLang);
    setDict(selectedDict);
    setTerminalText(selectedDict.heroLogs[0]);

    const logs = selectedDict.heroLogs;
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setTerminalText(logs[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-800/80 backdrop-blur-md shadow-sm dark:shadow-2xl relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative group justify-self-center md:justify-self-start">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-40 blur-md group-hover:opacity-80 transition duration-500" />
        <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-cyan-500/30 bg-gray-100 dark:bg-black shadow-lg">
          <img 
            src="/avatar.webp" 
            alt="Riccardo Zorzan Avatar" 
            className="w-full h-full object-cover object-center filter contrast-110"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white dark:bg-black border border-cyan-500/40 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-300 font-bold">{dict.heroStatus}</span>
        </div>
      </div>

      <div className="space-y-4 text-center md:text-left">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-1 font-mono">
            RICCARDO ZORZAN
          </h1>
          <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-wide">
            {dict.heroSubtitle}
          </p>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl font-mono">
          {dict.heroDesc}
        </p>

        <div className="bg-gray-100 dark:bg-black/80 border border-gray-200 dark:border-gray-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
          <span className="truncate">{terminalText}</span>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono shadow-sm">
            <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> {dict.heroAvailable}
          </span>
        </div>
      </div>
    </section>
  );
}