import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.euruancarlos.com";

  const routes = [
    "",
    "/projetos",
    "/projetos/morada-app",
    "/projetos/guia-local-inteligente",
    "/projetos/alugando-salas",
    "/projetos/freertos-demo",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/projetos" ? 0.8 : 0.6,
  }));
}
