"use client";

import { useState, useEffect } from "react";
import { Layers, Code2, Database, Server, Globe } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Skills() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">#</span>
        <h2 className="text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-200 uppercase font-mono">
          {dict.skillsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 font-mono text-xs">
        <div className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-900/60 hover:border-cyan-500 hover:bg-cyan-50/50 dark:hover:border-cyan-400/60 dark:hover:bg-cyan-950/20 transition-all flex items-center justify-between shadow-sm dark:shadow-lg">
          <span className="text-gray-700 dark:text-gray-200 flex items-center gap-2.5">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">├──</span> {dict.skillFrontend}
          </span>
          <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>

        <div className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-900/60 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:border-purple-400/60 dark:hover:bg-purple-950/20 transition-all flex items-center justify-between shadow-sm dark:shadow-lg">
          <span className="text-gray-700 dark:text-gray-200 flex items-center gap-2.5">
            <span className="text-purple-600 dark:text-purple-400 font-bold">├──</span> {dict.skillWeb}
          </span>
          <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
        </div>

        <div className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-900/60 hover:border-cyan-500 hover:bg-cyan-50/50 dark:hover:border-cyan-400/60 dark:hover:bg-cyan-950/20 transition-all flex items-center justify-between shadow-sm dark:shadow-lg">
          <span className="text-gray-700 dark:text-gray-200 flex items-center gap-2.5">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">├──</span> {dict.skillBackend}
          </span>
          <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>

        <div className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-900/60 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:border-purple-400/60 dark:hover:bg-purple-950/20 transition-all flex items-center justify-between shadow-sm dark:shadow-lg">
          <span className="text-gray-700 dark:text-gray-200 flex items-center gap-2.5">
            <span className="text-purple-600 dark:text-purple-400 font-bold">├──</span> {dict.skillDatabase}
          </span>
          <Database className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
        </div>

        <div className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-900/60 hover:border-cyan-500 hover:bg-cyan-50/50 dark:hover:border-cyan-400/60 dark:hover:bg-cyan-950/20 transition-all flex items-center justify-between shadow-sm dark:shadow-lg">
          <span className="text-gray-700 dark:text-gray-200 flex items-center gap-2.5">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">└──</span> {dict.skillLinux}
          </span>
          <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
}