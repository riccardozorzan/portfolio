"use client";

import { useState, useEffect } from "react";
import { Construction } from "lucide-react";
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

      <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/40 backdrop-blur-md text-center space-y-3 font-mono shadow-sm dark:shadow-lg">
        <div className="flex justify-center">
          <Construction className="w-6 h-6 text-cyan-600 dark:text-cyan-400 animate-pulse" />
        </div>
        <h3 className="text-gray-800 dark:text-white text-xs font-bold tracking-wider uppercase">
          {dict.projectsStatus}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          {dict.projectsDesc}
        </p>
      </div>
    </section>
  );
}