"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { getDictionary } from "@/i18n/translations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [dict, setDict] = useState(getDictionary("en"));

  // check theme state and language
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.cookie = "theme=light; path=/; max-age=31536000; SameSite=Lax";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.cookie = "theme=dark; path=/; max-age=31536000; SameSite=Lax";
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50">
      {/* header */}
      <div className="flex items-center justify-between pb-4 pt-4 border-b border-cyan-500/20 bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 rounded-xl border transition-colors">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="text-gray-900 dark:text-white font-mono font-bold tracking-wider text-xs">RZ_KERNEL // v2.6</span>
        </div>

        {/* Navigazione Desktop & Pulsante Tema */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-xs font-mono text-gray-600 dark:text-gray-400">
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{dict.skills}</a>
            <a href="#lab" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{dict.lab}</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">{dict.projects}</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{dict.contact}</a>
          </nav>
          
          {/* theme button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-cyan-950/30 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-cyan-950/30 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/90 border border-gray-300 dark:border-cyan-500/30 rounded-xl backdrop-blur-xl p-4 flex flex-col gap-3 font-mono text-xs shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 text-gray-500 pb-2 border-b border-gray-200 dark:border-gray-800 text-[10px]">
            <Terminal className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            <span>{dict.router}</span>
          </div>
          <a 
            href="#skills" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 p-2 rounded transition-colors"
          >
            &gt; {dict.skills}
          </a>
          <a 
            href="#lab" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 p-2 rounded transition-colors"
          >
            &gt; {dict.lab}
          </a>
          <a 
            href="#projects" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/40 p-2 rounded transition-colors"
          >
            &gt; {dict.projects}
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 p-2 rounded transition-colors"
          >
            &gt; {dict.contact}
          </a>
        </div>
      )}
    </header>
  );
}