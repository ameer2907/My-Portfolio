// Single source of truth: Ameer Malik Bahad — resume content (plus BusFolio, kept at the user's request).
import imgWaste from "@/assets/project-waste-management.jpg";
import codelensAsset from "@/assets/project-codelens.png.asset.json";
import southPlateAsset from "@/assets/project-south-plate.png.asset.json";
import nexusBankAsset from "@/assets/project-nexus-bank.png.asset.json";
import weatherShieldAsset from "@/assets/project-weathershield.png.asset.json";
import busfolioAsset from "@/assets/project-busfolio.png.asset.json";

export const profile = {
  name: "K. Ameer Malik Bahad",
  shortName: "Ameer Malik",
  role: "Software Engineer | Python & Full-Stack Development",
  tagline: "Entry-level Software Engineer (B.Tech CSE – Data Science & AI) with internships in Python full-stack development and machine learning.",
  summary: "Entry-level Software Engineer with a B.Tech in Computer Science and Engineering (Data Science & AI) and internships in Python full-stack development and machine learning. Built web applications and REST APIs with Python, Django, Flask, React, SQL, and MongoDB, plus AI projects using LLM APIs. Seeking Software Engineer, Python, or Full-Stack Developer roles.",
  location: "Chennai, Tamil Nadu, India",
  email: "ameermalikbahad07@gmail.com",
  phone: "+91 9087223978",
  github: "https://github.com/ameer2907",
  linkedin: "https://linkedin.com/in/ameer-malik-bahad07",
  website: "https://ameer-malik.netlify.app/",
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Django" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "JWT Authentication" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Data & AI",
    icon: "Brain",
    skills: [
      { name: "Machine Learning" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "LLM APIs (Gemini AI, Claude AI)" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Cloud",
    icon: "Cloud",
    skills: [
      { name: "Microsoft Azure" },
      { name: "Google Cloud" },
      { name: "IBM Cloud" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Netlify" },
    ],
  },
];

export const marqueeTech = [
  "Python",
  "Django",
  "Flask",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Pandas",
  "NumPy",
  "Machine Learning",
  "Scikit-learn",
  "LLM APIs (Gemini AI, Claude AI)",
  "Prompt Engineering",
  "Microsoft Azure",
  "Google Cloud",
  "IBM Cloud",
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
    "company": "Evolve Solution",
    "role": "Python Full Stack Developer Intern",
    "period": "Jan 2026 – Apr 2026",
    "meta": "Chennai, India · Onsite — 3 Months",
    "points": [
      "Built full-stack web applications using Python, Django, Flask, JavaScript, HTML5, and CSS3.",
      "Developed REST APIs and implemented database operations using SQL and MongoDB.",
      "Integrated authentication, API services and backend modules across application workflows.",
      "Tested and deployed application modules, gaining hands-on experience in full-stack development."
    ],
    "tech": [
      "Python",
      "Django",
      "Flask",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "SQL",
      "MongoDB"
    ]
  },
  {
    "company": "Thirumoolar IT Solutions",
    "role": "Machine Learning Intern",
    "period": "Mar 2025 – Apr 2025",
    "meta": "Remote",
    "points": [
      "Assisted in developing and evaluating machine learning models using Python and Pandas for classification and regression tasks.",
      "Supported data preprocessing, model analysis, and dashboard development using supervised and unsupervised learning techniques."
    ],
    "tech": [
      "Python",
      "Pandas",
      "Machine Learning"
    ]
  }
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Completed" | "Live";
  duration: string;
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  challenges?: string;
  tech: string[];
  tags: string[];
  demo?: string;
  github: string;
  featured?: boolean;
  image: string;
};

export const projects: Project[] = [
{
  "slug": "waste-management",
  "name": "AI Predictive Waste Management System",
  "category": "AI / IoT",
  "status": "Completed",
  "duration": "",
  "description": "Developed a physical IoT-based waste segregation prototype using a microcontroller and connected sensors to sort biodegradable and non-biodegradable waste into separate compartments.",
  "features": [
    "Integrated AI-based waste classification with hardware control to automate sorting actions and demonstrate smart waste-management capabilities."
  ],
  "tech": [
    "Python",
    "Machine Learning",
    "IoT",
    "Arduino/ESP32",
    "Sensors"
  ],
  "tags": [
    "Python",
    "AI",
    "Machine Learning"
  ],
  "github": "https://github.com/ameer2907",
  "featured": true
,
  image: imgWaste
},
{
  "slug": "codelens-engine",
  "name": "CodeLens Engine – AI Code Explainer",
  "category": "AI / Web App",
  "status": "Live",
  "duration": "",
  "description": "Built an AI-powered tool that analyzes and explains code snippets across 5+ programming languages.",
  "features": [
    "Integrated Gemini AI APIs with a responsive interface for real-time code explanations."
  ],
  "tech": [
    "React",
    "TypeScript",
    "Supabase",
    "Gemini AI"
  ],
  "tags": [
    "AI",
    "Web Development",
    "Frontend"
  ],
  "github": "https://github.com/ameer2907",
  "demo": "https://codelens-engine.netlify.app/"
,
  image: codelensAsset.url
},
{
  "slug": "south-plate",
  "name": "South Plate – Food Delivery Web App",
  "category": "Web Application",
  "status": "Live",
  "duration": "",
  "description": "Built a responsive food delivery app with restaurant browsing, dynamic menus, search, and cart management.",
  "features": [
    "Used React Router and Tailwind CSS for a smooth single-page navigation experience."
  ],
  "tech": [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase"
  ],
  "tags": [
    "Web Development",
    "Frontend"
  ],
  "github": "https://github.com/ameer2907",
  "demo": "https://the-south-plate-food-delivery-app.netlify.app/"
,
  image: southPlateAsset.url
},
{
  "slug": "global-nexus-bank",
  "name": "Global Nexus Bank",
  "category": "Full Stack",
  "status": "Live",
  "duration": "",
  "description": "Developed an international currency exchange platform with real-time rate tracking and transaction history.",
  "features": [
    "Built with JWT authentication, MongoDB storage, dynamic PDF invoices, and email confirmations."
  ],
  "tech": [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT"
  ],
  "tags": [
    "Web Development",
    "Backend",
    "Frontend"
  ],
  "github": "https://github.com/ameer2907",
  "demo": "https://global-nexus-bank.netlify.app/"
,
  image: nexusBankAsset.url
},
{
  "slug": "weather-shield",
  "name": "Weather Shield India",
  "category": "AI / API Integration",
  "status": "Live",
  "duration": "",
  "description": "Built a weather and disaster intelligence platform with risk analysis and AI-generated insights.",
  "features": [
    "Implemented city search, weather dashboards, custom SVG charts, and Claude AI integration."
  ],
  "tech": [
    "React",
    "JavaScript",
    "Vite",
    "SVG",
    "Claude AI"
  ],
  "tags": [
    "AI",
    "Web Development",
    "Frontend"
  ],
  "github": "https://github.com/ameer2907",
  "demo": "https://weathershield-india.netlify.app/"
,
  image: weatherShieldAsset.url
},
{
  "slug": "busfolio",
  "name": "BusFolio",
  "category": "Frontend / Interactive",
  "status": "Live",
  "duration": "",
  "description": "Built a responsive portfolio website using React and TypeScript with reusable components.",
  "features": [
    "Implemented interactive bus-simulation screens with dark/light mode and Tailwind CSS styling."
  ],
  "tech": [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite"
  ],
  "tags": [
    "Web Development",
    "Frontend"
  ],
  "github": "https://github.com/ameer2907",
  "demo": "https://busfolio.netlify.app/"
,
  image: busfolioAsset.url
}
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

const cgpa = 7.67;

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering – Data Science (Artificial Intelligence)",
    institution: "Dr. M.G.R Educational and Research Institute, Chennai",
    period: "2022 – 2026",
    detail: `CGPA: ${cgpa.toFixed(2)}`,
    coursework: [] as string[],
  },
];

