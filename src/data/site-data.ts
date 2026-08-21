export const COMPANY = {
  name: "Greenstone Solutions",
  legal: "Greenstone Solutions LLC",
  tagline: "Building Tomorrow's Solutions, Today.",
  founded: "2024",
  foundedFull: "March 15, 2024",
  hq: "Austin, Texas",
  address: "5900 Balcones Drive, Suite 100",
  city: "Austin, TX 78731",
  email: "info@greenstonesolutions.net",
  careers: "careers@greenstonesolutions.net",
  linkedin: "https://www.linkedin.com/company/greenstone-solutions-llc-usa/",
  entity: "Texas Limited Liability Company",
  industry: "Business Consulting",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software",
    short: "Tailored applications built around how your business actually works, from internal tools to customer-facing products.",
    lede: "Purpose-built applications designed around how your team actually works, not a generic template.",
    icon: "code-2",
    items: [
      "Web application development",
      "Internal tools & business automation",
      "API design & system integrations",
      "Ongoing maintenance & support",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    short: "Cloud architecture, hosting, and DevOps support that keeps your systems secure, scalable, and online.",
    lede: "Cloud environments that stay secure and scale with your business.",
    icon: "cloud",
    items: [
      "Cloud architecture & migration",
      "Hosting & deployment setup",
      "Monitoring & reliability",
      "Data backup & security best practices",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    short: "Native and cross-platform mobile applications designed for real-world use, from concept through launch.",
    lede: "Mobile experiences designed for how your customers actually use their phones.",
    icon: "smartphone",
    items: [
      "Cross-platform app development",
      "UI/UX design for mobile",
      "App Store & Play Store deployment",
      "Post-launch updates & support",
    ],
  },
  {
    id: "consulting",
    title: "IT Consulting",
    short: "Practical guidance on technology strategy, systems, and process so your team can move faster with confidence.",
    lede: "Clear, practical guidance on technology decisions before you commit budget to them.",
    icon: "compass",
    items: [
      "Technology roadmapping",
      "Systems & process review",
      "Vendor & tool selection guidance",
      "Digital transformation planning",
    ],
  },
] as const;

export const WHY = [
  {
    title: "Austin, Texas Based",
    body: "Headquartered at 5900 Balcones Drive, with a team that understands U.S. business needs and timezones.",
    icon: "map-pin",
  },
  {
    title: "Straightforward Communication",
    body: "You work directly with the people writing your code — no layers of account managers in between.",
    icon: "mail",
  },
  {
    title: "Built to Last",
    body: "We build with maintainability and security in mind, so your software keeps working long after launch.",
    icon: "shield-check",
  },
] as const;

export const VALUES = [
  {
    title: "Clarity First",
    body: 'We explain the "why" behind every technical decision in plain language, not jargon.',
    icon: "check",
  },
  {
    title: "Reliability",
    body: "We build software we're willing to stand behind, and we stay reachable after launch.",
    icon: "shield-check",
  },
  {
    title: "Fit Over Fashion",
    body: "We choose the right tools for your business and budget, not whatever is trending.",
    icon: "target",
  },
] as const;

export const PROCESS = [
  { step: "01", title: "Discover", body: "We learn your business, your goals, and the constraints that matter." },
  { step: "02", title: "Design", body: "We scope the solution and agree on timeline, approach, and budget together." },
  { step: "03", title: "Build", body: "We develop in the open, with regular check-ins so there are no surprises." },
  { step: "04", title: "Support", body: "We stay reachable after launch for fixes, updates, and future growth." },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Languages & Frameworks",
    tags: [
      "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Node.js",
      "ExpressJS", "NestJS", "Go", "Rust", "Ruby on Rails", "Java", "Spring Boot",
      "Python", "Django", "C#", ".NET Core", "PHP", "Laravel", "HTML5", "CSS3", "Tailwind CSS",
    ],
  },
  {
    title: "Web3 & Blockchain",
    tags: ["Ethereum", "Polygon", "MetaMask Integration", "Smart Contract Events", "Wallet Auth", "DID", "Web3.js", "Hyperledger Fabric"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "EC2", "S3", "Lambda", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "GitLab CI", "Jenkins", "Terraform", "Vercel", "Netlify"],
  },
  {
    title: "Databases & Storage",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Azure SQL", "Redis", "Firebase", "Supabase", "DynamoDB"],
  },
  {
    title: "Mobile Development",
    tags: ["React Native", "Expo", "NativeWind", "iOS", "Android", "Mobile Performance", "Flipper", "Crashlytics"],
  },
  {
    title: "Tools & Practices",
    tags: ["Git", "GitHub", "GitLab", "Jira", "Agile", "Scrum", "TDD", "Code Reviews", "Microservices"],
  },
] as const;

