export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  noFollow?: boolean;
  technologies: {
    color: string;
    technology: string;
  }[];
}

export const projects: IProject[] = [
  {
    title: "This website",
    description:
      "I created this website to showcase my best work and make it easy for others to access my resume. It's an invaluable tool for networking and job searching, as it allows me to connect with potential employers and showcase my expertise. On my website, I've included a selection of my best work, along with a summary of my education and qualifications and contact information for those interested in connecting with me.",
    image: "/projects/project1.png",
    link: "#hero",
    github: "https://github.com/tranmani/portfolio",
    technologies: [
      {
        color: "rgba(97,218,251,70%)",
        technology: "React",
      },
      {
        color: "white",
        technology: "Next.js",
      },
      {
        color: "rgba(7,182,213,70%)",
        technology: "Tailwind CSS",
      },
      {
        color: "rgba(255,117,117,70%)",
        technology: "Framer Motion",
      },
    ],
  },
  {
    title: "A satellite website",
    description:
      "As part of my part-time job, I created a satellite blog website with a main focus on SEO using Next.js and MUI. I believe that creating a website optimized for SEO can provide significant benefits for businesses, including increased traffic, leads, and revenue. I chose to use Next.js and MUI because they are powerful tools that enable server-side rendering, improve page load times, and offer pre-built components and styles for a visually appealing and user-friendly website. By creating a website with a main focus on SEO, I was able to demonstrate my ability to build a website that is optimized for search engine rankings, and I am excited about the opportunity to continue learning and expanding my skills in this area.",
    image: "/projects/project2.png",
    link: "https://casinosinvietnam.com",
    github: "https://github.com/tranmani/portfolio",
    noFollow: true,
    technologies: [
      {
        color: "rgba(97,218,251,70%)",
        technology: "React",
      },
      {
        color: "white",
        technology: "Next.js",
      },
      {
        color: "rgba(0, 176, 255, 70%)",
        technology: "MUI",
      },
    ],
  },
];
