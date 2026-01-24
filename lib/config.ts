import { generateAscii } from "./ascii";

export const portfolioConfig = {
  profile: {
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
      place: "Deventer, Netherlands",
      description: "Further develop and responsible for the payment service of the application. Provided timely support to users for payment-related issues. Evaluated and improved payment service continuously.",
      date: "Jan 2023 - Present",
    },
    {
      title: "Full-stack Developer",
      company: "Accenture",
      place: "Amsterdam, Netherlands",
      description: "Interviewing stakeholders in order to create the front-end designs. Developing the microservice with Go. Deploying the microservice to GCP with Azure Pipeline, utilized Docker and Kubernetes.",
      date: "May 2022 - Nov 2022",
    },
    {
      title: "Part-time Full-stack Developer",
      company: "SevginWeb",
      place: "Remote",
      description: "Building a number of blogs from scratch with Nextjs and headless WordPress with a focus on SEO. Creating serverless scripts using Cloudflare Worker. Experiencing working in the iGaming industry.",
      date: "Aug 2021 - Dec 2022",
    },
    {
      title: "Full-stack Developer Intern",
      company: "Code.rehab",
      place: "Enschede, Netherlands",
      description: "Helping further develop an online magazine platform - Greenzeen.io",
      date: "Feb 2021 - Jul 2021",
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
