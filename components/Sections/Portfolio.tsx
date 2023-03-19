import Image from "next/image";
import BackgroundAnimation from "../home/BackgroundAnimation";
import Ghost from "../shared/icons/Ghost";
import Project from "./Portfolio/Project";

const Portfolio: React.FC = () => {
  return (
    <section className="mb-24 max-w-[85vw] md:max-w-[1400px]" id="portfolio">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <Ghost className="h-24 w-24" />
        </div>

        <div className="mb-20 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">Work / Projects</h2>
          <p className="text-neutral-400">Selected Work</p>
        </div>

        <div className="md:px-12">
          <div className="flex flex-col items-center gap-16">
            {projects.map((project, index) => (
              <div key={index} className="">
                <Project project={project} index={index + 1} technologies={project.technologies} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

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

const projects: IProject[] = [
  {
    title: "Project 1",
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
    title: "Project 2",
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