export const MARQUEE = [
  "TypeScript", "React", "Next.js", "Node.js", "Go", "Rust", "Python",
  "AWS", "Azure", "GCP", "Kubernetes", "PostgreSQL", "React Native", "Web3",
];

export const PORTFOLIO = [
  {
    title: "Cloud-Based Learning Platform",
    body: "A microservices-based platform supporting 100K+ users with a Spring Boot backend and React/Next.js frontend.",
    tags: ["Java", "Spring Boot", "React"],
    icon: "book-open",
    category: "Platform",
  },
  {
    title: "Healthcare Payment Processing System",
    body: "Scaled APIs handling 5+ million records/month for healthcare payment processing with high availability and security.",
    tags: ["Go", "Node.js", "RabbitMQ"],
    icon: "activity",
    category: "Healthcare",
  },
  {
    title: "Web3 Authentication System",
    body: "Integrated Ethereum-based authentication and MetaMask wallet support for decentralized identity verification.",
    tags: ["Web3.js", "Node.js", "React"],
    icon: "key-round",
    category: "Web3",
  },
  {
    title: "Enterprise Resource Planning System",
    body: "Developed a comprehensive ERP solution for manufacturing companies with a .NET Core backend and Angular frontend.",
    tags: ["C#", ".NET Core", "Entity Framework"],
    icon: "layers",
    category: "Enterprise",
  },
  {
    title: "Secure File Storage Service",
    body: "Built a high-performance encrypted file storage system with Rust, focusing on memory safety and concurrent processing.",
    tags: ["Rust", "WebAssembly", "AWS S3"],
    icon: "lock",
    category: "Infrastructure",
  },
  {
    title: "API Gateway & Microservices Platform",
    body: "Architected a scalable API gateway with NestJS that manages authentication, rate limiting, and request routing for microservices.",
    tags: ["NestJS", "TypeScript", "MongoDB"],
    icon: "git-fork",
    category: "Infrastructure",
  },
  {
    title: "E-commerce Content Management System",
    body: "Created a custom CMS for e-commerce businesses with PHP Laravel, featuring inventory management and analytics.",
    tags: ["PHP", "Laravel", "MySQL"],
    icon: "shopping-bag",
    category: "Commerce",
  },
  {
    title: "AI-Powered Data Analysis Platform",
    body: "Developed a machine learning platform that processes and analyzes large datasets to provide predictive insights for businesses.",
    tags: ["Python", "TensorFlow", "PyTorch"],
    icon: "brain",
    category: "AI",
  },
  {
    title: "Business Intelligence Dashboard",
    body: "Created interactive BI dashboards with Power BI for executive decision-making, integrating multiple data sources and custom visualizations.",
    tags: ["Power BI", "DAX", "SQL"],
    icon: "bar-chart-3",
    category: "Analytics",
  },
  {
    title: "Social Media Platform for Creatives",
    body: "Built a full-stack social platform for artists and designers using a Ruby on Rails backend with a React frontend and real-time features.",
    tags: ["Ruby on Rails", "React", "PostgreSQL"],
    icon: "message-circle",
    category: "Platform",
  },
  {
    title: "Real-time Logistics Tracking System",
    body: "Developed a logistics management system with a Golang microservices backend, Node.js middleware, and a React dashboard for real-time tracking.",
    tags: ["Golang", "React", "Node.js"],
    icon: "truck",
    category: "Operations",
  },
  {
    title: "Advanced E-commerce Platform",
    body: "Created a scalable e-commerce solution with a Laravel backend and Vue.js frontend, featuring advanced product filtering and a recommendation engine.",
    tags: ["Laravel", "Vue.js", "MySQL"],
    icon: "shopping-cart",
    category: "Commerce",
  },
  {
    title: "Enterprise Customer Portal",
    body: "Engineered a secure customer portal for enterprise clients using a Java Spring backend with an Angular frontend and advanced authentication.",
    tags: ["Java", "Spring Boot", "Angular"],
    icon: "users",
    category: "Enterprise",
  },
  {
    title: "Healthcare Management System",
    body: "Developed a comprehensive healthcare management system with a C# .NET backend and Angular frontend for patient records and appointment scheduling.",
    tags: ["C#", "Angular", ".NET Core"],
    icon: "heart-pulse",
    category: "Healthcare",
  },
  {
    title: "Financial Analytics Dashboard",
    body: "Built an interactive financial analytics platform with Java backend services and an Angular frontend featuring real-time data visualization.",
    tags: ["Java", "Angular", "Spring Boot"],
    icon: "trending-up",
    category: "Analytics",
  },
] as const;

