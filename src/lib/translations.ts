export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      roles: [
        "Full Stack Engineer | Node.js • React • Next.js",
        "Backend Engineer | APIs • Microservices • Node.js",
        "Frontend Engineer | React • Next.js • UI/UX",
        "Chatbot Engineer | Automation • AI • Integrations",
      ],
      description:
        "I develop scalable applications using modern JavaScript technologies, focusing on performance, maintainability, and user experience.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      scroll: "Scroll",
    },
    about: {
      label: "About Me",
      title: "Turning ideas into reliable software",
      bio: [
        "Hello! I'm a Full Stack Developer specialized in building chatbot solutions and automation systems using JavaScript, Node.js, and modern web technologies.",
        "Currently working at Central IT, developing chatbot solutions integrated with the CITSmart platform for customer service and service management.",
        "Focused on API integrations (REST/WebSocket), workflow automation, and conversational systems that reduce manual workload and improve response efficiency.",
      ],
      location: "Brazil — open to remote opportunities",
      stats: [
        { value: "2+", label: "Years of Experience" },
        { value: "5+", label: "Projects Built" },
        { value: "10+", label: "Technologies" },
      ],
      quickFacts: "Quick Facts",
      facts: [
        "Building scalable applications with Next.js and Node.js",
        "Developing chatbot automations and integrations",
        "Working with REST APIs and event-driven systems",
        "Focused on clean architecture and performance",
      ],
      contactMe: "Contact Me",
    },
    skills: {
      label: "Tech Stack",
      title: "Stack & Technologies",
      description: "Technologies I use to design, build and ship full stack applications.",
      coreStack: "Core Stack",
      categories: [
        { category: "Frontend", subtitle: "Interfaces & UI" },
        { category: "Backend & APIs", subtitle: "Server, Integrations & Data" },
        { category: "Tools & Workflow", subtitle: "DevOps & Productivity" },
      ],
    },
    projects: {
      label: "Projects",
      title: "Building in public",
      description:
        "I am actively working on real-world projects involving chatbot automation, API integrations, and scalable web applications.",
      comingSoon: "Projects will be available soon — stay tuned.",
      seeMore: "See more on GitHub",
      impact: "Impact",
      // ── To add a project: fill in a new object in the items array below   ──
      // ── and add its metadata (tags, repoUrl, liveUrl) in constants/projects.ts ──
      items: [
        {
          id: 1,
          title: "CITSmart Chatbot Automation",
          description:
            "Chatbot solution integrated with the CITSmart platform, automating customer service workflows via REST and WebSocket APIs.",
          impact:
            "Reduced manual ticket handling time by 60%, improving team response efficiency.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's connect",
      description: "I'm currently open to new opportunities as a Full-Stack or Front-End Developer.",
      description2: "Feel free to reach out if you have a role, project, or just want to connect.",
      emailLabel: "Email",
      responseTime: "Typically responds within 24 hours",
      findMeOn: "Find me on",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about the opportunity, project, or how I can help...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent ✓",
        errors: {
          nameRequired: "Name is required.",
          emailRequired: "Email is required.",
          emailInvalid: "Please enter a valid email address.",
          messageRequired: "Message is required.",
          submitError: "Something went wrong. Please try again.",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para oportunidades",
      greeting: "Olá, eu sou",
      roles: [
        "Engenheiro Full Stack | Node.js • React • Next.js",
        "Engenheiro Backend | APIs • Microsserviços • Node.js",
        "Engenheiro Frontend | React • Next.js • UI/UX",
        "Engenheiro de Chatbot | Automação • IA • Integrações",
      ],
      description:
        "Desenvolvo aplicações escaláveis utilizando tecnologias modernas como JavaScript, focando em performance, manutenção e experiência do usuário.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
      scroll: "Descer",
    },
    about: {
      label: "Sobre Mim",
      title: "Transformando ideias em software confiável",
      bio: [
        "Olá! Sou um Desenvolvedor Full Stack especializado em soluções de chatbot e sistemas de automação utilizando JavaScript, Node.js e tecnologias web modernas.",
        "Atualmente trabalho na Central IT, desenvolvendo soluções de chatbot integradas à plataforma CITSmart para atendimento ao cliente e gestão de serviços.",
        "Focado em integrações via API (REST/WebSocket), automação de workflows e sistemas conversacionais que reduzem o trabalho manual e melhoram a eficiência no atendimento.",
      ],
      location: "Brasil — aberto a novas oportunidades",
      stats: [
        { value: "2+", label: "Anos de Experiência" },
        { value: "5+", label: "Projetos Entregues" },
        { value: "10+", label: "Tecnologias" },
      ],
      quickFacts: "Destaques",
      facts: [
        "Construindo aplicações escaláveis com Next.js e Node.js",
        "Desenvolvendo automações e integrações com chatbots",
        "Trabalhando com REST APIs e sistemas orientados a eventos",
        "Focado em arquitetura limpa e performance",
      ],
      contactMe: "Fale Comigo",
    },
    skills: {
      label: "Habilidades",
      title: "Stack & Tecnologias",
      description: "Tecnologias que utilizo para projetar, construir e entregar aplicações full stack.",
      coreStack: "Stack Principal",
      categories: [
        { category: "Frontend", subtitle: "Interfaces & UI" },
        { category: "Backend & APIs", subtitle: "Servidor, Integrações & Dados" },
        { category: "Ferramentas & Workflow", subtitle: "DevOps & Produtividade" },
      ],
    },
    projects: {
      label: "Projetos",
      title: "Construindo soluções reais",
      description:
        "Estou ativamente trabalhando em projetos reais envolvendo automação de chatbots, integrações via API e aplicações web escaláveis.",
      comingSoon: "Projetos em breve — fique ligado.",
      seeMore: "Ver mais no GitHub",
      impact: "Impacto",
      // ── Para adicionar um projeto: preencha um novo objeto no array items abaixo ──
      // ── e adicione os metadados (tags, repoUrl, liveUrl) em constants/projects.ts ──
      items: [
        {
          id: 1,
          title: "Automação de Chatbot CITSmart",
          description:
            "Solução de chatbot integrada à plataforma CITSmart, automatizando fluxos de atendimento via APIs REST e WebSocket.",
          impact:
            "Reduziu em 60% o tempo de triagem manual de chamados, aumentando a eficiência da equipe.",
        },
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      description: "Estou aberto a novas oportunidades como Desenvolvedor Full-Stack ou Front-End.",
      description2: "Fique à vontade para entrar em contato se tiver uma vaga, projeto ou quiser trocar uma ideia.",
      emailLabel: "E-mail",
      responseTime: "Respondo em até 24 horas",
      findMeOn: "Me encontre em",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "seu@email.com",
        message: "Mensagem",
        messagePlaceholder: "Fale sobre a oportunidade, projeto ou como posso ajudar...",
        send: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada ✓",
        errors: {
          nameRequired: "Nome é obrigatório.",
          emailRequired: "E-mail é obrigatório.",
          emailInvalid: "Por favor, insira um e-mail válido.",
          messageRequired: "Mensagem é obrigatória.",
          submitError: "Algo deu errado. Tente novamente.",
        },
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
};

export type Translations = typeof translations.en;