export const certifications = [
  "IBM Data Science Professional",
  "IBM Data Analytics",
  "Python for Data Analysis",
  "Deloitte Data Analytics Simulation",
  "Microsoft Azure Fundamentals",
  "NASSCOM Cybersecurity Fundamentals",
  "Google Cloud Introduction to Generative AI Studio",
  "IBM Cloud Application Development",
  "Machine Learning (ThingBator Track)",
  "Power BI Workshop",
  "NPTEL Elite User-Centric Computing (HCI)",
];

export const timeline = [
  { year: education[0]?.period ?? "2022 – 2026", title: "B.Tech in Computer Science and Engineering – Data Science (Artificial Intelligence)", org: `${education[0]?.institution ?? "Dr. M.G.R Educational and Research Institute, Chennai"} · CGPA: ${cgpa.toFixed(2)}`, type: "Education" },
  ...experiences.slice().reverse().map((experience) => ({ year: experience.period, title: experience.role, org: `${experience.company} · ${experience.meta}`, type: "Internship" })),
];

export const stats = [
  { label: "Technical Projects", value: projects.length, suffix: "" },
  { label: "Technologies", value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), suffix: "" },
  { label: "Internships", value: experiences.length, suffix: "" },
  { label: "Certifications", value: certifications.length, suffix: "" },
  { label: "Project Links", value: projects.filter(p => p.demo).length, suffix: "" },
  { label: "CGPA", value: cgpa, suffix: "", decimals: 2 },
];

