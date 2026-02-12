"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageToggle() {
    const { locale, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-md text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-sky-500/40 hover:text-sky-300 hover:bg-zinc-800/70 cursor-pointer"
            aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
            title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={locale}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-1.5"
                >
                    <span className="text-base leading-none">
                        {locale != "pt" ? "🇺🇸" : "🇧🇷"}
                    </span>
                    <span>{locale != "pt" ? "EN" : "PT"}</span>
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
