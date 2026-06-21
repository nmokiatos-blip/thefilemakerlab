export const navItems = [
  { href: "/", label: "Home" },
  { href: "/webinars", label: "Webinars" },
  { href: "/lab-notes", label: "Lab Notes" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const labAreas = [
  {
    title: "FileMaker + AI",
    eyebrow: "Prompted systems",
    description:
      "Design repeatable AI workflows for schema review, scripting, data transformation, and developer decision support.",
    accent: "cyan"
  },
  {
    title: "Codex Workflows",
    eyebrow: "Assisted development",
    description:
      "Use Codex as a practical collaborator for analysis, refactoring, documentation, testing, and native plugin work.",
    accent: "violet"
  },
  {
    title: "DDR / XML Analysis",
    eyebrow: "Structural insight",
    description:
      "Turn DDR exports and XML into maps of dependencies, drift, risk, opportunities, and architectural pressure points.",
    accent: "green"
  },
  {
    title: "Plugin Experiments",
    eyebrow: "Native extensions",
    description:
      "Explore high-performance plugin ideas, platform parity, rendering behavior, and production-grade developer tools.",
    accent: "blue"
  },
  {
    title: "Performance Lab",
    eyebrow: "Measured behavior",
    description:
      "Investigate bottlenecks with controlled tests, instrumentation, caching strategy, and data-backed hypotheses.",
    accent: "amber"
  },
  {
    title: "WebViewer & UI Prototypes",
    eyebrow: "Interface research",
    description:
      "Prototype interfaces, templates, and patterns that make FileMaker solutions sharper, faster, and easier to maintain.",
    accent: "violet"
  }
];

export const webinars = [
  {
    title: "FileMaker + AI: Building the New Developer Workflow",
    description:
      "A practical session on where AI belongs in serious FileMaker work, and where it absolutely does not.",
    status: "Upcoming"
  },
  {
    title: "DDR Analysis with AI",
    description:
      "How to inspect DDR XML, uncover dependencies, and turn old exports into modern development intelligence.",
    status: "Workshop"
  },
  {
    title: "Performance Debugging Like a Scientist",
    description:
      "A measured approach to FileMaker speed problems using hypotheses, experiments, and instrumentation.",
    status: "Replay soon"
  },
  {
    title: "From Idea to Plugin",
    description:
      "A tour through native plugin research, prototypes, constraints, and the path toward production tools.",
    status: "Lab session"
  },
  {
    title: "Codex for FileMaker Developers",
    description:
      "Using Codex to analyze code, reason about architecture, draft tests, and tighten developer workflows.",
    status: "Upcoming"
  }
];

export const labNotes = [
  {
    title: "Why FileMaker Developers Need Their Own AI Workflow",
    description:
      "Generic AI advice breaks down quickly. FileMaker work needs context, constraints, and reusable patterns.",
    category: "AI Workflow"
  },
  {
    title: "The Problem with Gluing Tools Together",
    description:
      "Automation can become fragile fast. The lab approach starts with repeatability, observability, and clear boundaries.",
    category: "Automation"
  },
  {
    title: "Using DDR XML as a Development Superpower",
    description:
      "DDR exports can become searchable maps, review surfaces, and risk detectors when treated as structured data.",
    category: "DDR/XML"
  },
  {
    title: "Building Native Tools Instead of Workarounds",
    description:
      "Sometimes the cleanest FileMaker workflow comes from a focused native tool, not another layer of glue.",
    category: "Tools"
  }
];

export const tools = [
  {
    title: "DDR Inspector",
    description:
      "A focused analysis surface for relationships, scripts, layouts, fields, and XML structure.",
    state: "Prototype"
  },
  {
    title: "Script Dependency Mapper",
    description:
      "Visualize script calls, hidden coupling, entry points, and fragile chains inside complex systems.",
    state: "Research"
  },
  {
    title: "WebViewer Template Builder",
    description:
      "Generate polished WebViewer starting points with practical constraints and editable patterns.",
    state: "Concept"
  },
  {
    title: "PDF Quote Extractor",
    description:
      "Extract useful pricing and quote data from PDFs into structured, reviewable output.",
    state: "Prototype"
  },
  {
    title: "FileMaker AI Prompt Library",
    description:
      "A curated library of prompts for DDR review, scripting, documentation, testing, and debugging.",
    state: "Building"
  }
];

export const pageIntros = {
  webinars: {
    eyebrow: "Live research",
    title: "Webinars for FileMaker developers who want the deeper layer.",
    description:
      "Practical sessions on AI, DDR analysis, Codex, performance, plugins, automation, and the development habits behind stronger FileMaker systems."
  },
  labNotes: {
    eyebrow: "Field notes",
    title: "Short, sharp notes from the experiment bench.",
    description:
      "Articles, observations, patterns, and working theories for developers building serious FileMaker systems in the AI era."
  },
  tools: {
    eyebrow: "Prototype shelf",
    title: "Developer tools, experiments, and research surfaces.",
    description:
      "The first version of the lab includes placeholder tools that can become downloadable utilities, templates, libraries, or private research previews."
  },
  about: {
    eyebrow: "About the lab",
    title: "A research space for better FileMaker development.",
    description:
      "The FileMaker Lab exists for advanced developers who care about precision, leverage, automation, native tools, and thoughtful use of AI."
  },
  contact: {
    eyebrow: "Open a channel",
    title: "Bring a hard FileMaker problem to the lab.",
    description:
      "Use the contact form for webinar ideas, tool requests, consulting conversations, collaborations, or questions about AI-assisted FileMaker development."
  }
};
