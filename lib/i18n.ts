/**
 * Dicionário de traduções PT-BR ↔ EN para todo o portfólio.
 * Chave = identificador único, valor = tradução por locale.
 */

export type Locale = "pt" | "en";

export const translations: Record<string, Record<Locale, string>> = {
    // ── Hero ──
    "hero.tag": {
        pt: "Portfólio Pessoal",
        en: "Personal Portfolio",
    },
    "hero.greeting": {
        pt: "Olá, eu sou",
        en: "Hi, I'm",
    },
    "hero.cta.projects": {
        pt: "Ver Projetos",
        en: "View Projects",
    },
    "hero.cta.github": {
        pt: "Abrir GitHub",
        en: "Open GitHub",
    },
    "hero.scroll": {
        pt: "Role para explorar",
        en: "Scroll to explore",
    },
    "hero.description": {
        pt: "Desenvolvedor e criador de projetos web. Construo aplicações com foco em clareza, organização e experiência do usuário.",
        en: "Developer and web project creator. I build applications focused on clarity, organization and user experience.",
    },

    // ── About ──
    "about.title": {
        pt: "Sobre mim",
        en: "About me",
    },
    "about.card1.title": {
        pt: "Quem eu sou",
        en: "Who I am",
    },
    "about.card1.content": {
        pt: "Sou o Ruan Carlos. Gosto de construir soluções práticas e evoluir com projetos reais, sempre buscando um visual bem feito e código organizado.",
        en: "I'm Ruan Carlos. I enjoy building practical solutions and evolving through real projects, always striving for polished visuals and clean code.",
    },
    "about.card2.title": {
        pt: "O que eu faço",
        en: "What I do",
    },
    "about.card2.content": {
        pt: "Crio aplicações web e sistemas (ex.: filas, autenticação, gestão) com foco em usabilidade e experiências claras.",
        en: "I create web applications and systems (e.g. queues, auth, management) focused on usability and clear experiences.",
    },
    "about.card3.title": {
        pt: "Por que eu faço",
        en: "Why I do it",
    },
    "about.card3.content": {
        pt: "Porque curto transformar problema em produto funcionando. Cada projeto vira um degrau: mais técnica, mais repertório e mais confiança no que entrego.",
        en: "Because I love turning problems into working products. Every project is a step forward: more technique, more repertoire, and more confidence in what I deliver.",
    },
    "about.highlight.clarity": {
        pt: "Clareza",
        en: "Clarity",
    },
    "about.highlight.organization": {
        pt: "Organização",
        en: "Organization",
    },
    "about.highlight.ux": {
        pt: "Experiência do usuário",
        en: "User experience",
    },
    "about.highlight.delivery": {
        pt: "Entrega",
        en: "Delivery",
    },

    // ── Timeline ──
    "timeline.title": {
        pt: "Cursos e formações",
        en: "Courses & Education",
    },
    "timeline.subtitle": {
        pt: "Minha jornada de aprendizado e evolução.",
        en: "My learning and growth journey.",
    },
    "timeline.item1.date": {
        pt: "2024 - Presente",
        en: "2024 - Present",
    },
    "timeline.item1.title": {
        pt: "Desenvolvimento Full Stack",
        en: "Full Stack Development",
    },
    "timeline.item1.institution": {
        pt: "Projetos Pessoais & Freelance",
        en: "Personal Projects & Freelance",
    },
    "timeline.item1.description": {
        pt: "Construção de aplicações completas com Next.js, TypeScript, Prisma e PostgreSQL. Foco em boas práticas, arquitetura limpa e deploy em produção.",
        en: "Building complete applications with Next.js, TypeScript, Prisma and PostgreSQL. Focus on best practices, clean architecture and production deployment.",
    },
    "timeline.item2.date": {
        pt: "2023 - 2024",
        en: "2023 - 2024",
    },
    "timeline.item2.title": {
        pt: "Formação em Desenvolvimento Web",
        en: "Web Development Training",
    },
    "timeline.item2.institution": {
        pt: "Estudo Autodidata & Cursos Online",
        en: "Self-taught & Online Courses",
    },
    "timeline.item2.description": {
        pt: "Aprofundamento em React, Node.js, bancos de dados e ferramentas modernas de desenvolvimento. Certificações e projetos práticos entregues.",
        en: "Deep dive into React, Node.js, databases and modern development tools. Certifications and practical projects delivered.",
    },
    "timeline.item3.date": {
        pt: "2022 - 2023",
        en: "2022 - 2023",
    },
    "timeline.item3.title": {
        pt: "Fundamentos de Programação",
        en: "Programming Fundamentals",
    },
    "timeline.item3.institution": {
        pt: "Primeiros Passos",
        en: "First Steps",
    },
    "timeline.item3.description": {
        pt: "Início dos estudos em lógica de programação, HTML, CSS, JavaScript e versionamento com Git.",
        en: "Started studying programming logic, HTML, CSS, JavaScript and version control with Git.",
    },

    // ── Projects ──
    "projects.title": {
        pt: "Projetos",
        en: "Projects",
    },
    "projects.subtitle": {
        pt: "Sistemas e aplicações que construí e trabalhei.",
        en: "Systems and applications I've built and worked on.",
    },
    "projects.filter.all": {
        pt: "Todos",
        en: "All",
    },
    "projects.filter.completed": {
        pt: "Concluídos",
        en: "Completed",
    },
    "projects.filter.worked": {
        pt: "Trabalhei",
        en: "Worked on",
    },
    "projects.status.completed": {
        pt: "Concluído",
        en: "Completed",
    },
    "projects.status.worked": {
        pt: "Trabalhei",
        en: "Worked on",
    },
    "projects.btn.code": {
        pt: "Código",
        en: "Code",
    },

    // ── GitHub ──
    "github.title": {
        pt: "Projetos do GitHub",
        en: "GitHub Projects",
    },
    "github.subtitle": {
        pt: "Repositórios públicos atualizados automaticamente.",
        en: "Public repositories updated automatically.",
    },
    "github.error": {
        pt: "Não foi possível carregar os repositórios.",
        en: "Could not load repositories.",
    },
    "github.cta": {
        pt: "Abrir GitHub",
        en: "Open GitHub",
    },

    // ── Contact ──
    "contact.title": {
        pt: "Contato",
        en: "Contact",
    },
    "contact.subtitle": {
        pt: "Quer conversar? Me manda uma mensagem ou me encontra nas redes.",
        en: "Want to chat? Send me a message or find me on social media.",
    },
    "contact.form.name": {
        pt: "Seu nome",
        en: "Your name",
    },
    "contact.form.name.placeholder": {
        pt: "Ex: João Silva",
        en: "e.g. John Smith",
    },
    "contact.form.email": {
        pt: "Seu e-mail",
        en: "Your email",
    },
    "contact.form.message": {
        pt: "Mensagem",
        en: "Message",
    },
    "contact.form.message.placeholder": {
        pt: "Escreva sua mensagem aqui...",
        en: "Write your message here...",
    },
    "contact.form.submit": {
        pt: "Enviar",
        en: "Send",
    },
    "contact.form.sent": {
        pt: "Mensagem preparada!",
        en: "Message prepared!",
    },
    "contact.social.title": {
        pt: "Me encontra aqui",
        en: "Find me here",
    },
    "contact.social.description": {
        pt: "Estou sempre aberto a novas conexões. Me chama em qualquer uma dessas redes — respondo rápido!",
        en: "I'm always open to new connections. Reach out on any of these — I reply fast!",
    },
    "contact.mailto.subject": {
        pt: "Contato via Portfólio",
        en: "Contact from Portfolio",
    },

    // ── Footer ──
    "footer.made": {
        pt: "Feito com",
        en: "Made with",
    },

    // ── Nav ──
    "nav.inicio": {
        pt: "Início",
        en: "Home",
    },
    "nav.sobre": {
        pt: "Sobre",
        en: "About",
    },
    "nav.formacoes": {
        pt: "Formações",
        en: "Education",
    },
    "nav.projetos": {
        pt: "Projetos",
        en: "Projects",
    },
    "nav.github": {
        pt: "GitHub",
        en: "GitHub",
    },
    "nav.contato": {
        pt: "Contato",
        en: "Contact",
    },
};
