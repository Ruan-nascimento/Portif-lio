"use client";

import { Link } from "@heroui/react";
import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from "react-icons/fi";
import { useLanguage } from "@/providers/LanguageProvider";

const footerLinks = [
    { icon: <FiGithub size={18} />, href: "https://github.com/Ruan-nascimento", label: "GitHub" },
    { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/ruan-carlos-nascimento-07a146354/", label: "LinkedIn" },
    { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/ruan_carlosrcn/", label: "Instagram" },
];

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-zinc-800/50 mt-12">
            <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500 flex items-center gap-1">
                    © {new Date().getFullYear()} Ruan Carlos — {t("footer.made")}
                    <FiHeart size={12} className="text-sky-400" />
                </p>

                <div className="flex items-center gap-3">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            isExternal
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all duration-300 hover:text-sky-400 hover:bg-sky-500/10"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
