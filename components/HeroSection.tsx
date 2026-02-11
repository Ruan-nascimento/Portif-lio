"use client";

import { Button } from "@heroui/react";
import { FiGithub, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import UserProfileCard from "./UserProfileCard";
import { useLanguage } from "@/providers/LanguageProvider";

export default function HeroSection() {
    const { t } = useLanguage();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="inicio" className="section min-h-[90vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                {/* Left: Text Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
                    <ScrollReveal delay={0.1}>
                        <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
                            {t("hero.tag")}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                            <span className="text-zinc-50">{t("hero.greeting")}</span>
                            <br />
                            <span className="gradient-text">Ruan Carlos</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-base sm:text-lg text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            {t("hero.description")}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                radius="full"
                                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-shadow"
                                onPress={() => scrollTo("projetos")}
                            >
                                {t("hero.cta.projects")}
                            </Button>
                            <Button
                                size="lg"
                                radius="full"
                                variant="bordered"
                                className="border-zinc-700 text-zinc-300 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                                as="a"
                                href="https://github.com/Ruan-nascimento"
                                target="_blank"
                                startContent={<FiGithub size={18} />}
                            >
                                {t("hero.cta.github")}
                            </Button>
                        </div>
                    </ScrollReveal>

                    {/* Scroll indicator */}
                    <ScrollReveal delay={0.6} className="mt-8 hidden lg:block">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex items-center gap-2 text-zinc-500 text-sm cursor-pointer"
                            onClick={() => scrollTo("sobre")}
                        >
                            <FiArrowDown size={16} />
                            <span>{t("hero.scroll")}</span>
                        </motion.div>
                    </ScrollReveal>
                </div>

                {/* Right: Profile Card */}
                <ScrollReveal
                    variant="scale"
                    delay={0.3}
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <UserProfileCard />
                </ScrollReveal>
            </div>
        </section>
    );
}
