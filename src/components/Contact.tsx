"use client";

import { useState, useEffect } from "react";
import { Shield, Send } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Contact() {
  const [dict, setDict] = useState(getDictionary("en"));

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  return (
    <section id="contact" className="space-y-6 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800/80 p-6 rounded-2xl backdrop-blur-md shadow-sm dark:shadow-xl transition-colors">
      <div>
        <h2 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white mb-1 font-mono uppercase flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> {dict.contactTitle}
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
          {dict.contactDesc}
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); alert(dict.successAlert); }} className="space-y-3.5">
        <input 
          type="text" 
          placeholder={dict.namePlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <input 
          type="email" 
          placeholder={dict.emailPlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <textarea 
          rows={4} 
          placeholder={dict.messagePlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors resize-none"
        />
        <button 
          type="submit" 
          className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono shadow-md"
        >
          <Send className="w-3.5 h-3.5" /> {dict.sendButton}
        </button>
      </form>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800/60 text-xs font-mono">
        <span className="text-gray-500">{dict.linksLabel}</span>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/riccardozorzan" target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            [GitHub]
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            [LinkedIn]
          </a>
          <a href="mailto:riccardo@riccardozorzan.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            [Email]
          </a>
        </div>
      </div>
    </section>
  );
}