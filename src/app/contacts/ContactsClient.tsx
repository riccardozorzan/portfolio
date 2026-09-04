"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Mail, UserCheck, Code2, Terminal, ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";
import { getDictionary } from "@/i18n/translations";

export default function ContactsClient() {
  const [dict, setDict] = useState(getDictionary("en"));
  const [turinTime, setTurinTime] = useState<string>("");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));

    const updateTime = () => {
      const now = new Date();
      const timeFormatter = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTurinTime(timeFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
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

      {/* Header Pagina */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono uppercase">
          {dict.contactTitle}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          {dict.contactDesc}
        </p>
      </div>

      {/* Profilo & Informazioni Personali */}
      <section className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800/80 p-6 rounded-2xl backdrop-blur-md shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Terminal className="w-4 h-4" /> {dict.aboutMeTitle}
        </div>

        <p className="text-xs text-gray-700 dark:text-gray-300 font-mono leading-relaxed max-w-3xl">
          {dict.aboutMeDesc}
        </p>

        {/* Grid Dettagli */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800/60 font-mono text-xs">
          
          {/* Posizione + Orologio Live di Torino */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase">{dict.locationLabel}</span>
              <span className="font-semibold text-gray-900 dark:text-gray-200">
                Torino, Italia {turinTime && <span className="text-cyan-500 text-[11px] font-normal">[{turinTime}]</span>}
              </span>
            </div>
          </div>

          {/* Email Diretta */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase">{dict.emailLabel}</span>
              <a 
                href="mailto:riccardo@riccardozorzan.com" 
                className="font-semibold text-gray-900 dark:text-gray-200 hover:text-cyan-500 transition-colors"
              >
                riccardo@riccardozorzan.com
              </a>
            </div>
          </div>

          {/* Disponibilità */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400 shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase">{dict.availabilityLabel}</span>
              <span className="font-semibold text-gray-900 dark:text-gray-200">{dict.availabilityValue}</span>
            </div>
          </div>

          {/* Profili / GitHub & LinkedIn */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400 shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase">{dict.socialLabel}</span>
              <div className="flex gap-2 font-semibold text-gray-900 dark:text-gray-200">
                <a 
                  href="https://github.com/riccardozorzan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors underline decoration-cyan-500/40"
                >
                  GitHub
                </a>
                <span>//</span>
                <a 
                  href="https://linkedin.com/in/riccardozorzan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors underline decoration-cyan-500/40"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Form di Contatto */}
      <Contact />
    </main>
  );
}