export type Employee = {
  slug: string;
  name: string;
  first: string;
  role: string;
  department: string;
  id: string;
  start: string;
  photo: string;
  email: string;
  linkedin?: string;
  bio: string;
  bullets?: string[];
  placeholder?: boolean;
  skills?: { title: string; tags: string[] }[];
  certs?: { title: string; items: string[] }[];
};

export const TEAM: Employee[] = [
  {
    slug: "bwalya-musonda",
    name: "Bwalya Musonda",
    first: "Bwalya",
    role: "CEO & Founder",
    department: "Executive Leadership",
    id: "GS-0001",
    start: "April 1, 2024",
    photo: "/assets/images/team/bwalya-musonda-thumb.jpg",
    email: "bwalya.musonda@greenstonesolutions.net",
    bio: "Bwalya Musonda is the founder and CEO of Greenstone Solutions LLC, a Texas-based consulting firm headquartered in Austin. With 14 years of experience across JavaScript/TypeScript, Web3, Python, Ruby, Java, PHP, C#, Go, and Rust, Bwalya specializes in software architecture, cloud architecture, blockchain integration, and cross-platform automation — bringing engineering-grade rigor to every client engagement. He leads company strategy, client relationships, and day-to-day operations.",
    skills: [
      { title: "Languages & Frameworks", tags: ["C#", ".NET", "ASP.NET Core", "TypeScript"] },
      { title: "Architecture", tags: ["Microservices", "Domain-Driven Design", "RESTful APIs"] },
      { title: "Cloud & DevOps", tags: ["AWS", "Azure", "Docker", "CI/CD"] },
      { title: "AI & Integration", tags: ["Semantic Kernel", "Prompt Engineering", "AI Model Evaluation"] },
    ],
    certs: [
      {
        title: "Amazon Web Services",
        items: [
          "AWS Certified Solutions Architect – Professional (SAP-C02)",
          "AWS Certified Solutions Architect – Associate (SAA-C03)",
          "AWS Certified Machine Learning Engineer – Associate (MLA-C01)",
        ],
      },
      {
        title: "Microsoft",
        items: [
          "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
          "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
          "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        ],
      },
      {
        title: "Google",
        items: [
          "Google Cloud Certified – Professional Cloud Developer (PR000266)",
          "Google Cloud Certified – Professional Cloud Architect (PR000213)",
        ],
      },
      {
        title: "Other",
        items: [
          "Project Management Professional (PMP)",
          "CompTIA Security+ (V7) (SY0-701)",
          "ITIL 4 Foundation",
        ],
      },
    ],
  },
  {
    slug: "fayed-al-fahad",
    name: "Fayed AL Fahad",
    first: "Fayed",
    role: "Accountant",
    department: "Finance & Accounting",
    id: "GS-0002",
    start: "April 1, 2024",
    photo: "/assets/images/team/fayed-al-fahad-thumb.jpg",
    email: "fayed.fahad@greenstonesolutions.net",
    linkedin: "https://www.linkedin.com/in/fayedalfahad/",
    bio: "Fayed AL Fahad serves as Accountant at Greenstone Solutions LLC, supporting the company's financial operations, bookkeeping, and reporting remotely from Dhaka, Bangladesh since April 2024. Day to day, Fayed:",
    bullets: [
      "Records and maintains accurate financial transactions in Wave Accounting in line with accounting best practices",
      "Handles full-cycle bookkeeping, including income, expenses, journal entries, and account classification",
      "Prepares financial reports — profit & loss, balance sheet, and transaction summaries — to support tax filing and decision-making",
      "Manages invoicing and tracks receivables to ensure timely, accurate billing",
      "Performs bank reconciliations to keep statements and accounting records consistent",
      "Maintains organized, audit- and tax-ready documentation to support compliance",
      "Collaborates remotely with leadership to provide financial insight into ongoing operations",
    ],
    skills: [
      { title: "Accounting & Bookkeeping", tags: ["Full-Cycle Bookkeeping", "Bank Reconciliation", "Financial Reporting", "Invoicing & Receivables"] },
      { title: "Tools", tags: ["Wave Accounting", "QuickBooks", "Excel"] },
      { title: "Data & Analysis", tags: ["Statistical Analysis", "Python", "Pandas"] },
      { title: "Languages", tags: ["Bangla (Native)", "English (Professional)"] },
    ],
  },
  {
    slug: "bruno-ferreira",
    name: "Bruno Ferreira",
    first: "Bruno",
    role: "Software Developer",
    department: "Engineering",
    id: "GS-0003",
    start: "TBD",
    photo: "/assets/images/team/bruno-ferreira-thumb.jpg",
    email: "Bruno.ferreira@greenstonesolutions.net",
    bio: "Bruno Ferreira is a Software Developer on the Greenstone Solutions engineering team.",
    placeholder: true,
  },
  {
    slug: "jeffrey-onochie",
    name: "Jeffrey Onochie",
    first: "Jeffrey",
    role: "Senior Software Engineer",
    department: "Engineering",
    id: "GS-0004",
    start: "April 2024",
    photo: "/assets/images/team/jeffrey-onochie-thumb.jpg",
    email: "Jeffrey.Onochie@greenstonesolutions.net",
    bio: "Jeffrey Onochie is a Senior Software Engineer on the Greenstone Solutions engineering team. He specializes in modernizing microservices, cloud migration, application security, and production observability. His work improves the scalability, reliability, maintainability, and delivery speed of complex distributed systems. Day to day, Jeffrey:",
    bullets: [
      "Leads microservices migrations from on-premises infrastructure to the cloud, including pre-migration analysis, risk identification, testing support, and post-migration stabilization",
      "Migrates codebases and development workflows from GitHub to GitLab while maintaining reliable version-control and review processes",
      "Refactors, optimizes, and containerizes legacy microservices to improve performance, portability, maintainability, and deployment consistency",
      "Upgrades Node.js runtimes and service dependencies, resolving compatibility and package-update issues across microservices",
      "Identifies and remediates application and infrastructure vulnerabilities using Snyk scan reports",
      "Builds service maps, centralized logging, and operational dashboards with Elastic and Kibana to improve system visibility and monitoring",
      "Resolves migration defects, reviews merge requests, maintains Swagger documentation, and tracks delivery progress in Jira",
    ],
    skills: [
      { title: "Cloud & Modernization", tags: ["Cloud Migration", "Microservices", "Docker", "Containerization"] },
      { title: "Engineering", tags: ["Node.js", "Refactoring", "Dependency Upgrades", "Code Review", "Swagger"] },
      { title: "Security & Quality", tags: ["Snyk", "Vulnerability Remediation", "QA Support", "Secure SDLC"] },
      { title: "Observability & Delivery", tags: ["Elastic", "Kibana", "GitLab", "GitHub", "Jira", "Centralized Logging"] },
    ],
  },
  {
    slug: "james-christopher-woods",
    name: "James Christopher Woods",
    first: "James",
    role: "Software Developer",
    department: "Engineering",
    id: "GS-0005",
    start: "August 2026",
    photo: "/assets/images/team/james-christopher-woods.svg",
    email: "james.woods@greenstonesolutions.net",
    bio: "James Christopher Woods is a Software Developer on the Greenstone Solutions engineering team. Working primarily from Frisco, Texas, he focuses on cloud infrastructure automation, configuration management, continuous integration, and reliable software delivery, with relocation possible as project needs evolve. He brings the technical education and professional experience required for the role, including hands-on work with PEGA, AWS, and Docker. Day to day, James:",
    bullets: [
      "Designs and automates cloud infrastructure services using Terraform",
      "Develops Ansible scripts for configuration management and repeatable software deployments",
      "Builds Jenkins pipelines that automate continuous integration and delivery processes",
      "Creates Gherkin and Cucumber scenarios for automated testing within CI/CD pipelines",
      "Creates and maintains clear release notes for completed deployments",
      "Works across Agile and Waterfall environments using Java, Python, Shell, C, YAML, XML, Groovy, Git, Maven, Docker, PEGA, AWS, Linux, and enterprise integration platforms",
    ],
    skills: [
      { title: "Cloud & Infrastructure", tags: ["AWS", "Terraform", "Docker", "Linux"] },
      { title: "Automation & Delivery", tags: ["Ansible", "Jenkins", "CI/CD", "Gherkin", "Cucumber"] },
      { title: "Languages & Configuration", tags: ["Java", "Python", "Shell", "C", "Groovy", "YAML", "XML"] },
      { title: "Platforms & Tooling", tags: ["PEGA", "Git", "TortoiseSVN", "Maven", "JDK", "Sterling", "TIBCO"] },
    ],
  },
];

export function getEmployee(slug: string) {
  return TEAM.find((e) => e.slug === slug);
}
