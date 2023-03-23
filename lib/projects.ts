interface IProject {
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!",
    image: "/logo.webp",
    link: "#",
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
  {
    title: "Web Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!",
    image: "/logo.webp",
    link: "https://casinosinvietnam.com",
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
        color: "rgba(0,129,203,70%)",
        technology: "MUI",
      },
      {
        color: "white",
        technology: "Vercel",
      },
      {
        color: "rgba(255,70,70,70%)",
        technology: "SEO",
      },
    ],
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!",
    image: "/logo.webp",
    link: "https://google.com",
    github: "https://github.com",
    technologies: [
      {
        color: "bg-red-500",
        technology: "React",
      },
      {
        color: "bg-blue-500",
        technology: "Next.js",
      },
      {
        color: "bg-green-500",
        technology: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!",
    image: "/logo.webp",
    link: "https://google.com",
    github: "https://github.com",
    technologies: [
      {
        color: "bg-red-500",
        technology: "React",
      },
      {
        color: "bg-blue-500",
        technology: "Next.js",
      },
      {
        color: "bg-green-500",
        technology: "Tailwind CSS",
      },
    ],
  },
];
