"use client";

import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiCheckCircle, FiInfo, FiLayers, FiAlertCircle } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function MoradaAppPage() {
  const { t } = useLanguage();

  const techs = ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT"];

  const features = t("project.morada.features").split(" • ");

  return (
    <main className="min-h-screen py-20 px-6 sm:px-12 max-w-4xl mx-auto flex flex-col justify-center">
      {/* Voltar */}
      <div className="mb-12">
        <Button
          as={Link}
          href="/projetos"
          variant="flat"
          size="sm"
          className="bg-zinc-800/40 text-zinc-300 hover:text-sky-300 hover:bg-sky-500/10 border border-zinc-700/40"
          startContent={<FiArrowLeft size={16} />}
        >
          {t("project.back_projects")}
        </Button>
      </div>

      {/* Hero do Projeto */}
      <div className="flex flex-col gap-6 mb-16">
        <ScrollReveal variant="fadeUp">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            {t("project.details")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
            <span className="gradient-text">{t("project.morada.title")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-medium mt-4 leading-relaxed">
            {t("project.morada.subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <p className="text-zinc-400 leading-relaxed text-base max-w-3xl">
            {t("project.morada.description")}
          </p>
        </ScrollReveal>

        {/* Links do Projeto */}
        <ScrollReveal variant="fadeUp" delay={0.2} className="flex flex-wrap gap-4 mt-4">
          <Button
            as={Link}
            href="https://github.com/Ruan-nascimento/Morada-Client"
            target="_blank"
            size="md"
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
            startContent={<FiGithub size={18} />}
          >
            GitHub (Mobile App)
          </Button>
          <Button
            as={Link}
            href="https://github.com/Ruan-nascimento/Morada-ApiREST"
            target="_blank"
            size="md"
            variant="bordered"
            className="border-zinc-700 text-zinc-300 hover:border-sky-500/50 hover:text-sky-300"
            startContent={<FiGithub size={18} />}
          >
            GitHub (API REST)
          </Button>
        </ScrollReveal>
      </div>

      {/* Conteúdo Detalhado */}
      <div className="flex flex-col gap-12">
        {/* Tecnologias */}
        <ScrollReveal variant="fadeUp">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-4">
            <FiLayers className="text-sky-400" size={20} />
            {t("project.tech")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <Chip
                key={tech}
                variant="flat"
                classNames={{
                  base: "bg-sky-500/10 border border-sky-500/20 px-3 py-1",
                  content: "text-sky-300 text-sm font-medium",
                }}
              >
                {tech}
              </Chip>
            ))}
          </div>
        </ScrollReveal>

        {/* O Problema */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-4">
              <FiAlertCircle className="text-sky-400" size={20} />
              {t("project.problem_label")}
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {t("project.morada.problem")}
            </p>
          </div>
        </ScrollReveal>

        {/* Funcionalidades */}
        <ScrollReveal variant="fadeUp">
          <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-4">
            <FiCheckCircle className="text-sky-400" size={20} />
            {t("project.features_label")}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-xl">
                <span className="h-5 w-5 shrink-0 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center mt-0.5">
                  <FiCheckCircle size={14} />
                </span>
                <span className="text-zinc-300 text-sm md:text-base">{feat}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* O que Aprendi */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-4">
              <FiInfo className="text-sky-400" size={20} />
              {t("project.learned_label")}
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {t("project.morada.learned")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
