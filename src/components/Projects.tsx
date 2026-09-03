"use client";

import { useState, useEffect } from "react";
import { Construction, ExternalLink, Globe } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Projects() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">#</span>
        <h2 className="text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-200 uppercase font-mono">
          {dict.projectsTitle}
        </h2>
      </div>

      {/* Terra Viva Outdoor Park Card */}
      <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md space-y-4 font-mono shadow-sm hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              {dict.terraVivaTitle}
            </h3>
          </div>
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 w-fit">
            {dict.terraVivaRole}
          </span>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
          {dict.terraVivaDesc}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100 dark:border-gray-800/60">
          <div className="flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400">
            <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              #{dict.terraVivaTag1}
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              #{dict.terraVivaTag2}
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              #{dict.terraVivaTag3}
            </span>
          </div>

          <a
            href="https://www.terravivaoutdoorpark.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-semibold transition-colors"
          >
            <span>{dict.visitWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Work in Progress Banner */}
      <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white/30 dark:bg-gray-900/20 backdrop-blur-md text-center space-y-3 font-mono shadow-sm">
        <div className="flex justify-center">
          <Construction className="w-5 h-5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
        </div>
        <h3 className="text-gray-800 dark:text-white text-xs font-bold tracking-wider uppercase">
          {dict.projectsStatus}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed font-sans">
          {dict.projectsDesc}
        </p>
      </div>
    </section>
  );
}