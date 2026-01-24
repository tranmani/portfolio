import { generateAscii } from "./ascii";

export const portfolioConfig = {
  profile: {
    name: "Huy",
    title: "SOFTWARE ENGINEER",
    asciiTitle: generateAscii("Huy Tran"),
    location: "Amsterdam, NL (AWS-01)",
    yearsXp: "5+",
    projectsCount: "10+",
    currentStack: ["K8S", "AWS", "NODE", "TS"],
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
      title: "Junior Web Developer",
      company: "SevginWeb",
      place: "Deventer, Netherlands",
      description: "Further develop and responsible for the payment service of the application. Provided timely support to users for payment-related issues. Evaluated and improved payment service continuously.",
      date: "Jan 2023 - Present",
    },
    {
      title: "Web Developer Intern",
      company: "Accenture",
      place: "Amsterdam, Netherlands",
      description: "Interviewing stakeholders in order to create the front-end designs. Developing the microservice with Go. Deploying the microservice to GCP with Azure Pipeline, utilized Docker and Kubernetes.",
      date: "May 2022 - Nov 2022",
    },
    {
      title: "Part-time Web Developer",
      company: "SevginWeb",
      place: "Remote",
      description: "Building a number of blogs from scratch with Nextjs and headless WordPress with a focus on SEO. Creating serverless scripts using Cloudflare Worker. Experiencing working in the iGaming industry.",
      date: "Aug 2021 - Dec 2022",
    },
    {
      title: "Web Developer Intern",
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
  }
};
