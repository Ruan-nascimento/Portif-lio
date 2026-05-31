"use client";

import React from "react";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ruan Carlos",
    "alternateName": "Ruan Carlos Nascimento",
    "url": "https://www.euruancarlos.com",
    "image": "https://github.com/Ruan-nascimento.png",
    "jobTitle": "Desenvolvedor Full Stack",
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "React Native",
      "Python",
      "Git",
      "REST APIs",
      "Web Development"
    ],
    "sameAs": [
      "https://github.com/Ruan-nascimento",
      "https://www.linkedin.com/in/ruan-carlos-nascimento-07a146354/",
      "https://www.instagram.com/ruan_carlosrcn/"
    ],
    "nationality": {
      "@type": "Country",
      "name": "Brazil"
    },
    "description": "Portfólio de Ruan Carlos, desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js, APIs e aplicações web modernas."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ruan Carlos | Desenvolvedor Full Stack",
    "url": "https://www.euruancarlos.com",
    "author": "Ruan Carlos",
    "description": "Portfólio de Ruan Carlos, desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js, APIs e aplicações web modernas."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
