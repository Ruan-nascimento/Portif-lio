"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { FiUser, FiCode, FiHeart } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

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
    ];

    return (
        <section id="sobre" className="section">
            <SectionHeading title={t("about.title")} />

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

            {/* Highlight badges */}
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
