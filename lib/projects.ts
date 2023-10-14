export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  noFollow?: boolean;
  technologies: {
    color: string;
    technology: string;
  }[];
}

export const projects: IProject[] = [
  {
    title: "Beauty Art Pro",
    description:
      "I designed and developed a WordPress website for a local business in Geneva, Switzerland. My responsibilities included researching a suitable cloud provider, setting up a multi-language content, booking and payment system. Enabling the client to easily manage their content and make changes to the website without requiring any technical knowledge. The website is primarily focused on SEO and providing ease for customers to book their appointments. As a result, it quickly ranked in the top 5 of local Google search results within just a few months.",
    image: "/projects/project4.png",
    link: "https://beautyartpro.eu/?utm_source=portfolio",
    technologies: [
      {
        color: "rgba(41,129,255,70%)",
        technology: "Wordpress",
      }
    ],
  },
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
    github: "https://github.com/tranmani",
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
  {
    title: "Blog layout for headless WordPress",
    description:
      "As part of the integration process for a blog function, I developed a layout in React that leveraged the power of headless WordPress. This enabled content writers to create blog content easily without requiring significant communication with the developer. I was responsible for setting up the headless WordPress and integrating it with the layout, which was then seamlessly integrated into a Next.js project to ensure optimal performance and functionality.",
    image: "/projects/project3.png",
    link: "https://test-blog.tranmani.com/",
    github: "https://github.com/tranmani/test-blog",
    technologies: [
      {
        color: "rgba(97,218,251, 70%)",
        technology: "React",
      },
      {
        color: "rgb(31, 111, 147, 70%)",
        technology: "Wordpress",
      },
      {
        color: "rgba(0, 176, 255, 70%)",
        technology: "MUI",
      },
    ],
  },
];
