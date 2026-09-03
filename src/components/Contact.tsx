"use client";

import { useState, useEffect, FormEvent } from "react";
import { Shield, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { getDictionary } from "@/i18n/translations";

export default function Contact() {
  const [dict, setDict] = useState(getDictionary("en"));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setDict(getDictionary(currentLang));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("submitting");

    if (!executeRecaptcha) {
      setStatus("error");
      return;
    }

    try {
      const gRecaptchaToken = await executeRecaptcha("contact_form");
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        gRecaptchaToken,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <input 
          type="text" 
          name="name"
          placeholder={dict.namePlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <input 
          type="email" 
          name="email"
          placeholder={dict.emailPlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <textarea 
          name="message"
          rows={4} 
          placeholder={dict.messagePlaceholder} 
          required
          className="w-full bg-gray-50 dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-xs text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono focus:outline-none focus:border-cyan-500 transition-colors resize-none"
        />
        
        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono shadow-md disabled:opacity-50"
        >
          <Send className="w-3.5 h-3.5" /> 
          {status === "submitting" ? "TRANSMITTING..." : dict.sendButton}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-mono pt-2">
            <CheckCircle2 className="w-4 h-4" /> {dict.successAlert}
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-mono pt-2">
            <AlertCircle className="w-4 h-4" /> Transmission failed. Please try again.
          </div>
        )}
      </form>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800/60 text-xs font-mono">
        <span className="text-gray-500">{dict.linksLabel}</span>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/riccardozorzan" target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            [GitHub]
          </a>
          <a href="https://linkedin.com/in/riccardo-zorzan-772027189" target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
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