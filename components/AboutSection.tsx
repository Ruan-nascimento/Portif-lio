"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { FiCode, FiHeart, FiUser } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";


export default function AboutSection() {
    const { t } = useLanguage();

    const aboutCards = [
        {
            title: t("about.card1.title"),
            icon: <FiUser size={24} />,
            content: t("about.card1.content"),
        },
        {
            title: t("about.card2.title"),
            icon: <FiCode size={24} />,
            content: t("about.card2.content"),
        },
        {
            title: t("about.card3.title"),
            icon: <FiHeart size={24} />,
            content: t("about.card3.content"),
        },
    ];

    const highlights = [
        t("about.highlight.clarity"),
        t("about.highlight.organization"),
        t("about.highlight.ux"),
        t("about.highlight.delivery"),
        t("about.highlight.security")
    ];

    return (
        <section id="sobre" className="section">
            <SectionHeading title={t("about.title")} />

            <div className="mb-10">
                <ScrollReveal key={t("about.me")} delay={0.15} variant="fadeUp">
                    <div className="poetic-quote">
                        {/* Aspas decorativas de abertura */}
                        <svg
                            className="poetic-quote__open"
                            viewBox="0 0 48 48"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M14 30c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6zm20 0c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6z"
                                fill="currentColor"
                            />
                        </svg>

                        {/* Conteúdo da citação */}
                        <blockquote className="poetic-quote__body">
                            <p className="poetic-quote__text">
                                {t("about.me")}
                            </p>
                            <p className="poetic-quote__text mt-6">
                                {t("about.me2")}
                            </p>
                        </blockquote>

                        {/* Aspas decorativas de fechamento */}
                        <svg
                            className="poetic-quote__close"
                            viewBox="0 0 48 48"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M34 18c3.3 0 6 2.7 6 6 0 6.6-5.4 12-12 12v-4c4.4 0 8-3.6 8-8h-2c-3.3 0-6-2.7-6-6s2.7-6 6-6zm-20 0c3.3 0 6 2.7 6 6 0 6.6-5.4 12-12 12v-4c4.4 0 8-3.6 8-8h-2c-3.3 0-6-2.7-6-6s2.7-6 6-6z"
                                fill="currentColor"
                            />
                        </svg>

                        {/* Atribuição / assinatura */}
                        <footer className="poetic-quote__footer">
                            <span className="poetic-quote__dash">—</span>
                            <div className="poetic-quote__author-wrapper">
                                <Image
                                    src="https://github.com/Ruan-nascimento.png"
                                    alt="Ruan Carlos"
                                    width={36}
                                    height={36}
                                    className="poetic-quote__avatar"
                                />
                                <div className="poetic-quote__author-info">
                                    <cite className="poetic-quote__author">Ruan Carlos</cite>
                                    <span className="poetic-quote__label">{t("about.title2")}</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutCards.map((card, index) => (
                    <ScrollReveal key={card.title} delay={index * 0.15} variant="fadeUp">
                        <Card className="glass-card h-full border-zinc-800/50 bg-zinc-900/30">
                            <CardBody className="flex flex-col gap-4 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-zinc-100">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    {card.content}
                                </p>
                            </CardBody>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={0.5} className="mt-10">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {highlights.map((h) => (
                        <Chip
                            key={h}
                            variant="flat"
                            classNames={{
                                base: "bg-sky-500/10 border border-sky-500/20",
                                content: "text-sky-300 text-sm font-medium",
                            }}
                        >
                            {h}
                        </Chip>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
