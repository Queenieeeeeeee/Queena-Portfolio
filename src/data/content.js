export const projects = [
  {
    id: 1,
    name: "ERP Cloud Migration",
    metric: "+20% data accuracy",
    desc: "Led Epicor Prophet 21 on-prem to cloud migration. Compared and validated 60K+ records, rebuilt price library, and cleaned customer/vendor addresses. Improved master data accuracy by 20%.",
    tags: ["Epicor P21", "SQL", "ETL"],
    link: null,
    hasDiagram: true,
  },
  {
    id: 2,
    name: "SSIS ETL & E-commerce Build",
    metric: "60K+ product records",
    desc: "Built end-to-end SSIS pipelines and NopCommerce e-commerce platform from scratch. 483 attributes, cross-platform WordPress integration.",
    tags: ["SSIS", "NopCommerce", "SQL Server"],
    link: null,
    hasDiagram: true,
  },
  {
    id: 3,
    name: "Anime Compass",
    metric: "16K+ records",
    desc: "Full-stack analytics platform. React + FastAPI + SQLAlchemy. 15+ REST endpoints and 4 Tableau dashboards for genre and rating analysis.",
    tags: ["React", "FastAPI", "Tableau"],
    link: "https://anime-project-eta.vercel.app/",
  },
  {
    id: 4,
    name: "Search Query Dashboards",
    metric: "Farnell (Avnet) capstone",
    desc: "Team capstone project. Built Tableau dashboards for real-time KPI monitoring and operational insights. Team developed NLP classifier achieving 96% accuracy.",
    tags: ["Tableau", "KPI", "Team project"],
    link: null,
    hasDiagram: true,
  },
  {
    id: 5,
    name: "Ea-Chung B2B Website",
    metric: "10+ client inquiries",
    desc: "Designed and launched a B2B website for a chemical cleaning products supplier. Generated 10+ inbound client inquiries within 2 months of launch.",
    tags: ["HTML/CSS/JS"],
    link: "https://ea-chung.com.tw",
  },
  {
    id: 6,
    name: "PHile Now Tax",
    metric: "In progress",
    desc: "Bilingual tax appointment booking web application for a nationwide client base.",
    tags: ["React", "In Progress"],
    link: "https://philenowtax.netlify.app",
    inProgress: true,
  },
]

export const dashboards = [
  {
    id: 1,
    name: "Anime Compass analytics",
    sub: "Tableau · 4 dashboards",
    link: "https://anime-project-eta.vercel.app/analytics",
  },
  {
    id: 2,
    name: "Car theft analytics",
    sub: "Tableau Public · geographic",
    link: "https://public.tableau.com/app/profile/queena.ho/viz/carthefts_17139247696470/Story1",
  },
]

export const skills = [
  {
    group: "Data & Pipelines",
    items: [
      { name: "SQL Server", handson: true },
      { name: "SSIS / ETL", handson: true },
      { name: "Python", handson: true },
      { name: "PowerShell", handson: false },
      { name: "T-SQL", handson: false },
    ],
  },
  {
    group: "Analytics & Viz",
    items: [
      { name: "Tableau", handson: true },
      { name: "Power BI", handson: true },
      { name: "ML / modeling", handson: false },
      { name: "Excel", handson: true },
    ],
  },
  {
    group: "Systems & Platforms",
    items: [
      { name: "Epicor P21", handson: true },
      { name: "NopCommerce", handson: true },
      { name: "React", handson: true },
      { name: "FastAPI", handson: true },
      { name: "WordPress", handson: false },
    ],
  },
]

export const experience = [
  {
    role: "Data & Web Systems Analyst (Freelance)",
    company: "Anime Compass · Ea-Chung · PHile Now Tax",
    date: "Oct 2025 – Present",
  },
  {
    role: "Data & Web Systems Analyst",
    company: "Sussex Tool Supply · Sussex, WI",
    date: "Dec 2023 – Sep 2025",
  },
  {
    role: "Data Analyst (Capstone)",
    company: "Farnell Global (Avnet) · Remote",
    date: "Jan 2023 – May 2023",
  },
  {
    role: "MS Business Analytics",
    company: "Arizona State University · Summa Cum Laude, 4.0 GPA",
    date: "2022 – 2023",
  },
]

export const contact = {
  email: "sty2460624@gmail.com",
  linkedin: "https://www.linkedin.com/in/szu-man-ho",
  github: "https://github.com/Queenieeeeeeee",
}

export const certifications = [
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    desc: "Dashboard development and data visualization",
    link: "https://www.credly.com/badges/a200bc17-a9a0-4936-8e13-89e897470221/linked_in_profile",
  },
  {
    name: "HackerRank SQL (Advanced)",
    issuer: "HackerRank",
    desc: "Complex query optimization",
    link: "https://www.hackerrank.com/certificates/iframe/d322503332b3",
  },
  {
    name: "Plytix PIM Certification",
    issuer: "Plytix",
    desc: "Product information management",
    link: null,
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    desc: "Web analytics and performance measurement",
    link: null,
  },
]