export const services = [
  { title: "Python Development", desc: "Python full-stack development and predictive models.", icon: "Code2" },
  { title: "Django Development", desc: "Full-stack web applications using Python and Django.", icon: "Layers" },
  { title: "Flask Development", desc: "Web application modules built with Python and Flask.", icon: "Feather" },
  { title: "REST API Development", desc: "REST APIs, authentication and API integration.", icon: "Plug" },
  { title: "Frontend Development", desc: "Responsive applications using JavaScript, HTML5, CSS3 and React.js.", icon: "Layout" },
  { title: "Responsive Web Design", desc: "Responsive interfaces using React, TypeScript and Tailwind CSS.", icon: "Smartphone" },
  { title: "Backend Development", desc: "Database operations using SQL and MongoDB.", icon: "Server" },
  { title: "Full Stack Development", desc: "Building, testing and deploying web application modules.", icon: "Boxes" },
];

export const whyHireMe = [
  { title: "Engineering Graduate", desc: `B.Tech Computer Science Engineering (Data Science & AI), CGPA ${cgpa.toFixed(2)}.`, icon: "GraduationCap" },
  { title: "Predictive Modelling", desc: "Supervised and unsupervised algorithms, including classification and regression.", icon: "Lightbulb" },
  { title: "Internship Experience", desc: "Python full-stack development at Evolve Solution and machine learning at Thirumoolar IT Solutions.", icon: "Briefcase" },
  { title: "Project Experience", desc: "Six technical projects spanning AI, IoT and web applications.", icon: "FolderGit2" },
  { title: "Reusable Components", desc: "React and TypeScript portfolio development with reusable components.", icon: "Sparkles" },
  { title: "Technical Certifications", desc: `${certifications.length} certifications across data, cloud, security, machine learning and systems.`, icon: "Rocket" },
  { title: "Onsite Experience", desc: "Three-month Python Full Stack Developer internship in Chennai.", icon: "Users" },
  { title: "Full Stack & AI", desc: "Python, Django, Flask, REST APIs, React.js, Pandas and NumPy.", icon: "Shuffle" },
];

export const highlights = [
  { label: "Technical projects", value: "AI Predictive Waste Management, CodeLens Engine, South Plate, Global Nexus Bank, Weather Shield India and BusFolio" },
  { label: "Professional experience", value: "Evolve Solution & Thirumoolar IT Solutions" },
  { label: "Technical expertise", value: "Programming, frontend, backend, databases, data & AI, and tools" },
  { label: "Certifications", value: "Data Science & Analytics, Cloud & Security, Machine Learning & Systems" },
  { label: "Portfolio", value: profile.website },
  { label: "Career objective", value: "Seeking Software Engineer, Python, or Full-Stack Developer roles" },
];
