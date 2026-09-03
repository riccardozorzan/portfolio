"use client";

import { useState, useEffect } from "react";
import { Sparkles, Gamepad2, Activity } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Lab() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  return (
    <section id="lab" className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-purple-600 dark:text-purple-400 font-mono text-sm">#</span>
          <h2 className="text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-200 uppercase font-mono">
            {dict.labTitle}
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/60">
          <Activity className="w-3 h-3 animate-pulse text-purple-600 dark:text-purple-400" /> {dict.labStatus}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
        <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-indigo-950/20 backdrop-blur-md flex flex-col justify-between space-y-4 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors shadow-sm dark:shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-indigo-600 dark:text-indigo-300 font-bold">{dict.labAiTitle}</span>
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-[11px] leading-relaxed">
            {dict.labAiDesc}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-white dark:bg-purple-950/20 backdrop-blur-md flex flex-col justify-between space-y-4 hover:border-purple-500 dark:hover:border-purple-400 transition-colors shadow-sm dark:shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-purple-600 dark:text-purple-300 font-bold">{dict.labGodotTitle}</span>
            <Gamepad2 className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-bounce" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-[11px] leading-relaxed">
            {dict.labGodotDesc}
          </p>
        </div>
      </div>
    </section>
  );
}