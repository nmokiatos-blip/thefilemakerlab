export type SeoServicePage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  longForm?: string[];
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
    longForm: [
      "FileMaker consulting is most valuable when it starts with the system you already have, not with a generic checklist. A real FileMaker solution usually contains years of business decisions, exceptions, workarounds, reports, relationships, scripts, user habits, and operational pressure. The consulting work is to understand that living system, identify what is helping, identify what is slowing the business down, and choose the smallest practical changes that improve reliability, speed, and maintainability.",
      "Nick Hunter works directly with FileMaker developers, business owners, teams, and organizations that need experienced judgment on mature systems. That can mean reviewing architecture, diagnosing a slow layout, cleaning up scripts, modernizing a legacy workflow, planning an AI-assisted process, or deciding whether a custom FileMaker plugin is the right answer. The focus is practical FileMaker development: clear decisions, better structure, and changes that make sense for the way the business actually runs.",
      "Many FileMaker systems do not need to be rebuilt from scratch. They need careful analysis, targeted cleanup, and a development path that respects the business logic already inside the file. A good consulting session can reveal why a report is slow, why a relationship chain is fragile, why a script fails under real-world use, or why a layout has become too expensive to render. From there, the work can move toward performance optimization, modernization, automation, training, or hands-on development.",
      "The FileMaker Lab also helps teams think about newer FileMaker opportunities without chasing novelty. AI-assisted development, OpenAI integration, Generate Response from Model workflows, native plugins, server-side processing, APIs, and automation can all be useful, but only when they are attached to real business needs. Consulting time can be used to plan those systems, build them, review them, or teach your team how to maintain them after the first version is working.",
      "The goal is direct FileMaker help from someone who understands both old and new FileMaker work. Nick brings more than 40 years of FileMaker development experience to architecture, troubleshooting, modernization, performance optimization, automation, AI workflows, plugin development, and training. You can start with pricing, contact the lab, or bring a specific FileMaker problem and use the first session to decide the cleanest path forward."
    ],
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
    longForm: [
      "FileMaker AI development should make FileMaker systems more useful, not more mysterious. The best AI workflows keep FileMaker in control of the data, the user experience, the review process, and the final business decision. AI can summarize, classify, extract, draft, compare, transform, and assist, but FileMaker should still provide the structure, validation, history, permissions, and operational context that make the workflow trustworthy.",
      "A practical FileMaker AI project often starts with a repeated task that consumes too much human attention. That might be extracting data from quotes, reading notes from emails, classifying incoming requests, summarizing customer history, turning free text into structured records, or helping developers inspect scripts and schema. The key is to design prompts, fields, tables, review screens, and automation steps so the output can be checked and improved instead of blindly accepted.",
      "The FileMaker Lab can help with OpenAI integration, FileMaker's Generate Response from Model workflows, document parsing, data extraction, structured JSON responses, prompt design, automation, and developer-facing AI workflows. The work can be small and focused, such as extracting line items from a quote, or broader, such as building a repeatable AI review process for support tickets, product data, internal notes, or FileMaker development analysis.",
      "AI is also useful as a development accelerator. FileMaker developers can use AI to reason about calculations, draft documentation, inspect XML exports, generate test ideas, summarize complex scripts, and compare alternative architecture decisions. Those workflows become much stronger when they are designed around FileMaker's actual constraints: context, relationships, layouts, scripts, data shape, server behavior, and user review.",
      "The point is not to add AI because it sounds modern. The point is to reduce repetitive work, make difficult information easier to use, and give FileMaker users and developers better leverage. Nick Hunter brings FileMaker consulting experience, AI-assisted development practice, automation thinking, and real-world system judgment to help decide where AI belongs, where it does not, and how to build the workflow so it survives actual use.",
      "A successful FileMaker AI workflow also needs maintenance planning. Prompts change, model behavior changes, source documents vary, and users need a way to correct output. The FileMaker Lab can help design review screens, error handling, logging, structured responses, and fallback paths so the AI workflow becomes part of the FileMaker system instead of an impressive demo that breaks when the real data arrives."
    ],
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
    longForm: [
      "FileMaker plugin development is useful when the problem needs native capability, stronger integration, better performance, or platform behavior that is difficult to achieve with scripts, WebViewers, external services, or fragile glue tools. A plugin can extend FileMaker into operating-system features, native UI, automation, file handling, advanced parsing, local processing, server workflows, or custom integrations that need to be reliable and repeatable.",
      "A good plugin project starts with a clear boundary. The question is not simply whether a plugin can be built, but whether a plugin is the cleanest way to solve the problem. Some workflows belong in FileMaker scripts. Some belong on FileMaker Server. Some belong in APIs or automation services. Some deserve a focused native extension because the workflow needs speed, platform access, tighter integration, or behavior that should not depend on a browser layer.",
      "The FileMaker Lab works with plugin thinking across macOS, Windows, and FileMaker Server. That can include C++ SDK-based plugin work, Swift-based macOS tooling, native UI experiments, automation helpers, file and media workflows, custom parsing, performance-sensitive tasks, and platform-specific behavior. The work pays attention to deployment, parity, user experience, error handling, and the way the plugin will be maintained after the first build.",
      "Native FileMaker extensions require a different mindset than ordinary layout or script work. They must respect platform APIs, memory behavior, event timing, UI expectations, security boundaries, and FileMaker's own plugin interface. When the plugin touches both macOS and Windows, parity matters: the same FileMaker-facing function should behave predictably even when the native implementation is different under the hood.",
      "Nick Hunter brings FileMaker development experience, native tooling experience, and practical consulting judgment to plugin planning and implementation. If your FileMaker system has reached the edge of built-in tools, The FileMaker Lab can help decide whether a custom plugin, a native helper, an API workflow, or a simpler FileMaker-side change is the right solution.",
      "Plugin work can also support modernization and performance goals. A focused native extension can remove repeated manual steps, handle file or media operations more reliably, improve integration with local tools, or provide a cleaner bridge between FileMaker and another system. The decision should always come back to business value, maintainability, deployment reality, and whether the plugin reduces complexity instead of adding another fragile layer."
    ],
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
    longForm: [
      "FileMaker performance optimization works best when it is treated as diagnosis, not guesswork. A slow FileMaker system can be caused by scripts, relationships, portals, unstored calculations, layout rendering, summary fields, server configuration, network behavior, record locking, data volume, indexing, or a workflow that does too much on the client. The first job is to find the real bottleneck instead of adding hardware or rewriting parts of the system blindly.",
      "Performance problems often appear in ordinary places: a report that takes too long, a layout that opens slowly, a portal that drags, a script that feels unpredictable, a find that used to be fast, or a dashboard that became expensive as the dataset grew. Each symptom needs context. The same visible delay might come from relationship evaluation, sorting, unstored calculation chains, layout object count, script structure, or server-side work happening in the wrong place.",
      "The FileMaker Lab can review slow scripts, relationship graphs, calculation dependencies, portals, layouts, reports, server-side processing, and Perform Script on Server opportunities. The goal is not to make every part of the system theoretically perfect. The goal is to identify high-impact fixes that reduce waiting, make behavior more predictable, and improve the parts of the FileMaker solution that matter most to users and the business.",
      "Sometimes performance optimization is a small technical fix. Sometimes it is architecture work. Moving one calculation, changing one relationship pattern, simplifying a layout, shifting work to the server, removing an unnecessary refresh, or restructuring a script can have more impact than a large rebuild. Mature FileMaker systems benefit from targeted decisions because they often contain valuable business logic that should not be casually thrown away.",
      "Nick Hunter brings more than 40 years of FileMaker development experience to performance work, including architecture review, scripting, modernization, automation, and server strategy. You can use consulting time to diagnose a specific slow workflow, review an entire solution, plan a performance cleanup sprint, or train your team to recognize the patterns that make FileMaker systems slower over time.",
      "Performance work should leave the team with better understanding, not just a list of edits. The FileMaker Lab can document findings, explain why specific bottlenecks matter, identify which changes are low risk, and help prioritize fixes by business impact. That makes the optimization effort more durable because the developers and users understand what changed and what patterns to avoid next time."
    ],
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
    longForm: [
      "FileMaker modernization is not the same thing as throwing away an old system. Many legacy FileMaker solutions contain years of business knowledge: pricing rules, exceptions, workflow habits, reports, customer processes, operational shortcuts, and decisions that were never fully documented anywhere else. A good modernization effort protects that logic while improving the parts of the system that have become slow, confusing, fragile, or hard to maintain.",
      "Modernization can include UI cleanup, navigation improvements, script review, schema changes, relationship graph cleanup, performance optimization, server-side processing, automation, reporting improvements, AI-assisted workflows, plugin strategy, and integration planning. The right mix depends on the system. Some files need a careful visual refresh. Others need script cleanup, table structure changes, better security, or a plan to replace brittle workarounds with stable FileMaker architecture.",
      "The safest modernization path starts with understanding. Before changing a mature FileMaker solution, it is important to learn which workflows are critical, which layouts are still used, which scripts are risky, which reports drive decisions, and which old behaviors users rely on. That discovery phase helps prevent modernization from breaking the very business process it is supposed to improve.",
      "Modernization is also a chance to add new capability. FileMaker can connect to AI workflows, APIs, native plugins, automation tools, server-side scripts, and better developer practices. Those additions should be practical, not decorative. AI might help parse documents or summarize records. Automation might remove repeated manual steps. A plugin might solve a native platform problem. Performance work might make an old workflow feel new again.",
      "Nick Hunter helps teams modernize FileMaker systems with respect for existing business logic and an eye toward future maintenance. The FileMaker Lab can help you plan the modernization, review the current architecture, identify high-risk areas, improve performance, add automation, explore AI, or move step by step toward a cleaner and more durable FileMaker solution.",
      "A modernization plan can be phased so the business keeps moving. The work might begin with documentation and architecture review, continue with performance fixes, then move toward UI cleanup, automation, AI-assisted workflows, plugin decisions, and training. This staged approach reduces risk and gives the team visible progress without forcing a disruptive rebuild before the system is understood."
    ],
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
    longForm: [
      "FileMaker training is most useful when it is connected to real work. Developers and teams do not only need abstract lessons about fields, layouts, scripts, and relationships. They need to understand why a solution becomes slow, why a script becomes fragile, why a relationship graph becomes hard to reason about, how to plan a modernization effort, and how to use newer tools such as AI and automation without losing control of the system.",
      "Training with The FileMaker Lab can focus on developers, business owners, internal teams, consultants, or project leads who need stronger FileMaker judgment. Sessions can cover architecture, scripting, calculations, layouts, data modeling, performance diagnosis, server-side processing, AI-assisted workflows, plugin strategy, automation, debugging, documentation, and modernization planning. The format can be coaching, guided review, webinar-style teaching, or hands-on work around a specific problem.",
      "Nick Hunter has more than 40 years of FileMaker development experience, which makes the training practical rather than theoretical. The lessons come from real systems: old solutions, slow systems, broken workflows, complex scripts, business rules, integrations, reporting needs, and the daily pressure of keeping a FileMaker solution useful. That experience helps teams learn not just what to do, but how to think about FileMaker decisions.",
      "Modern FileMaker training also needs to address AI, plugins, and automation. Developers can now use AI to inspect scripts, summarize structures, parse documents, generate ideas, and accelerate routine work. FileMaker systems can integrate with models, APIs, native tools, and server-side workflows. Training can help your team decide which of those tools belong in your FileMaker process and how to use them without creating fragile dependencies.",
      "The goal is stronger FileMaker confidence. Training can help a developer understand a difficult calculation, help a team clean up a legacy workflow, help a manager plan a modernization project, or help a company adopt AI-assisted development in a practical way. You can start with a focused coaching package, book consulting time, or contact The FileMaker Lab to shape training around the system and people you already have.",
      "Training can also be paired with active consulting. That means Nick can teach while reviewing a real file, explaining why a script behaves a certain way, showing how to evaluate a relationship graph, or walking through a performance issue with the team. The result is more than a lesson: it is practical improvement inside the system and stronger judgment for the people who maintain it."
    ],
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
    longForm: [
      "Nick Hunter is a FileMaker developer and consultant with more than 40 years of FileMaker development experience. His work is grounded in real FileMaker systems: business applications that have to run every day, support actual users, preserve important business logic, and keep evolving as companies change. The FileMaker Lab exists to share that experience through consulting, training, webinars, tools, AI-assisted workflows, plugin research, and practical development guidance.",
      "FileMaker has changed across decades of technology shifts, but the core challenge has stayed familiar: build useful systems around real business processes. Nick's work spans architecture, scripts, relationships, calculations, layouts, reporting, automation, performance, modernization, integrations, and user workflows. That long view is useful when a system has accumulated old decisions and needs someone who can tell the difference between valuable business logic and technical debt.",
      "The FileMaker Lab also focuses on newer development frontiers. AI-assisted FileMaker development, Generate Response from Model workflows, OpenAI integration, native plugin development, macOS and Windows tooling, server-side automation, and performance engineering are all part of the lab's work. The goal is not to chase trends, but to use modern tools where they genuinely improve FileMaker development and business workflows.",
      "Nick works with clients who need direct help: architecture review, troubleshooting, slow-system diagnosis, modernization planning, plugin strategy, AI workflow design, automation, coaching, and training. Some engagements are small and focused. Others involve deeper system review or a larger development sprint. In either case, the work starts with the actual FileMaker problem and moves toward the smallest useful path forward.",
      "The FileMaker Lab is built for people who care about FileMaker as a serious development platform. It is for developers who want better habits, business owners who need reliable systems, teams modernizing old solutions, and builders exploring AI, plugins, automation, and native tools. Nick brings the long memory of FileMaker history together with current development practice so clients can make better decisions about what to fix, what to preserve, and what to build next.",
      "That combination of history and current practice is the point of the lab. FileMaker still matters because businesses still need custom systems that match their real processes. Nick helps connect that practical FileMaker foundation to modern development methods, including AI-assisted work, native plugins, automation, performance thinking, and training that helps teams keep moving after the consulting session ends."
    ],
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
