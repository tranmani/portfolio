import { generateAscii } from "./ascii";

export const portfolioConfig = {
  profile: {
    projectName: "ENGINEER_CLI",
    name: "Huy",
    title: "SOFTWARE ENGINEER",
    asciiTitle: generateAscii("Huy Tran"),
    location: "Amsterdam, NL (AWS-01)",
    yearsXp: "4+",
    projectsCount: "10+",
    currentStack: ["K8S", "DOCKER", "NODE", "TS", "REACT"],
    summary: "High-availability engineer specializing in distributed systems, cloud-native infrastructure, and performance-critical full-stack applications. Bridging the gap between complex DevOps workflows and elegant frontend experiences.",
  },
  navigation: [
    { label: "/home", path: "/" },
    { label: "/experience", path: "/experience" },
    { label: "/projects", path: "/projects" },
    { label: "/stack", path: "/stack" },
    { label: "/contact", path: "/contact" },
  ],
  quickActions: [
    { label: "./view_projects", path: "/projects" },
    { label: "./read_about_me", path: "/#about" },
    { label: "./download_cv", path: "/cv" },
  ],
  experiences: [
    {
      title: "Full-stack Developer",
      company: "SevginWeb",
      place: "Deventer, Netherlands (Remote)",
      description: "Revamped the payment process using modern design and functionality, improving user satisfaction and increasing the conversion rate by ~15% in the first few months post-deployment. Optimize the CI/CD pipeline of the application for a reliable deployment. Delivered a comprehensive notification service by implementing frontend and backend components, streamlining user communication and system alerts.",
      date: "Jan 2023 - Present",
      active: true,
    },
    {
      title: "Full-stack Developer Intern",
      company: "Accenture",
      place: "Amsterdam, Netherlands",
      description: "Researched and engineered microservices using Golang, Python, and React, ensuring scalable and efficient system performance. Deployed microservices on GCP via Azure Pipeline, leveraging Docker and Kubernetes to enable seamless and reliable operations. Enhanced user experience by redesigning the dashboard, improving the logical flow and intuitive presentation of information.",
      date: "May 2022 - Nov 2022",
      active: false,
    },
    {
      title: "Part-time Full-stack Developer",
      company: "SevginWeb",
      place: "Deventer, Netherlands (Remote)",
      description: "Developed SEO-focused blogs using Next.js and headless WordPress, boosting the click-through rate to the main site by ~20% within four months. Implemented a Geo-detection feature with Cloudflare Workers, reducing the bounce rate and improving user engagement over time.",
      date: "Aug 2021 - Dec 2022",
      active: false,
    },
    {
      title: "Full-stack Developer Intern",
      company: "Code.rehab",
      place: "Enschede, Netherlands",
      description: "Developed Front-end using React and GraphQL. Created microservices with Nodejs using AWS serverless for an online magazine platform. Implemented CI/CD pipeline between Jira and AWS.",
      date: "Feb 2021 - Jul 2021",
      active: false,
    },
  ],
  education: [
    {
      title: "BSc Computer Science",
      school: "Saxion University of Applied Sciences",
      place: "Deventer, Netherlands",
      date: "2018 - 2022",
    }
  ],
  projects: [
    {
      title: "Beauty Art Pro",
      description: "WordPress website for a local business in Geneva, Switzerland. Ranked top 5 in local Google search results within months.",
      link: "https://beautyartpro.eu/?utm_source=portfolio",
      tags: ["Wordpress", "SEO"],
    },
    {
      title: "Casinos in Vietnam",
      description: "Satellite blog website with main focus on SEO using Next.js and MUI.",
      link: "https://casinosinvietnam.com",
      tags: ["React", "Next.js", "MUI"],
    },
    {
      title: "Headless WP Blog",
      description: "Developed a layout in React leveraging the power of headless WordPress for content writers.",
      link: "https://test-blog.tranmani.com/",
      tags: ["React", "Wordpress", "Next.js"],
    }
  ],
  contact: {
    email: "you@domain.com",
    subject: "collaboration_proposal"
  },
  stackData: [
    { name: "React", category: "FRONTEND_UI" },
    { name: "Next.js", category: "META_FRAMEWORK" },
    { name: "TypeScript", category: "TYPE_SYSTEM" },
    { name: "Node.js", category: "RUNTIME_ENV" },
    { name: "TailwindCSS", category: "STYLING_ENGINE" },
    { name: "AWS", category: "CLOUD_INFRA" },
    { name: "Kubernetes", category: "ORCHESTRATION" },
    { name: "Docker", category: "CONTAINERIZATION" },
    { name: "PostgreSQL", category: "DATA_STORAGE" },
    { name: "MUI", category: "COMPONENT_LIB" },
    { name: "Framer Motion", category: "ANIMATION_SDK" },
    { name: "MongoDB", category: "NOSQL_DB" },
    { name: "Redis", category: "CACHE_DB" },  
    { name: "GraphQL", category: "API_QUERY_LANG" },
    { name: "REST", category: "API_ARCH" },
    { name: "Cloudflare Worker", category: "SERVERLESS" },
    { name: "Azure Pipeline", category: "CI/CD"},
    { name: "GitHub Actions", category: "CI/CD"}
  ] 
};
