import ChevronRight from "@/components/shared/icons/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import TechnologyChip from "./TechnologyChip";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
  };
  index: number;
  technologies: {
    color: string;
    technology: string;
  }[];
}

const Project: React.FC<ProjectProps> = ({ project, index, technologies }) => {
  return (
    <div className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} flex-wrap gap-12 md:flex-nowrap`}>
      <div className="basis-[100%] md:basis-1/2">
        <Link href={project.link} target="_blank">
          <Image src={project.image || "/logo.webp"} height={550} width={550} className="" alt={`${project.title} image`} />
        </Link>
      </div>
      {/* Project info */}
      <div className="flex basis-[100%] flex-col md:basis-1/2">
        <Link href={project.link} target="_blank" className="mb-12">
          <h3 className="text-1xl font-bold uppercase md:text-2xl">{project.title}</h3>
        </Link>
        <p className="mb-12">{project.description}</p>
        <div className="mb-12 flex flex-wrap gap-4">
          {technologies.map((technology, index) => (
            <TechnologyChip key={index} color={technology.color} technology={technology.technology} />
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={project.link} target="_blank" className="w-32">
            <div className="flex items-center gap-1 transition-all ease-in-out hover:gap-4">
              <span>Visit the site</span>
              <span>
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link href={project.github} target="_blank">
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
