"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Locale } from "@/lib/i18n";

interface LanguageContextValue {
    locale: Locale;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("pt");

    /* Recupera preferência salva no localStorage */
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "pt") {
            setLocale(saved);
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLocale((prev) => {
            const next = prev === "pt" ? "en" : "pt";
            localStorage.setItem(STORAGE_KEY, next);
            return next;
        });
    }, []);

    /** Retorna a string traduzida pela chave, ou a chave se não existir */
    const t = useCallback(
        (key: string): string => {
            const entry = translations[key];
            if (!entry) return key;
            return entry[locale] ?? key;
        },
        [locale]
    );

    return (
        <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
}
