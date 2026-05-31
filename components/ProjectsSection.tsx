"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Chip,
    Button,
    Link,
    Skeleton,
} from "@heroui/react";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiClock } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";
import { useGithub, GitHubProject } from "@/utils/githubProjects";

const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    Shell: "#89e051",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Dart: "#00B4AB",
    Kotlin: "#A97BFF",
    Swift: "#F05138",
};


function formatRelativeDate(dateStr: string, locale: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return locale === "pt" ? "hoje" : "today";
    if (diffDays === 1) return locale === "pt" ? "ontem" : "yesterday";
    if (diffDays < 7)
        return locale === "pt"
            ? `há ${diffDays} dias`
            : `${diffDays} days ago`;
    if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return locale === "pt"
            ? `há ${weeks} semana${weeks > 1 ? "s" : ""}`
            : `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }
    if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return locale === "pt"
            ? `há ${months} ${months > 1 ? "meses" : "mês"}`
            : `${months} month${months > 1 ? "s" : ""} ago`;
    }
    const years = Math.floor(diffDays / 365);
    return locale === "pt"
        ? `há ${years} ano${years > 1 ? "s" : ""}`
        : `${years} year${years > 1 ? "s" : ""} ago`;
}


function formatRepoName(name: string): string {
    return name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ProjectsSection() {
    const { getProjects } = useGithub();
    const { t, locale } = useLanguage();

    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            setError(false);
            try {
                const data = await getProjects();
                setProjects(data);
            } catch {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="projetos" className="section">
            <SectionHeading
                title={t("projects.title")}
                subtitle={t("projects.subtitle")}
            />

            {/* Loading — Skeletons */}
            {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card
                            key={i}
                            className="glass-card h-full border-zinc-800/50 bg-zinc-900/30"
                        >
                            <CardBody className="flex flex-col gap-4 p-6">
                                <Skeleton className="h-5 w-3/5 rounded-md bg-zinc-800/60" />
                                <Skeleton className="h-4 w-full rounded-md bg-zinc-800/40" />
                                <Skeleton className="h-4 w-4/5 rounded-md bg-zinc-800/40" />
                                <div className="flex gap-2 mt-2">
                                    <Skeleton className="h-6 w-16 rounded-full bg-zinc-800/40" />
                                    <Skeleton className="h-6 w-16 rounded-full bg-zinc-800/40" />
                                    <Skeleton className="h-6 w-16 rounded-full bg-zinc-800/40" />
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}

            {/* Error State */}
            {!isLoading && error && (
                <ScrollReveal>
                    <div className="text-center py-16">
                        <p className="text-zinc-400 text-lg">
                            {t("projects.error")}
                        </p>
                        <Button
                            variant="flat"
                            className="mt-4 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
                            onPress={() => window.location.reload()}
                        >
                            {t("projects.retry")}
                        </Button>
                    </div>
                </ScrollReveal>
            )}

            {/* Empty State */}
            {!isLoading && !error && projects.length === 0 && (
                <ScrollReveal>
                    <div className="text-center py-16">
                        <p className="text-zinc-500 text-lg">
                            {t("projects.empty")}
                        </p>
                    </div>
                </ScrollReveal>
            )}

            {/* Project Grid */}
            {!isLoading && !error && projects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ScrollReveal
                            key={project.name}
                            delay={index * 0.08}
                            variant="fadeUp"
                        >
                            <Card className="glass-card h-full border-zinc-800/50 bg-zinc-900/30 flex flex-col group transition-all duration-300 hover:border-sky-500/20 hover:shadow-lg hover:shadow-sky-500/5">
                                <CardBody className="flex flex-col gap-4 p-6 flex-1">
                                    {/* Header: nome + linguagem */}
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-sky-300 transition-colors">
                                            {formatRepoName(project.name)}
                                        </h3>

                                        {project.language && (
                                            <Chip
                                                size="sm"
                                                variant="flat"
                                                startContent={
                                                    <span
                                                        className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
                                                        style={{
                                                            backgroundColor:
                                                                languageColors[project.language] ??
                                                                "#8b949e",
                                                        }}
                                                    />
                                                }
                                                classNames={{
                                                    base: "bg-zinc-800/60 border border-zinc-700/40",
                                                    content: "text-zinc-300 text-xs",
                                                }}
                                            >
                                                {project.language}
                                            </Chip>
                                        )}
                                    </div>

                                    {/* Descrição */}
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Métricas: stars, forks, atualização */}
                                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                                        {project.stars > 0 && (
                                            <span className="flex items-center gap-1">
                                                <FiStar size={13} className="text-amber-400" />
                                                {project.stars}
                                            </span>
                                        )}
                                        {project.forks > 0 && (
                                            <span className="flex items-center gap-1">
                                                <FiGitBranch size={13} />
                                                {project.forks}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1 ml-auto">
                                            <FiClock size={13} />
                                            {formatRelativeDate(project.updatedAt, locale)}
                                        </span>
                                    </div>

                                    {/* Homepage (site hospedado) */}
                                    {project.homepage && (
                                        <Link
                                            href={project.homepage}
                                            isExternal
                                            className="text-xs text-sky-400/80 hover:text-sky-300 flex items-center gap-1.5 w-fit transition-colors"
                                        >
                                            <FiExternalLink size={12} />
                                            {project.homepage.replace(/^https?:\/\//, "")}
                                        </Link>
                                    )}

                                    {/* Topics/Tags */}
                                    {project.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                            {project.topics.map((topic) => (
                                                <Chip
                                                    key={topic}
                                                    size="sm"
                                                    variant="flat"
                                                    classNames={{
                                                        base: "bg-zinc-800/60 border border-zinc-700/40",
                                                        content: "text-zinc-400 text-xs",
                                                    }}
                                                >
                                                    {topic}
                                                </Chip>
                                            ))}
                                        </div>
                                    )}
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
                                    {project.homepage && (
                                        <Button
                                            as={Link}
                                            href={project.homepage}
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
            )}
        </section>
    );
}
