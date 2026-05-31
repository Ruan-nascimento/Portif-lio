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
        pt: "Desenvolvedor Full Stack focado em criar aplicações web modernas, interfaces responsivas e sistemas bem estruturados. Trabalho com React, Next.js, TypeScript, Node.js e bancos de dados para transformar ideias em experiências digitais funcionais, organizadas e escaláveis.",
        en: "Full Stack Developer focused on creating modern web applications, responsive interfaces, and well-structured systems. I work with React, Next.js, TypeScript, Node.js, and databases to transform ideas into functional, organized, and scalable digital experiences.",
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
        pt: "Sou Ruan Carlos. Desenvolvo aplicações web e mobile focando em clareza, estrutura e experiência do usuário, sempre buscando um visual bem feito e código organizado.",
        en: "I'm Ruan Carlos. I develop web and mobile applications focusing on clarity, structure, and user experience, always striving for polished visuals and organized code.",
    },
    "about.card2.title": {
        pt: "O que eu faço",
        en: "What I do",
    },
    "about.card2.content": {
        pt: "Crio ecossistemas digitais completos, desde APIs REST robustas e bancos de dados relacionais até interfaces frontend dinâmicas e aplicativos móveis responsivos.",
        en: "I create complete digital ecosystems, from robust REST APIs and relational databases to dynamic frontend interfaces and responsive mobile applications.",
    },
    "about.card3.title": {
        pt: "Por que eu faço",
        en: "Why I do it",
    },
    "about.card3.content": {
        pt: "Acredito que a tecnologia deve servir a um propósito real. Transformo problemas complexos em produtos funcionais, usando cada projeto como um degrau de evolução constante.",
        en: "I believe technology should serve a real purpose. I transform complex problems into functional products, using each project as a stepping stone for constant growth.",
    },
    "about.highlight.clarity": {
        pt: "Clareza",
        en: "Clarity",
    },
    "about.highlight.security": {
        pt: "Segurança",
        en: "Security"
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
        pt: "Entrega de Valor",
        en: "Value Delivery",
    },

    "about.me": {
        pt: "Sempre amei escrever — não por vaidade simples, mas por esse antigo desejo de vestir a alma com grandeza. Brinquei de ser gente grande, de ser homem entendido, de carregar nos olhos alguma luz que ainda me faltava. Sempre quis ser bom; mais que bom, quis ser melhor. Persegui aquilo que, de tão distante, parecia feito de névoa e impossível. E ainda que minhas mãos jamais tocassem esse horizonte, eu já me daria por honrado apenas por ter caminhado em sua direção, sangrando os pés pela fé daquilo em que acreditei.",
        en: "I always loved to write — not out of simple vanity, but from that old desire to dress my soul in greatness. I played at being a grown-up, at being an knowledgeable man, at carrying in my eyes some light that I still lacked. I always wanted to be good; more than good, I wanted to be better. I pursued what, from so far away, seemed made of mist and impossible. And even if my hands never touched that horizon, I would already consider myself honored just for having walked in its direction, my feet bleeding for the faith of what I believed in."
    },
    "about.me2": {
        pt: "Escrever código, para mim, é mais que técnica: é arte lavrada em silêncio, é poesia literária erguida em tempos de guerra. É terapia disfarçada de lógica, orgulho escondido entre chaves, vírgulas e linhas quebradas. É a conquista miúda que ninguém vê, o milagre discreto de fazer nascer ordem onde antes havia erro. É enfrentar falhas constantes e, ainda assim, permanecer. É liberdade aprisionada em sintaxe, é pensamento feito máquina, é o canto da alvorada rompendo a noite escura da dúvida.",
        en: "Writing code, for me, is more than technique: it's art carved in silence, it's literary poetry raised in times of war. It's therapy disguised as logic, pride hidden between braces, commas, and broken lines. It's the small conquest that no one sees, the discreet miracle of bringing order where there was once error. It's facing constant failures and still remaining. It's freedom imprisoned in syntax, it's thought made machine, it's the song of dawn breaking through the dark night of doubt."
    },

    "about.title2": {
        pt: "Filosofia Pessoal",
        en: "Personal Philosophy",
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
        pt: "2025 - Presente",
        en: "2025 - Present",
    },
    "timeline.item1.title": {
        pt: "Graduação em Ciências da Computação",
        en: "Computer Science Graduation",
    },
    "timeline.item1.institution": {
        pt: "Centro Universitário UNINASSAU",
        en: "UNINASSAU University Center",
    },
    "timeline.item1.description": {
        pt: "Aprendizado e desenvolvimento desde boas práticas, banco de dados, web, mobile, arquitetura e system design, até algoritmos e estruturas de dados.",
        en: "Learning and development from best practices, databases, web, mobile, architecture and system design, to algorithms and data structures.",
    },
    "timeline.item3.date": {
        pt: "2021 - 2022",
        en: "2021 - 2022",
    },
    "timeline.item3.title": {
        pt: "Formação Técnica em Ciência de Dados",
        en: "Technical Training in Data Science",
    },
    "timeline.item3.institution": {
        pt: "Escola Técnica Dinamica Treinamentos (DNC)",
        en: "DNC Technical School",
    },
    "timeline.item3.description": {
        pt: "Aprofundamento e análise de dados e estatística com Python, machine learning, organização e preparação dos dados e métodos ágeis.",
        en: "In-depth analysis of data and statistics using Python, machine learning, data organization and preparation, and agile methodologies.",
    },
    "timeline.item2.date": {
        pt: "2024 - 2025",
        en: "2024 - 2025",
    },
    "timeline.item2.title": {
        pt: "Curso FullStack",
        en: "FullStack Course",
    },
    "timeline.item2.institution": {
        pt: "O Novo Programador, Escola de Programação Online",
        en: "The New Programmer, Online Programming School",
    },
    "timeline.item2.description": {
        pt: "Desenvolvimento prático e conceitos avançados em JavaScript, TypeScript, React, Node.js e banco de dados SQL/NoSQL.",
        en: "Practical development and advanced concepts in JavaScript, TypeScript, React, Node.js, and SQL/NoSQL databases.",
    },

    // ── Projects ──
    "projects.title": {
        pt: "Projetos",
        en: "Projects",
    },
    "projects.subtitle": {
        pt: "Repositórios públicos carregados direto do GitHub.",
        en: "Public repositories loaded directly from GitHub.",
    },
    "projects.btn.code": {
        pt: "Código",
        en: "Code",
    },
    "projects.error": {
        pt: "Não foi possível carregar os projetos. Tente novamente.",
        en: "Could not load projects. Please try again.",
    },
    "projects.retry": {
        pt: "Tentar novamente",
        en: "Try again",
    },
    "projects.empty": {
        pt: "Nenhum projeto encontrado no momento.",
        en: "No projects found at the moment.",
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
        pt: "Tem uma oportunidade, ideia ou projeto em mente? Entre em contato comigo. Estou aberto a colaborações, desafios e novas experiências profissionais.",
        en: "Have an opportunity, idea, or project in mind? Get in touch with me. I'm open to collaborations, challenges, and new professional experiences.",
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
        pt: "Enviar mensagem",
        en: "Send Message",
    },
    "contact.form.sent": {
        pt: "Redirecionando...",
        en: "Redirecting...",
    },
    "contact.whatsapp.message": {
        pt: "Olá Ruan Carlos, me chamo {name}...\n\n{message}",
        en: "Hi Ruan Carlos, my name is {name}...\n\n{message}",
    },
    "contact.social.title": {
        pt: "Redes e Conexões",
        en: "Networks & Connections",
    },
    "contact.social.description": {
        pt: "Me chame em qualquer uma dessas redes ou envie uma mensagem direta via WhatsApp ao lado. Costumo responder rapidamente!",
        en: "Reach out on any of these networks or send a direct message via WhatsApp on the side. I usually reply quickly!",
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

    // ── 404 ──
    "notFound.title": {
        pt: "Parece que você se perdeu",
        en: "Looks like you're lost",
    },
    "notFound.description": {
        pt: "A página que você procura não existe ou foi movida.",
        en: "The page you are looking for doesn't exist or has been moved.",
    },
    "notFound.redirect": {
        pt: "Redirecionando para a página inicial em",
        en: "Redirecting to the home page in",
    },
    "notFound.seconds": {
        pt: "segundos",
        en: "seconds",
    },
    "notFound.goHome": {
        pt: "Voltar ao Início",
        en: "Go to Home",
    },
    "notFound.goBack": {
        pt: "Página Anterior",
        en: "Go Back",
    },

    // ── Project Details (New Chaves) ──
    "project.details": {
        pt: "Detalhes do Projeto",
        en: "Project Details",
    },
    "project.tech": {
        pt: "Tecnologias Utilizadas",
        en: "Technologies Used",
    },
    "project.features_label": {
        pt: "Funcionalidades Principais",
        en: "Key Features",
    },
    "project.learned_label": {
        pt: "O que Aprendi",
        en: "What I Learned",
    },
    "project.problem_label": {
        pt: "O Problema Que Resolve",
        en: "The Problem It Solves",
    },
    "project.visit_demo": {
        pt: "Visitar Aplicação",
        en: "Visit Demo",
    },
    "project.back_projects": {
        pt: "Voltar para Projetos",
        en: "Back to Projects",
    },
    "project.back_home": {
        pt: "Voltar ao Início",
        en: "Back to Home",
    },
    "project.view_details": {
        pt: "Ver Detalhes",
        en: "View Details",
    },
    "project.page_title": {
        pt: "Projetos em Destaque",
        en: "Featured Projects",
    },
    "project.page_subtitle": {
        pt: "Explore alguns dos principais sistemas, aplicações e arquiteturas de código que desenvolvi.",
        en: "Explore some of the main systems, applications, and code architectures I have developed.",
    },

    // ── Project: Morada App ──
    "project.morada.title": {
        pt: "Morada App",
        en: "Morada App",
    },
    "project.morada.subtitle": {
        pt: "Ecossistema completo para aluguel e reserva de imóveis (Mobile & API REST)",
        en: "Complete ecosystem for property rental and reservation (Mobile & REST API)",
    },
    "project.morada.description": {
        pt: "Um aplicativo de aluguel e reserva de imóveis desenvolvido para conectar de forma ágil inquilinos e proprietários. A solução conta com um aplicativo mobile híbrido de alta performance e uma API REST robusta responsável por autenticação, armazenamento e processamento das regras de negócio.",
        en: "A property rental and reservation app developed to agilely connect tenants and owners. The solution features a high-performance hybrid mobile app and a robust REST API responsible for authentication, storage, and processing business rules.",
    },
    "project.morada.problem": {
        pt: "Imobiliárias tradicionais utilizam processos excessivamente burocráticos, lentos e baseados em papel para reservas simples de moradia. O Morada App digitaliza e simplifica este fluxo, permitindo que usuários vejam locais disponíveis, façam ofertas e gerenciem reservas com poucos toques no celular.",
        en: "Traditional real estate agencies use excessively bureaucratic, slow, and paper-based processes for simple housing reservations. Morada App digitalizes and simplifies this flow, allowing users to view available properties, make offers, and manage bookings with a few taps on their phone.",
    },
    "project.morada.learned": {
        pt: "Desenvolver esse projeto consolidou minhas habilidades em arquitetar soluções de ponta a ponta (Full Stack). Aprendi a projetar rotas seguras com JWT no back-end Express, persistência transacional com Prisma ORM e PostgreSQL, tratamento de imagens no mobile e gerenciamento de estados assíncronos no React Native com Expo.",
        en: "Developing this project consolidated my skills in architecting end-to-end (Full Stack) solutions. I learned to design secure routes with JWT in the Express back-end, transactional persistence with Prisma ORM and PostgreSQL, image processing in mobile, and asynchronous state management in React Native with Expo.",
    },
    "project.morada.features": {
        pt: "Autenticação segura via Token JWT • Busca avançada de imóveis com filtros por tipo e valor • Favoritos persistidos por usuário • Painel completo de reservas com histórico • Design mobile moderno com feedback táctil fluido",
        en: "Secure authentication via JWT Token • Advanced property search with filters by type and value • Persisted user bookmarks • Complete reservation dashboard with history • Modern mobile design with fluid tactile feedback",
    },

    // ── Project: Guia Local Inteligente ──
    "project.guia.title": {
        pt: "Guia Local Inteligente",
        en: "Guia Local Inteligente",
    },
    "project.guia.subtitle": {
        pt: "Plataforma web de geolocalização e recomendação comercial (Vite & API REST)",
        en: "Web platform for geolocation and commercial recommendation (Vite & REST API)",
    },
    "project.guia.description": {
        pt: "Uma aplicação web moderna criada para impulsionar o comércio regional e facilitar o turismo local. O projeto fornece uma interface responsiva, interativa e de carregamento extremamente rápido que exibe pontos turísticos, rotas, contatos e avaliações de estabelecimentos comerciais locais.",
        en: "A modern web application built to boost regional commerce and facilitate local tourism. The project provides a responsive, interactive, and extremely fast-loading interface that displays local sights, routes, contacts, and business reviews.",
    },
    "project.guia.problem": {
        pt: "Informações sobre pequenos comércios e locais históricos regionais frequentemente estão dispersas ou desatualizadas na internet, dificultando a vida de visitantes e moradores. O Guia Local reúne, categoriza e geolocaliza esses dados de forma centralizada e confiável.",
        en: "Information about small local businesses and regional historical sites is often scattered or outdated on the internet, making life difficult for visitors and residents. Guia Local gathers, categorizes, and geolocates this data in a centralized and reliable way.",
    },
    "project.guia.learned": {
        pt: "Com este projeto, aprofundei práticas de componentização avançada no React 19, empacotamento otimizado de assets com o Vite, TypeScript estrito para tipar as respostas de APIs de mapas, e a construção de endpoints otimizados no Express com paginação e busca textual indexada.",
        en: "With this project, I deepened advanced componentization practices in React 19, optimized asset packaging with Vite, strict TypeScript for typing map API responses, and building optimized endpoints in Express with pagination and indexed text search.",
    },
    "project.guia.features": {
        pt: "Busca preditiva inteligente com autocomplete • Rotas interativas com mapas • Sistema de avaliações com classificação por estrelas • Painel de cadastro para novos comércios • Layout responsivo adaptado para dispositivos móveis e desktops",
        en: "Smart predictive search with autocomplete • Interactive map routes • Review system with star ratings • Management panel to register new businesses • Responsive layout adapted for mobile and desktop screens",
    },

    // ── Project: Alugando Salas ──
    "project.salas.title": {
        pt: "Alugando Salas",
        en: "Alugando Salas",
    },
    "project.salas.subtitle": {
        pt: "Sistema de gerenciamento e controle de reservas acadêmicas em Python",
        en: "Academic reservation and management system in Python",
    },
    "project.salas.description": {
        pt: "Aplicação voltada para instituições acadêmicas que necessitam organizar seus espaços físicos. Desenvolvido em Python, o sistema gerencia o cadastro de recursos, salas de aula, laboratórios de informática, além de processar as reservas de horários garantindo que conflitos de alocação não ocorram.",
        en: "Application aimed at academic institutions that need to organize their physical spaces. Developed in Python, the system manages the registration of resources, classrooms, computer labs, and processes time slots, ensuring that allocation conflicts do not occur.",
    },
    "project.salas.problem": {
        pt: "A alocação de salas em escolas e universidades geralmente sofre com conflitos de horários em que dois professores ou turmas tentam reservar o mesmo laboratório simultaneamente. O projeto resolve esse problema através de algoritmos de validação temporal e relatórios de ocupação.",
        en: "Classroom allocation in schools and universities often suffers from scheduling conflicts where two teachers or classes try to reserve the same lab simultaneously. The project solves this problem through time-validation algorithms and occupancy reports.",
    },
    "project.salas.learned": {
        pt: "Este projeto foi fundamental para solidificar conceitos de algoritmos estruturados, tratamento robusto de exceções em tempo de execução, modelagem lógica de entidades inter-relacionadas e manipulação segura de sistemas de arquivos locais para persistência sem banco de dados complexo.",
        en: "This project was fundamental to solidifying structured algorithm concepts, robust runtime exception handling, logical modeling of interrelated entities, and safe manipulation of local file systems for persistence without a complex database.",
    },
    "project.salas.features": {
        pt: "Cadastro detalhado de ambientes e recursos disponíveis • Algoritmo de validação contra choque de horários • Relatórios gerenciais de ocupação e horários ociosos • Interface interativa e simplificada com tratamento de erros de digitação",
        en: "Detailed registration of available rooms and resources • Conflict-checking scheduling validation algorithm • Management reports on occupancy and idle hours • Interactive and simplified interface with input error handling",
    },

    // ── Project: FreeRTOS Demo ──
    "project.freertos.title": {
        pt: "FreeRTOS Demo",
        en: "FreeRTOS Demo",
    },
    "project.freertos.subtitle": {
        pt: "Firmware embarcado utilizando sistema operacional de tempo real (RTOS)",
        en: "Embedded firmware using a real-time operating system (RTOS)",
    },
    "project.freertos.description": {
        pt: "Demonstração prática de desenvolvimento de firmware usando o kernel FreeRTOS. O projeto aborda a divisão de software embarcado em múltiplas tarefas concorrentes, cada uma com prioridades específicas, gerenciando recursos críticos com sincronização avançada.",
        en: "Practical demonstration of firmware development using the FreeRTOS kernel. The project addresses splitting embedded software into multiple concurrent tasks, each with specific priorities, managing critical resources with advanced synchronization.",
    },
    "project.freertos.problem": {
        pt: "Programar sistemas embarcados sem um RTOS (super-loop comum) dificulta o determinismo e o processamento de tarefas em tempo real, onde certos eventos precisam ser respondidos imediatamente sem atrasos causados por outras rotinas. O FreeRTOS resolve isso com escalonamento preemptivo.",
        en: "Programming embedded systems without an RTOS (a common super-loop) hinders determinism and real-time task processing, where certain events must be responded to immediately without delays caused by other routines. FreeRTOS solves this with preemptive scheduling.",
    },
    "project.freertos.learned": {
        pt: "Este desenvolvimento consolidou minha compreensão sobre sistemas operacionais em baixo nível. Aprendi sobre troca de contexto (context switching), prioridades de tarefas, compartilhamento seguro de recursos com Mutex, sincronização com Semáforos e prevenção de problemas clássicos como inversão de prioridade e deadlock.",
        en: "This development consolidated my understanding of low-level operating systems. I learned about context switching, task priorities, safe resource sharing with Mutex, synchronization with Semaphores, and preventing classic problems like priority inversion and deadlock.",
    },
    "project.freertos.features": {
        pt: "Criação de tarefas simultâneas preemptivas • Sincronização e exclusão mútua por Mutex • Comunicação e passagem de mensagens usando Filas (Queues) • Monitoramento em tempo real de estouro de pilha (stack overflow)",
        en: "Creation of concurrent preemptive tasks • Synchronization and mutual exclusion via Mutex • Communication and message passing using Queues • Real-time task stack overflow monitoring",
    },
};
