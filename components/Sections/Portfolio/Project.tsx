import ChevronRight from "@/components/shared/icons/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import TechnologyChip from "./TechnologyChip";
import { motion } from "framer-motion";
import React from "react";

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
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", delay: 0.05 },
      }}
      className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} flex-wrap gap-12 md:flex-nowrap`}
    >
      <div className="basis-[100%] md:basis-1/2">
        <Link href={project.link} target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"}>
          <Image src={project.image || "/logo.webp"} height={550} width={550} alt={`${project.title} image`} />
        </Link>
      </div>
      {/* Project info */}
      <div className="flex basis-[100%] flex-col md:basis-1/2">
        <Link href={project.link} target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"} className="mb-12">
          <h3 className="text-1xl font-bold uppercase md:text-2xl">{project.title}</h3>
        </Link>
        <p className="mb-12 text-justify">{project.description}</p>
        <div className="mb-12 flex flex-wrap gap-4">
          {technologies.map((technology, index) => (
            <TechnologyChip key={index} color={technology.color} technology={technology.technology} />
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={project.link} target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"} className="w-32">
            <div className="flex items-center gap-1 transition-all ease-in-out hover:gap-4">
              <span>Visit the site</span>
              <span>
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link href={project.github} target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"}>
            <span>Github</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
