"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter, Chip, Button, Link, Tabs, Tab } from "@heroui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

interface Project {
    title: string;
    repoUrl: string;
    demoUrl?: string;
    status: "completed" | "worked_on";
    summary: string;
    tags: string[];
    highlights?: string[];
}

const projects: Project[] = [
    {
        title: "Barber Queue",
        repoUrl: "https://github.com/Ruan-nascimento/barber_queue",
        demoUrl: "https://barber-queue-tau.vercel.app",
        status: "completed",
        summary:
            "Sistema full-stack de gerenciamento de fila para barbearias (Next.js + Tailwind + SQLite + Prisma).",
        tags: ["Next.js", "Tailwind", "Prisma", "SQLite", "TypeScript"],
        highlights: [
            "Fluxo de cliente e admin",
            "Aprovação de entrada na fila",
            "Painel com estatísticas e histórico",
        ],
    },
    {
        title: "WE Barbearia",
        repoUrl: "https://github.com/Ruan-nascimento/system-barber-queue",
        demoUrl: "https://system-barber-queue.vercel.app",
        status: "worked_on",
        summary:
            "Aplicação web para autenticação e gestão de acesso, com foco em segurança (JWT em cookies HttpOnly).",
        tags: ["Next.js", "Prisma", "Tailwind", "JWT", "TypeScript", "shadcn/ui"],
    },
    {
        title: "Controle de Estoque",
        repoUrl: "https://github.com/Ruan-nascimento/Controle-de-Estoque",
        demoUrl: "https://controle-de-estoque-orcin.vercel.app",
        status: "completed",
        summary:
            "Sistema web de controle de estoque com deploy no Vercel.",
        tags: ["TypeScript", "Next.js", "Prisma"],
    },
    {
        title: "Aluguel de Salas",
        repoUrl: "https://github.com/Ruan-nascimento/aluguel-de-salas",
        status: "worked_on",
        summary:
            "Projeto com foco em aluguel/gestão de salas (repositório com paleta e estrutura do app).",
        tags: ["Python"],
    },
    {
        title: "Patacho Piscinas",
        repoUrl: "https://github.com/Ruan-nascimento/patacho-piscinas",
        status: "worked_on",
        summary:
            "Projeto web listado — se estiver privado/inacessível, o site mostra apenas card estático com link.",
        tags: ["Web"],
    },
];

type FilterKey = "all" | "completed" | "worked_on";

export default function ProjectsSection() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<FilterKey>("all");

    const filtered =
        filter === "all"
            ? projects
            : projects.filter((p) => p.status === filter);

    return (
        <section id="projetos" className="section">
            <SectionHeading
                title={t("projects.title")}
                subtitle={t("projects.subtitle")}
            />

            {/* Filter Tabs */}
            <ScrollReveal className="mb-8">
                <Tabs
                    aria-label="Project filter"
                    variant="underlined"
                    selectedKey={filter}
                    onSelectionChange={(key) => setFilter(key as FilterKey)}
                    classNames={{
                        tabList: "gap-4 border-b border-zinc-800",
                        tab: "text-zinc-400 data-[selected=true]:text-sky-400",
                        cursor: "bg-sky-400",
                    }}
                >
                    <Tab key="all" title={t("projects.filter.all")} />
                    <Tab key="completed" title={t("projects.filter.completed")} />
                    <Tab key="worked_on" title={t("projects.filter.worked")} />
                </Tabs>
            </ScrollReveal>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((project, index) => (
                    <ScrollReveal key={project.title} delay={index * 0.1} variant="fadeUp">
                        <Card className="glass-card h-full border-zinc-800/50 bg-zinc-900/30 flex flex-col">
                            <CardBody className="flex flex-col gap-4 p-6 flex-1">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-100">
                                            {project.title}
                                        </h3>
                                        <Chip
                                            size="sm"
                                            variant="flat"
                                            classNames={{
                                                base:
                                                    project.status === "completed"
                                                        ? "bg-emerald-500/10 border border-emerald-500/20"
                                                        : "bg-amber-500/10 border border-amber-500/20",
                                                content:
                                                    project.status === "completed"
                                                        ? "text-emerald-300 text-xs"
                                                        : "text-amber-300 text-xs",
                                            }}
                                        >
                                            {project.status === "completed" ? t("projects.status.completed") : t("projects.status.worked")}
                                        </Chip>
                                    </div>
                                </div>

                                {/* Summary */}
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {project.summary}
                                </p>

                                {/* Highlights */}
                                {project.highlights && (
                                    <ul className="space-y-1">
                                        {project.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="text-xs text-zinc-500 flex items-start gap-2"
                                            >
                                                <span className="mt-1.5 h-1 w-1 rounded-full bg-sky-400 shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                    {project.tags.map((tag) => (
                                        <Chip
                                            key={tag}
                                            size="sm"
                                            variant="flat"
                                            classNames={{
                                                base: "bg-zinc-800/60 border border-zinc-700/40",
                                                content: "text-zinc-400 text-xs",
                                            }}
                                        >
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            </CardBody>

                            <CardFooter className="flex gap-2 px-6 pb-5 pt-0">
                                <Button
                                    as={Link}
                                    href={project.repoUrl}
                                    isExternal
                                    size="sm"
                                    variant="flat"
                                    className="bg-zinc-800/60 text-zinc-300 hover:text-sky-300"
                                    startContent={<FiGithub size={14} />}
                                >
                                    {t("projects.btn.code")}
                                </Button>
                                {project.demoUrl && (
                                    <Button
                                        as={Link}
                                        href={project.demoUrl}
                                        isExternal
                                        size="sm"
                                        variant="flat"
                                        className="bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
                                        startContent={<FiExternalLink size={14} />}
                                    >
                                        Demo
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
