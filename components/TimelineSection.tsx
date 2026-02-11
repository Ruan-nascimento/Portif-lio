"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { FiBookOpen } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

export default function TimelineSection() {
    const { t } = useLanguage();

    const timelineItems = [
        {
            date: t("timeline.item1.date"),
            title: t("timeline.item1.title"),
            institution: t("timeline.item1.institution"),
            description: t("timeline.item1.description"),
        },
        {
            date: t("timeline.item2.date"),
            title: t("timeline.item2.title"),
            institution: t("timeline.item2.institution"),
            description: t("timeline.item2.description"),
        },
        {
            date: t("timeline.item3.date"),
            title: t("timeline.item3.title"),
            institution: t("timeline.item3.institution"),
            description: t("timeline.item3.description"),
        },
    ];

    return (
        <section id="formacoes" className="section">
            <SectionHeading
                title={t("timeline.title")}
                subtitle={t("timeline.subtitle")}
            />

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/40 via-sky-400/20 to-transparent" />

                <div className="flex flex-col gap-12">
                    {timelineItems.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <ScrollReveal
                                key={item.title}
                                variant={isLeft ? "fadeRight" : "fadeLeft"}
                                delay={index * 0.2}
                            >
                                <div
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)] z-10 mt-6 md:mt-0" />

                                    {/* Spacer for alignment */}
                                    <div className="hidden md:block md:w-1/2" />

                                    {/* Card */}
                                    <div className="ml-10 md:ml-0 md:w-1/2">
                                        <Card className="glass-card border-zinc-800/50 bg-zinc-900/30">
                                            <CardBody className="flex flex-col gap-3 p-5">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <Chip
                                                        size="sm"
                                                        variant="flat"
                                                        classNames={{
                                                            base: "bg-sky-500/10 border border-sky-500/20",
                                                            content: "text-sky-300 text-xs font-medium",
                                                        }}
                                                    >
                                                        {item.date}
                                                    </Chip>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                                                        <FiBookOpen size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-semibold text-zinc-100">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-xs text-zinc-500 mt-0.5">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm leading-relaxed text-zinc-400">
                                                    {item.description}
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
