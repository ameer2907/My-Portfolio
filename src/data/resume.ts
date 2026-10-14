// Single source of truth: K. Ameer Malik Bahad — resume content.
import imgWaste from "@/assets/project-waste-management.jpg";
import imgCodelens from "@/assets/project-codelens.jpg";
import imgSouthPlate from "@/assets/project-south-plate.jpg";
import imgBank from "@/assets/project-bank.jpg";
import imgWeather from "@/assets/project-weather.jpg";
import imgBusfolio from "@/assets/project-busfolio.jpg";

export const profile = {
  name: "K. Ameer Malik Bahad",
  shortName: "Ameer Malik",
  role: "Software Engineer | Python & AI",
  tagline: "B.Tech Computer Science Engineering (Data Science & AI) graduate with hands-on internship and project experience in Python, full-stack development, machine learning and REST APIs.",
  summary: "B.Tech Computer Science Engineering (Data Science & AI) graduate with hands-on internship and project experience in Python, full-stack development, machine learning and REST APIs. Proficient in Python, Django, Flask, SQL, MongoDB and JavaScript, with experience building and deploying web applications and AI-driven solutions. Seeking entry-level Software Developer, Python Developer, Backend Developer or AI/ML opportunities.",
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
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "DBMS" },
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
      "Built predictive models in Python and Pandas using supervised and unsupervised algorithms, including classification and regression."
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
  "description": "Built an IoT prototype using Arduino sensors and ML models (Random Forest, LSTM) for waste-level prediction.",
  "features": [
    "Used model predictions to optimize waste collection routes and reduce manual monitoring."
  ],
  "tech": [
    "Python",
    "Machine Learning",
    "IoT",
    "Scikit-learn",
    "LSTM"
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
  image: imgCodelens
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
  image: imgSouthPlate
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
  image: imgBank
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
  image: imgWeather
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
  image: imgBusfolio
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

export const education = [
  {
    degree: "B.Tech – Computer Science Engineering (Data Science & Artificial Intelligence)",
    institution: "Dr. M.G.R Educational and Research Institute, Chennai",
    period: "2022 – 2026",
    detail: "CGPA: 7.67",
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
  { year: "2022 – 2026", title: "B.Tech in Computer Science Engineering (Data Science & Artificial Intelligence)", org: "Dr. M.G.R Educational and Research Institute, Chennai · CGPA: 7.67", type: "Education" },
  { year: "Mar 2025 – Apr 2025", title: "Machine Learning Intern", org: "Thirumoolar IT Solutions · Remote", type: "Internship" },
  { year: "Jan 2026 – Apr 2026", title: "Python Full Stack Developer Intern", org: "Evolve Solution · Chennai, India · Onsite — 3 Months", type: "Internship" },
];

export const stats = [
  { label: "Technical Projects", value: projects.length, suffix: "" },
  { label: "Technologies", value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), suffix: "" },
  { label: "Internships", value: experiences.length, suffix: "" },
  { label: "Certifications", value: certifications.length, suffix: "" },
  { label: "Project Links", value: projects.filter(p => p.demo).length, suffix: "" },
  { label: "CGPA", value: 7.67, suffix: "", decimals: 2 },
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
  { title: "Engineering Graduate", desc: "B.Tech Computer Science Engineering (Data Science & AI), CGPA 7.67.", icon: "GraduationCap" },
  { title: "Predictive Modelling", desc: "Supervised and unsupervised algorithms, including classification and regression.", icon: "Lightbulb" },
  { title: "Internship Experience", desc: "Python full-stack development at Evolve Solution and machine learning at Thirumoolar IT Solutions.", icon: "Briefcase" },
  { title: "Project Experience", desc: "Six technical projects spanning AI, IoT and web applications.", icon: "FolderGit2" },
  { title: "Reusable Components", desc: "React and TypeScript portfolio development with reusable components.", icon: "Sparkles" },
  { title: "Technical Certifications", desc: "Eleven certifications across data, cloud, security, machine learning and systems.", icon: "Rocket" },
  { title: "Onsite Experience", desc: "Three-month Python Full Stack Developer internship in Chennai.", icon: "Users" },
  { title: "Full Stack & AI", desc: "Python, Django, Flask, REST APIs, React.js, Pandas and NumPy.", icon: "Shuffle" },
];

export const highlights = [
  { label: "Technical projects", value: "AI Predictive Waste Management, CodeLens Engine, South Plate, Global Nexus Bank, Weather Shield India and BusFolio" },
  { label: "Professional experience", value: "Evolve Solution & Thirumoolar IT Solutions" },
  { label: "Technical expertise", value: "Programming, frontend, backend, databases, data & AI, and tools" },
  { label: "Certifications", value: "Data Science & Analytics, Cloud & Security, Machine Learning & Systems" },
  { label: "Portfolio", value: profile.website },
  { label: "Career objective", value: "Entry-level Software Developer, Python Developer or Full Stack Developer" },
];
