"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, Chip, Button, Link, Skeleton } from "@heroui/react";
import { FiStar, FiExternalLink, FiGithub } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
    fork: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572a5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
};

export default function GitHubSection() {
    const { t, locale } = useLanguage();
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    "https://api.github.com/users/Ruan-nascimento/repos?sort=updated&per_page=8"
                );
                if (!res.ok) throw new Error("Failed to fetch");
                const data: GitHubRepo[] = await res.json();
                setRepos(data.filter((r) => !r.fork).slice(0, 8));
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <section id="github" className="section">
            <SectionHeading
                title={t("github.title")}
                subtitle={t("github.subtitle")}
            />

            {/* Loading */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i} className="glass-card border-zinc-800/50 bg-zinc-900/30">
                            <CardBody className="flex flex-col gap-3 p-6">
                                <Skeleton className="h-5 w-3/5 rounded-lg bg-zinc-800" />
                                <Skeleton className="h-4 w-full rounded-lg bg-zinc-800" />
                                <Skeleton className="h-4 w-2/3 rounded-lg bg-zinc-800" />
                                <div className="flex gap-2 mt-2">
                                    <Skeleton className="h-5 w-16 rounded-full bg-zinc-800" />
                                    <Skeleton className="h-5 w-12 rounded-full bg-zinc-800" />
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}

            {/* Error */}
            {error && !loading && (
                <ScrollReveal className="text-center py-12">
                    <p className="text-zinc-400 mb-4">
                        {t("github.error")}
                    </p>
                    <Button
                        as={Link}
                        href="https://github.com/Ruan-nascimento"
                        isExternal
                        size="lg"
                        radius="full"
                        className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold"
                        startContent={<FiGithub size={18} />}
                    >
                        {t("github.cta")}
                    </Button>
                </ScrollReveal>
            )}

            {/* Repos Grid */}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repos.map((repo, index) => (
                        <ScrollReveal key={repo.id} delay={index * 0.08} variant="fadeUp">
                            <Card className="glass-card h-full border-zinc-800/50 bg-zinc-900/30 group">
                                <CardBody className="flex flex-col gap-3 p-5">
                                    {/* Repo Name */}
                                    <Link
                                        href={repo.html_url}
                                        isExternal
                                        className="text-base font-semibold text-zinc-100 hover:text-sky-300 transition-colors flex items-center gap-2"
                                    >
                                        {repo.name}
                                        <FiExternalLink
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </Link>

                                    {/* Description */}
                                    {repo.description && (
                                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                                            {repo.description}
                                        </p>
                                    )}

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mt-auto pt-2 flex-wrap">
                                        {repo.language && (
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className="h-2.5 w-2.5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            LANGUAGE_COLORS[repo.language] || "#8b8b8b",
                                                    }}
                                                />
                                                <span className="text-xs text-zinc-400">
                                                    {repo.language}
                                                </span>
                                            </div>
                                        )}
                                        {repo.stargazers_count > 0 && (
                                            <div className="flex items-center gap-1 text-zinc-500">
                                                <FiStar size={12} />
                                                <span className="text-xs">{repo.stargazers_count}</span>
                                            </div>
                                        )}
                                        <Chip
                                            size="sm"
                                            variant="flat"
                                            classNames={{
                                                base: "bg-zinc-800/60",
                                                content: "text-zinc-500 text-xs",
                                            }}
                                        >
                                            {formatDate(repo.updated_at)}
                                        </Chip>
                                    </div>
                                </CardBody>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </section>
    );
}
