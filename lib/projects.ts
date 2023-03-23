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
