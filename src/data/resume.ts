// Single source of truth: K. Ameer Malik Bahad — resume content.

export const profile = {
  name: "K. Ameer Malik Bahad",
  shortName: "Ameer Malik",
  role: "Software Engineer / Python Full Stack Developer",
  tagline:
    "Final-year CSE (Data Science & AI) student building production-minded full-stack applications with Python, Django, Flask and React.",
  summary:
    "Final-year B.Tech Computer Science Engineering (Data Science & Artificial Intelligence) student with hands-on internship and project experience in full-stack application development. Strong foundation in software engineering principles, problem-solving, and database-driven application development. Seeking an entry-level Software Developer, Python Developer, or Full Stack Developer role to contribute and grow in a collaborative environment.",
  location: "Chennai, Tamil Nadu, India",
  email: "ameermalikbahad07@gmail.com",
  phone: "+91 9087223978",
  github: "https://github.com/ameer2907",
  linkedin: "https://www.linkedin.com/in/ameer-malik-bahad07",
  website: "https://ameermalik.me",
  languages: ["Tamil (Native)", "English (Professional)"],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "React.js", level: 78 },
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: "Server",
    skills: [
      { name: "Django", level: 85 },
      { name: "Flask", level: 82 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "DBMS", level: 80 },
    ],
  },
  {
    title: "AI & Data Science",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 82 },
    ],
  },
  {
    title: "Developer Tools & Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Netlify", level: 80 },
    ],
  },
];

