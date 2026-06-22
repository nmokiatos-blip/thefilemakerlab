export type SeoServicePage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  highlights: string[];
  cta: {
    title: string;
    body: string;
    href: string;
    label: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export const seoPages = {
  consulting: {
    path: "/filemaker-consulting",
    title: "FileMaker Consulting with Nick Hunter | The FileMaker Lab",
    description:
      "Expert FileMaker consulting for architecture, troubleshooting, modernization, performance, AI-assisted workflows, plugins, and automation.",
    eyebrow: "FileMaker consulting",
    h1: "FileMaker Consulting with Nick Hunter",
    intro:
      "Get direct FileMaker help from Nick Hunter for architecture, troubleshooting, modernization, performance, AI-assisted workflows, plugin strategy, automation, and coaching.",
    sections: [
      {
        title: "What I can help with",
        body: "Bring the FileMaker system as it actually exists: old scripts, slow layouts, fragile relationships, half-finished automations, plugin ideas, AI questions, and business logic that cannot be casually thrown away."
      },
      {
        title: "FileMaker architecture",
        body: "Review schema, relationships, scripts, layouts, data flow, and operational pressure points so the solution is easier to understand, extend, and support."
      },
      {
        title: "Legacy FileMaker modernization",
        body: "Modernize old FileMaker systems without destroying the business rules that keep the company running."
      },
      {
        title: "FileMaker performance optimization",
        body: "Find the real causes of slow FileMaker behavior, from scripts and calculations to portals, relationships, server strategy, and PSOS opportunities."
      },
      {
        title: "FileMaker AI-assisted development",
        body: "Use AI where it helps: parsing, data extraction, repeatable developer workflows, documentation, automation, and faster development decisions."
      },
      {
        title: "FileMaker plugin development",
        body: "Plan or build custom FileMaker plugin work when native macOS, Windows, server, or advanced integration behavior is the right tool."
      },
      {
        title: "Coaching and troubleshooting",
        body: "Use sessions for focused diagnosis, code review, calculation help, script cleanup, planning, mentoring, or practical developer training."
      },
      {
        title: "Why work with Nick Hunter",
        body: "Nick brings more than 40 years of FileMaker experience, with a practical focus on real systems, architecture, plugins, AI-assisted development, automation, and performance."
      }
    ],
    highlights: [
      "FileMaker Pro consultant",
      "Architecture review",
      "Legacy modernization",
      "Performance tuning",
      "AI-assisted workflows",
      "Plugin strategy",
      "Automation",
      "Coaching"
    ],
    cta: {
      title: "Bring your FileMaker problem to the lab.",
      body: "Tell Nick what you need to build, fix, modernize, speed up, automate, or understand.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Consulting",
      label: "Book a FileMaker Consultation"
    },
    faqs: [
      {
        question: "What kind of FileMaker consulting do you provide?",
        answer:
          "Nick helps with FileMaker architecture, troubleshooting, modernization, performance optimization, AI-assisted workflows, plugin development, automation, training, and coaching."
      },
      {
        question: "Do you work on old FileMaker systems?",
        answer:
          "Yes. Legacy FileMaker systems are welcome, including slow systems, messy systems, older business logic, fragile scripts, and solutions that need modernization without breaking daily operations."
      },
      {
        question: "Can you help with FileMaker AI development?",
        answer:
          "Yes. Consulting can include FileMaker AI workflows, OpenAI integration, Generate Response from Model workflows, data extraction, document parsing, and automation."
      },
      {
        question: "Do you build FileMaker plugins?",
        answer:
          "Yes. Nick works on custom FileMaker plugin development for macOS, Windows, FileMaker Server, automation, native UI, and advanced integrations."
      }
    ]
  },
  aiDevelopment: {
    path: "/filemaker-ai-development",
    title: "FileMaker AI Development | The FileMaker Lab",
    description:
      "AI-assisted FileMaker development, OpenAI integration, Generate Response from Model workflows, automation, and intelligent FileMaker systems.",
    eyebrow: "FileMaker AI development",
    h1: "FileMaker AI Development",
    intro:
      "Build practical AI-assisted FileMaker workflows that extract data, parse documents, support developers, automate routine work, and connect FileMaker to modern model-driven systems.",
    sections: [
      {
        title: "AI-assisted FileMaker workflows",
        body: "Design repeatable workflows where FileMaker controls the data, the prompts, the review step, and the business process."
      },
      {
        title: "Generate Response from Model",
        body: "Use FileMaker-native AI features for controlled prompts, structured responses, summarization, classification, and practical automation."
      },
      {
        title: "Data extraction",
        body: "Extract useful information from emails, PDFs, quotes, notes, product descriptions, orders, or other messy source material."
      },
      {
        title: "Quote and document parsing",
        body: "Turn documents into structured data that FileMaker users can review, correct, approve, and reuse."
      },
      {
        title: "Automation",
        body: "Use AI to reduce repetitive work while keeping FileMaker as the system of record and the place where users make final decisions."
      },
      {
        title: "AI as a development accelerator, not a gimmick",
        body: "The goal is better FileMaker work: clearer scripts, faster iteration, stronger analysis, better documentation, and useful tools for the people maintaining the system."
      }
    ],
    highlights: [
      "OpenAI integration",
      "Generate Response from Model",
      "Document parsing",
      "Data extraction",
      "Developer workflows",
      "Automation"
    ],
    cta: {
      title: "Add AI where it earns its keep.",
      body: "Use AI to make FileMaker workflows faster, clearer, and more useful without turning the system into a black box.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20AI%20Development",
      label: "Discuss AI Development"
    }
  },
  pluginDevelopment: {
    path: "/filemaker-plugin-development",
    title: "FileMaker Plugin Development | macOS, Windows & Server Plugins",
    description:
      "Custom FileMaker plugin development for macOS, Windows, FileMaker Server, automation, native UI, and advanced integrations.",
    eyebrow: "FileMaker plugin development",
    h1: "FileMaker Plugin Development",
    intro:
      "Build custom FileMaker plugins and native tools for macOS, Windows, FileMaker Server, automation, native UI, advanced integrations, and workflows that need more than glue code.",
    sections: [
      {
        title: "Custom FileMaker plugins",
        body: "Plan and build focused FileMaker plugins for system-specific capabilities, integrations, automation, and native functionality."
      },
      {
        title: "Native macOS tools",
        body: "Use native macOS APIs and platform behavior when FileMaker needs local capability, interface behavior, or system integration."
      },
      {
        title: "Windows/server support",
        body: "Design plugin behavior with Windows and FileMaker Server realities in mind, including deployment, parity, and operational reliability."
      },
      {
        title: "C++ / Swift / SDK-based development",
        body: "Use the right native development layer for the plugin job, from C++ SDK work to Swift-based macOS tooling."
      },
      {
        title: "Automation and native UI",
        body: "Extend FileMaker with native automation, helper tools, panels, file handling, rendering, or integration surfaces."
      },
      {
        title: "When a plugin is better than JavaScript or external glue tools",
        body: "Some problems need native execution, stronger integration, platform APIs, server support, or better performance than a WebViewer or chained service can provide."
      }
    ],
    highlights: [
      "macOS plugins",
      "Windows plugins",
      "FileMaker Server",
      "C++",
      "Swift",
      "Native UI",
      "Automation"
    ],
    cta: {
      title: "Explore a custom plugin path.",
      body: "If FileMaker has reached the edge of what built-in tools can do cleanly, a focused plugin may be the right move.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Plugin%20Development",
      label: "Talk Plugin Development"
    }
  },
  performance: {
    path: "/filemaker-performance-optimization",
    title: "FileMaker Performance Optimization | The FileMaker Lab",
    description:
      "Improve slow FileMaker systems with performance analysis, architecture review, script optimization, schema cleanup, and server strategy.",
    eyebrow: "FileMaker performance",
    h1: "FileMaker Performance Optimization",
    intro:
      "Slow FileMaker systems usually have specific causes. The work is to find them, measure them, and fix the parts that actually move performance.",
    sections: [
      {
        title: "Why FileMaker systems get slow",
        body: "Performance problems often come from accumulated decisions: relationship graphs, unstored calculations, layout objects, portal behavior, scripts, server settings, and data volume."
      },
      {
        title: "Scripts",
        body: "Review slow scripts, loops, finds, sorts, commit behavior, context switching, import/export flows, and unnecessary client-side work."
      },
      {
        title: "Relationships",
        body: "Inspect relationship graph pressure, unstored dependencies, cross-context references, and design patterns that cause extra evaluation."
      },
      {
        title: "Portals",
        body: "Fix slow layouts and portals by examining data volume, sorting, filtering, unstored fields, refresh behavior, and rendering cost."
      },
      {
        title: "Calculations",
        body: "Identify expensive calculations, unstored logic, dependency chains, summary fields, and places where structure beats cleverness."
      },
      {
        title: "Server-side processing",
        body: "Move the right work to FileMaker Server when it reduces client load and improves reliability."
      },
      {
        title: "PSOS",
        body: "Use Perform Script on Server where it makes sense, with attention to context, error handling, transactions, and user experience."
      },
      {
        title: "Architecture review",
        body: "Performance work is often architecture work. The best fix may be a small structural change instead of more hardware or more waiting."
      }
    ],
    highlights: [
      "Slow FileMaker systems",
      "Script optimization",
      "Schema cleanup",
      "Portals",
      "Calculations",
      "PSOS",
      "Server strategy"
    ],
    cta: {
      title: "Find the real bottleneck.",
      body: "Bring the slow workflow, report, layout, or script. The first job is diagnosis, not guessing.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Performance%20Optimization",
      label: "Optimize Performance"
    }
  },
  modernization: {
    path: "/filemaker-modernization",
    title: "FileMaker Modernization | Upgrade Legacy FileMaker Systems",
    description:
      "Modernize old FileMaker solutions without destroying the business logic: UI, architecture, performance, AI, automation, and plugins.",
    eyebrow: "FileMaker modernization",
    h1: "FileMaker Modernization",
    intro:
      "Modernize legacy FileMaker systems carefully: preserve the business logic, improve the structure, clean up the UI, add useful automation, and make the system easier to maintain.",
    sections: [
      {
        title: "Update old FileMaker solutions",
        body: "Move older systems toward modern FileMaker practices while respecting the reasons they survived this long."
      },
      {
        title: "Preserve business logic",
        body: "The business rules matter. Modernization should reveal and protect them before rebuilding anything around them."
      },
      {
        title: "Improve UI",
        body: "Refresh layouts, navigation, workflow screens, reporting surfaces, and user paths without losing speed or clarity."
      },
      {
        title: "Improve performance",
        body: "Modernization is a chance to address slow scripts, heavy layouts, calculation pressure, relationship complexity, and server strategy."
      },
      {
        title: "Add AI",
        body: "Add AI-assisted workflows for extraction, summarization, classification, documentation, support, and developer acceleration where they fit the business process."
      },
      {
        title: "Add automation",
        body: "Replace repetitive manual work with reliable FileMaker scripts, server-side workflows, integrations, and reviewable processes."
      },
      {
        title: "Replace fragile hacks with stable architecture",
        body: "Modern systems need understandable structure, fewer brittle dependencies, and cleaner boundaries between FileMaker, plugins, APIs, and automation tools."
      }
    ],
    highlights: [
      "Legacy FileMaker systems",
      "UI cleanup",
      "Architecture",
      "Performance",
      "AI",
      "Automation",
      "Stable architecture"
    ],
    cta: {
      title: "Modernize without breaking the business.",
      body: "The right path starts with understanding what the current system really does.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Modernization",
      label: "Plan Modernization"
    }
  },
  training: {
    path: "/filemaker-training",
    title: "FileMaker Training with Nick Hunter | The FileMaker Lab",
    description:
      "FileMaker training and coaching with Nick Hunter covering development, architecture, AI workflows, automation, plugins, modernization, and performance.",
    eyebrow: "FileMaker training",
    h1: "FileMaker Training with Nick Hunter",
    intro:
      "Learn practical FileMaker development from Nick Hunter through focused training, coaching, webinars, and real-world troubleshooting sessions.",
    sections: [
      {
        title: "FileMaker training for real systems",
        body: "Training is grounded in the work developers and teams actually face: scripts, relationships, layouts, reporting, performance, automation, integrations, and legacy decisions."
      },
      {
        title: "Developer coaching",
        body: "Use one-on-one coaching to sharpen FileMaker habits, understand architecture, improve debugging, and make better development decisions."
      },
      {
        title: "FileMaker AI training",
        body: "Learn how to use AI-assisted workflows for parsing, analysis, documentation, automation, and faster development without losing control of the system."
      },
      {
        title: "Plugin and native tooling training",
        body: "Understand when FileMaker plugins, native tools, APIs, or server workflows are the cleanest path for a hard problem."
      },
      {
        title: "Performance training",
        body: "Learn how to diagnose slow FileMaker systems by looking at scripts, portals, calculations, relationships, layouts, server strategy, and PSOS."
      },
      {
        title: "Modernization training",
        body: "Learn how to approach older FileMaker solutions carefully, preserve business logic, and move systems toward cleaner architecture."
      }
    ],
    highlights: [
      "FileMaker training",
      "Developer coaching",
      "AI workflows",
      "Architecture",
      "Performance",
      "Modernization",
      "Plugins",
      "Automation"
    ],
    cta: {
      title: "Build stronger FileMaker habits.",
      body: "Use training time for coaching, architecture review, AI workflows, troubleshooting, performance, modernization, or plugin strategy.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Training",
      label: "Work With Nick"
    }
  },
  webinars: {
    path: "/filemaker-webinars",
    title: "FileMaker Webinars & Training | The FileMaker Lab",
    description:
      "FileMaker webinars and training by Nick Hunter covering AI, plugins, performance, architecture, modernization, automation, and real-world development.",
    eyebrow: "FileMaker webinars and training",
    h1: "FileMaker Webinars & Training",
    intro:
      "Learn FileMaker through practical webinars and training sessions with Nick Hunter, focused on AI, plugins, performance, architecture, modernization, automation, and real-world development.",
    sections: [
      {
        title: "Upcoming webinars",
        body: "Live sessions will focus on practical FileMaker topics that matter to developers, business owners, and teams maintaining real systems."
      },
      {
        title: "Recorded webinars",
        body: "Recorded sessions will become a library of focused FileMaker training that can be revisited when the problem shows up in your own work."
      },
      {
        title: "FileMaker AI",
        body: "Training on AI-assisted FileMaker workflows, prompt design, data extraction, Generate Response from Model, and developer acceleration."
      },
      {
        title: "Plugin development",
        body: "Sessions on when native plugins make sense, how to think about platform behavior, and how plugin work can extend FileMaker cleanly."
      },
      {
        title: "Performance",
        body: "Practical performance diagnosis for scripts, layouts, portals, calculations, server-side processing, PSOS, and architecture."
      },
      {
        title: "Architecture",
        body: "Training on structure, dependency management, modular thinking, and how to reason about mature FileMaker systems."
      },
      {
        title: "Modernization",
        body: "Learn how to approach older FileMaker systems without throwing away the business knowledge inside them."
      },
      {
        title: "Coaching",
        body: "Use training and coaching for focused developer growth, project planning, troubleshooting, and stronger FileMaker habits."
      }
    ],
    highlights: [
      "Upcoming webinars",
      "Recorded webinars",
      "Training",
      "FileMaker AI",
      "Plugins",
      "Performance",
      "Architecture",
      "Coaching"
    ],
    cta: {
      title: "Ask about training or webinars.",
      body: "Suggest a topic, request coaching, or bring a real FileMaker challenge into a future session.",
      href: "mailto:hello@thefilemakerlab.com?subject=FileMaker%20Webinars%20and%20Training",
      label: "Contact Nick"
    }
  },
  aboutNick: {
    path: "/about-nick-hunter",
    title: "About Nick Hunter | FileMaker Developer & Consultant",
    description:
      "Nick Hunter is a FileMaker developer and consultant with more than 40 years of experience in FileMaker architecture, plugins, AI, and modernization.",
    eyebrow: "About Nick Hunter",
    h1: "About Nick Hunter",
    intro:
      "Nick Hunter has been a FileMaker developer for more than 40 years. He works on real-world FileMaker systems, architecture, modernization, AI-assisted development, plugin development, performance optimization, automation, and training.",
    sections: [
      {
        title: "40+ years of FileMaker development",
        body: "Nick has worked through decades of FileMaker evolution, from practical business databases to modern systems connected to AI, APIs, native code, plugins, automation, and server workflows."
      },
      {
        title: "Real-world FileMaker systems",
        body: "The work is grounded in production systems: messy scripts, old business rules, performance pressure, user workflows, integrations, and the decisions that have to survive Monday morning."
      },
      {
        title: "Architecture and modernization",
        body: "Nick helps teams understand and modernize FileMaker systems without losing the business knowledge embedded inside them."
      },
      {
        title: "AI-assisted development",
        body: "The FileMaker Lab explores AI as a practical development accelerator for analysis, parsing, documentation, automation, and smarter workflows."
      },
      {
        title: "Plugin development",
        body: "Nick also works on FileMaker plugin development and native tooling for macOS, Windows, server workflows, and advanced integrations."
      },
      {
        title: "Performance, automation, and training",
        body: "Consulting sessions can focus on performance optimization, automation design, developer coaching, webinars, training, and troubleshooting."
      }
    ],
    highlights: [
      "FileMaker developer",
      "FileMaker consultant",
      "40+ years experience",
      "Architecture",
      "Plugins",
      "AI",
      "Modernization",
      "Training"
    ],
    cta: {
      title: "Work directly with Nick.",
      body: "Use consulting time for architecture, troubleshooting, modernization, AI-assisted development, plugins, performance, automation, or training.",
      href: "mailto:hello@thefilemakerlab.com?subject=Work%20with%20Nick%20Hunter",
      label: "Contact Nick"
    }
  }
} satisfies Record<string, SeoServicePage>;

export const majorSeoLinks = [
  { href: "/filemaker-consulting", label: "FileMaker Consulting" },
  { href: "/pricing", label: "FileMaker Consulting Pricing" },
  { href: "/filemaker-ai-development", label: "FileMaker AI Development" },
  {
    href: "/filemaker-plugin-development",
    label: "FileMaker Plugin Development"
  },
  {
    href: "/filemaker-performance-optimization",
    label: "FileMaker Performance Optimization"
  },
  { href: "/filemaker-modernization", label: "FileMaker Modernization" },
  { href: "/filemaker-training", label: "FileMaker Training" },
  { href: "/filemaker-webinars", label: "FileMaker Webinars" },
  { href: "/about-nick-hunter", label: "About Nick Hunter" }
];
