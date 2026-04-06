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
    { label: "./read_experience", path: "/experience" },
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
      title: "FamMedley",
      description: "Fammedley is a Go-powered backend supporting a cross-platform Expo application for family medical and daily coordination, featuring AI-driven wellness insights and real-time task management. Built on a clean, layered architecture, it utilizes a sophisticated synchronization engine and a robust gamification economy to drive engagement through collaborative rewards and streaks. The project employs an automated CI/CD pipeline via GitHub Actions for containerized deployment, with infrastructure orchestrated by Terraform and a full observability stack using Prometheus, Grafana, and Loki.",
      link: "https://fammedley.com/?utm_source=portfolio",
      tags: ["Go", "Expo", "React Native", "PostgreSQL", "Redis", "Google Cloud Platform", "Docker", "K8s", "GitHub Actions", "Terraform", "Prometheus", "Grafana", "Loki"],
    },
    {
      title: "CI/CD Pipeline Project",
      description: "Designed and implemented a multi-cloud CI/CD pipeline using Azure DevOps to build, containerize, and deploy a production Next.js application with Docker to Google Cloud Artifact Registry and Kubernetes (GKE), with cloud resources provisioned using Terraform. \nProvisioned and operated infrastructure and self-hosted CI agents via Terraform, implementing secure service-account authentication, Docker cache and storage optimization, and automated cleanup to ensure reliable, scalable deployments. ",
      tags: ["Azure DevOps", "Terraform", "Docker", "GKE", "K8s"],
    },
    {
      title: "Portfolio Website v2",
      description: "I updated my portfolio website to update my skills and projects.",
      link: "https://tranmani.com/?utm_source=portfolio",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Managed Public Cloud",
      description: "Managed a public cloud infrastructure using OpenStack, hosting approximately 10 WordPress websites and counting and a selfhosted n8n automation system. \nGained hands-on experience with Linux and cloud infrastructure-as-a-service, enhancing system management and troubleshooting skills. Ensured reliable performance and uptime for hosted services.",
      tags: ["OpenStack", "Linux", "n8n", "Wordpress", "Cloud"],
    },
    {
      title: "Beauty Art Pro",
      description: "WordPress website for a local business in Geneva, Switzerland. Ranked top 5 in local Google search results within months.",
      link: "https://beautyartpro.eu/?utm_source=portfolio",
      tags: ["Wordpress", "SEO"],
    },
    {
      title: "Portfolio Website v1",
      description: "I created this website to showcase my best work and make it easy for others to access my resume. It's an invaluable tool for networking and job searching, as it allows me to connect with potential employers and showcase my expertise. On my website, I've included a selection of my best work, along with a summary of my education and qualifications and contact information for those interested in connecting with me.",
      link: "https://portfolio-git-v1-huy-trans-projects-c23295af.vercel.app/",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Casino Review Website",
      description: "I developed an SEO-optimized satellite blog using Next.js and MUI to maximize search rankings, traffic, and lead generation for the business. This project leveraged server-side rendering and premium UI components to deliver a high-performance, visually appealing user experience.",
      link: "https://review.tranmani.com/?utm_source=portfolio",
      tags: ["React", "Next.js", "MUI"],
    },
    {
      title: "Headless WP Blog",
      description: "Developed a layout in React leveraging the power of headless WordPress for content writers.",
      link: "https://test-blog.tranmani.com/?utm_source=portfolio",
      tags: ["React", "Wordpress", "Next.js"],
    },
  ],
  contact: {
    email: "minhhuy8137@gmail.com",
    subject: "collaboration_proposal",
    linkedIn: "https://www.linkedin.com/in/minh-huy-tran/",
    github: "https://github.com/tranmani",
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