export const marqueeTech = [
  "Python",
  "Django",
  "Flask",
  "JavaScript",
  "React.js",
  "HTML5",
  "CSS3",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Pandas",
  "NumPy",
  "Machine Learning",
  "Java",
  "Git",
  "GitHub",
  "VS Code",
  "Netlify",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  meta: string;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Evolve Solutions, Chennai",
    role: "Python Full Stack Developer Intern",
    period: "Jan 2026 – Apr 2026",
    meta: "Onsite · 3 Months",
    points: [
      "Developed full-stack web applications using HTML5, CSS3, JavaScript, Python, Django and Flask, delivering responsive frontend interfaces alongside backend functionality.",
      "Implemented REST APIs, database operations and application features with MongoDB and SQL, covering data handling, authentication and dynamic content management.",
      "Built and tested web application modules, integrated APIs and deployed projects, gaining practical experience across the full-stack development lifecycle.",
    ],
    tech: ["Python", "Django", "Flask", "REST APIs", "MongoDB", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    company: "Thirumoolar IT Solutions",
    role: "Machine Learning Intern",
    period: "Mar 2025 – Apr 2025",
    meta: "Internship",
    points: [
      "Applied supervised and unsupervised ML algorithms — classification, regression and clustering — to real-world problem statements.",
      "Performed data preprocessing, feature engineering and exploratory data analysis to build predictive models using Python and Pandas.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Machine Learning", "EDA"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Completed" | "Live";
  duration: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  tech: string[];
  tags: string[];
  demo?: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "waste-management",
    name: "AI-Driven Predictive Waste Management System (IoT)",
    category: "AI / IoT",
    status: "Completed",
    duration: "Final Year Project",
    description:
      "An AI and IoT prototype that predicts waste accumulation and optimises collection routes using live Arduino sensor data.",
    problem:
      "Municipal waste collection follows fixed routes, so bins overflow while collection vehicles travel to containers that are still empty.",
    solution:
      "Arduino sensors stream fill-level data to machine learning models (Random Forest and LSTM) that forecast bin saturation and re-order collection routes in real time.",
    features: [
      "Random Forest and LSTM prediction models",
      "Real-time Arduino sensor data pipeline",
      "Route optimisation for collection efficiency",
      "Reduced manual monitoring effort",
    ],
    challenges:
      "Handling noisy sensor readings and aligning time-series data from hardware with model training requirements.",
    tech: ["Python", "Machine Learning", "Arduino", "IoT", "Pandas", "NumPy"],
    tags: ["Python", "AI", "Machine Learning"],
    github: "https://github.com/ameer2907",
    featured: true,
  },
  {
    slug: "codelens-engine",
    name: "CodeLens Engine – AI Code Explainer",
    category: "AI / Web App",
    status: "Live",
    duration: "2025",
    description:
      "An AI-powered tool that analyses and explains code snippets across 5+ programming languages in real time.",
    problem:
      "Beginners and reviewers lose time deciphering unfamiliar code written in languages they do not work with daily.",
    solution:
      "AI/ML APIs are wrapped in a clean interface that parses a snippet and returns a structured, plain-language explanation instantly.",
    features: [
      "Supports 5+ programming languages",
      "Real-time AI explanations",
      "Clean, distraction-free interface",
      "Copy-and-explain workflow",
    ],
    challenges: "Designing prompt handling and response formatting that stays accurate across different language syntaxes.",
    tech: ["Python", "JavaScript", "AI/ML APIs", "HTML5", "CSS3"],
    tags: ["Python", "AI", "Web Development", "Frontend"],
    demo: "https://codelens-engine.netlify.app",
    github: "https://github.com/ameer2907",
  },
  {
    slug: "south-plate",
    name: "South Plate – Food Delivery Web App",
    category: "Web Application",
    status: "Live",
    duration: "2025",
    description:
      "A responsive food delivery experience with restaurant browsing, menu display and complete cart management.",
    problem: "Small restaurants need a lightweight ordering front end that works well on mobile without a heavy platform.",
    solution:
      "A mobile-first interface with a multi-step checkout workflow, client-side cart state and an optimised browsing experience.",
    features: [
      "Restaurant and menu browsing",
      "Cart management with live totals",
      "Multi-step checkout workflow",
      "Mobile-first responsive layout",
    ],
    challenges: "Keeping cart state consistent across a multi-step checkout without a backend session layer.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["Web Development", "Frontend"],
    demo: "https://the-south-plate-food-delivery-app.netlify.app",
    github: "https://github.com/ameer2907",
  },
  {
    slug: "global-nexus-bank",
    name: "Global Nexus Bank",
    category: "Web Application",
    status: "Live",
    duration: "2025",
    description:
      "A digital banking application covering account management, fund transfers and transaction history.",
    problem: "Banking interfaces need strict validation and clear transaction feedback to be trustworthy.",
    solution:
      "Secure authentication flows, thorough form validation and structured client-side data handling model a realistic banking journey.",
    features: [
      "Account management dashboard",
      "Fund transfers between accounts",
      "Transaction history view",
      "Authentication and form validation",
    ],
    challenges: "Modelling reliable transaction state and validation rules purely on the client side.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["Web Development", "Frontend"],
    demo: "https://global-nexus-bank.netlify.app",
    github: "https://github.com/ameer2907",
  },
  {
    slug: "weather-shield",
    name: "Weather Shield India",
    category: "API Integration",
    status: "Live",
    duration: "2025",
    description:
      "A weather forecasting app consuming REST APIs for real-time temperature, humidity and wind conditions.",
    problem: "Users need fast, location-aware weather data without noisy interfaces or slow page loads.",
    solution:
      "Location-based search queries a REST weather API and renders results dynamically with graceful error handling.",
    features: [
      "Location-based search",
      "Real-time temperature, humidity and wind data",
      "Dynamic API-driven rendering",
      "Responsive error handling",
    ],
    challenges: "Handling API rate limits and failure states without breaking the user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    tags: ["Web Development", "Frontend", "Backend"],
    demo: "https://weathershield-india.netlify.app",
    github: "https://github.com/ameer2907",
  },
  {
    slug: "busfolio",
    name: "BusFolio",
    category: "Business Website",
    status: "Live",
    duration: "2025",
    description: "A responsive portfolio and business website with a modern interface and smooth navigation.",
    problem: "Small businesses need a fast, credible web presence that reads well on every screen size.",
    solution:
      "A clean HTML5/CSS3/JavaScript build with optimised layout, smooth navigation and consistent cross-device behaviour.",
    features: [
      "Modern responsive layout",
      "Smooth section navigation",
      "Optimised cross-device experience",
      "Lightweight, fast-loading pages",
    ],
    challenges: "Balancing visual polish with a minimal asset footprint for fast loading.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    tags: ["Web Development", "Frontend"],
    demo: "https://busfolio.netlify.app",
    github: "https://github.com/ameer2907",
  },
];

export const projectFilters = [
  "All",
  "Python",
  "AI",
  "Machine Learning",
  "Web Development",
  "Frontend",
  "Backend",
];

export const education = [
  {
    degree: "B.Tech – Computer Science Engineering (Data Science & Artificial Intelligence)",
    institution: "Dr. M.G.R Educational and Research Institute, Chennai",
    period: "2022 – 2026",
    detail: "CGPA: 7.58",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Machine Learning",
      "Web Technologies",
      "Software Engineering",
    ],
  },
];

