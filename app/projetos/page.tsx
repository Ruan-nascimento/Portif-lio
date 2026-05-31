"use client";

import { Card, CardBody, CardFooter, Chip, Button } from "@heroui/react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function ProjetosPage() {
  const { t } = useLanguage();

  const featuredProjects = [
    {
      slug: "morada-app",
      title: t("project.morada.title"),
      subtitle: t("project.morada.subtitle"),
      techs: ["React Native", "Expo", "Node.js", "Prisma", "PostgreSQL"],
      description: t("project.morada.description"),
    },
    {
      slug: "guia-local-inteligente",
      title: t("project.guia.title"),
      subtitle: t("project.guia.subtitle"),
      techs: ["React", "TypeScript", "Vite", "Node.js", "Express"],
      description: t("project.guia.description"),
    },
    {
      slug: "alugando-salas",
      title: t("project.salas.title"),
      subtitle: t("project.salas.subtitle"),
      techs: ["Python", "Algorithms", "Terminal UI", "File Persistence"],
      description: t("project.salas.description"),
    },
    {
      slug: "freertos-demo",
      title: t("project.freertos.title"),
      subtitle: t("project.freertos.subtitle"),
      techs: ["C", "FreeRTOS", "Firmware", "Embedded Systems"],
      description: t("project.freertos.description"),
    },
  ];

  return (
    <main className="min-h-screen py-20 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Botão Voltar */}
      <div className="mb-12">
        <Button
          as={Link}
          href="/"
          variant="flat"
          size="sm"
          className="bg-zinc-800/40 text-zinc-300 hover:text-sky-300 hover:bg-sky-500/10 border border-zinc-700/40"
          startContent={<FiArrowLeft size={16} />}
        >
          {t("project.back_home")}
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
        <ScrollReveal variant="fadeUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="gradient-text">{t("project.page_title")}</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            {t("project.page_subtitle")}
          </p>
        </ScrollReveal>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            delay={index * 0.1}
            variant="fadeUp"
          >
            <Card className="glass-card h-full border-zinc-800/50 bg-zinc-900/30 flex flex-col group transition-all duration-300 hover:border-sky-500/20 hover:shadow-lg hover:shadow-sky-500/5">
              <CardBody className="flex flex-col gap-4 p-6 flex-1">
                {/* Nome */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400/80 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Techs */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                  {project.techs.map((tech) => (
                    <Chip
                      key={tech}
                      size="sm"
                      variant="flat"
                      classNames={{
                        base: "bg-zinc-800/60 border border-zinc-700/40",
                        content: "text-zinc-400 text-xs",
                      }}
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  as={Link}
                  href={`/projetos/${project.slug}`}
                  size="md"
                  className="w-full bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 font-semibold border border-sky-500/20 transition-all group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-sky-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-sky-500/25"
                  endContent={<FiArrowRight size={16} />}
                >
                  {t("project.view_details")}
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
