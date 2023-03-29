export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
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
    github: "https://github.com/tranmani",
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
        color: "white",
        technology: "Vercel",
      },
    ],
  },
];