export const certifications = [
  "IBM Data Science Professional Certificate",
  "IBM Data Analytics Certificate",
  "Microsoft Azure Fundamentals",
  "Google Cloud: Intro to Generative AI Studio",
  "Deloitte Data Analytics Simulation",
  "NASSCOM Cybersecurity Fundamentals",
  "Python for Data Analysis",
  "Machine Learning – ThingBator",
  "Power BI Workshop",
  "NPTEL Elite – User-Centric Computing (HCI)",
];

export const timeline = [
  {
    year: "2022",
    title: "Started B.Tech CSE (Data Science & AI)",
    org: "Dr. M.G.R Educational and Research Institute",
    type: "Education",
  },
  {
    year: "Mar 2025",
    title: "Machine Learning Intern",
    org: "Thirumoolar IT Solutions",
    type: "Internship",
  },
  {
    year: "2025",
    title: "Shipped 5 web applications",
    org: "CodeLens Engine, South Plate, Global Nexus Bank, Weather Shield India, BusFolio",
    type: "Projects",
  },
  {
    year: "Jan 2026",
    title: "Python Full Stack Developer Intern",
    org: "Evolve Solutions, Chennai",
    type: "Internship",
  },
  {
    year: "2026",
    title: "Final Year Project — AI-Driven Predictive Waste Management",
    org: "Python · Machine Learning · IoT",
    type: "Projects",
  },
  {
    year: "2026",
    title: "Graduating — seeking Software Developer roles",
    org: "Python / Full Stack Development",
    type: "Milestone",
  },
];

export const stats = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Months of Internship", value: 5, suffix: "" },
  { label: "Certifications", value: 10, suffix: "" },
  { label: "Live Deployments", value: 5, suffix: "" },
  { label: "CGPA", value: 7.58, suffix: "", decimals: 2 },
];

export const services = [
  { title: "Python Development", desc: "Clean, maintainable Python for scripts, automation and application logic.", icon: "Code2" },
  { title: "Django Development", desc: "Database-driven web applications with authentication and admin workflows.", icon: "Layers" },
  { title: "Flask Development", desc: "Lightweight services and micro-applications built for speed and clarity.", icon: "Feather" },
  { title: "REST API Development", desc: "Well-structured endpoints with validation, auth and predictable responses.", icon: "Plug" },
  { title: "Frontend Development", desc: "Accessible, responsive interfaces using HTML5, CSS3, JavaScript and React.", icon: "Layout" },
  { title: "Responsive Web Design", desc: "Mobile-first layouts that stay consistent from phones to large displays.", icon: "Smartphone" },
  { title: "Backend Development", desc: "Data models, queries and business logic across MySQL and MongoDB.", icon: "Server" },
  { title: "Full Stack Development", desc: "End-to-end delivery from schema design to deployed, tested interface.", icon: "Boxes" },
];

export const whyHireMe = [
  { title: "Strong Fundamentals", desc: "Software engineering principles, DBMS and problem solving applied across every project.", icon: "GraduationCap" },
  { title: "Problem Solver", desc: "Approaches each build from the problem statement first, then the technology.", icon: "Lightbulb" },
  { title: "Internship Experience", desc: "Five months across full-stack and machine learning internships in real teams.", icon: "Briefcase" },
  { title: "Project Experience", desc: "Six shipped projects, five of them deployed and publicly accessible.", icon: "FolderGit2" },
  { title: "Clean Coding", desc: "Readable structure, consistent naming and reusable components by default.", icon: "Sparkles" },
  { title: "Fast Learner", desc: "Ten certifications across data science, cloud and cybersecurity alongside coursework.", icon: "Rocket" },
  { title: "Team Player", desc: "Onsite internship experience collaborating on shared codebases and reviews.", icon: "Users" },
  { title: "Adaptability", desc: "Comfortable moving between Python backends, JavaScript frontends and ML workflows.", icon: "Shuffle" },
];

export const highlights = [
  { label: "Projects completed", value: "6 shipped, 5 deployed live" },
  { label: "Internships completed", value: "Full Stack (Evolve Solutions) & ML (Thirumoolar)" },
  { label: "Technologies learned", value: "18+ across frontend, backend, data and tooling" },
  { label: "Certifications earned", value: "10 including IBM, Microsoft Azure and Google Cloud" },
  { label: "Portfolio", value: "ameermalik.me — live and continuously updated" },
  { label: "Learning mindset", value: "Consistently building beyond coursework requirements" },
];
