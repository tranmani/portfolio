import ChevronRight from "@/components/shared/icons/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import TechnologyChip from "./TechnologyChip";
import { motion } from "framer-motion";
import React from "react";
import { IProject } from "@/lib/projects";

interface ProjectProps {
  project: IProject;
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
        transition: { type: "spring", delay: 0.15 },
      }}
      viewport={{ once: true }}
      className={`flex ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } flex-wrap gap-4 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800 md:flex-nowrap md:gap-12 md:p-12`}
    >
      <div className="basis-[100%] md:basis-1/2">
        <Link
          href={project.link}
          target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"}
          referrerPolicy={project.noFollow ? "no-referrer" : "origin"}
        >
          <Image
            src={project.image || "/logo.webp"}
            height={550}
            width={550}
            alt={`${project.title} image`}
            className="rounded-lg"
          />
        </Link>
      </div>
      {/* Project info */}
      <div className="flex basis-[100%] flex-col md:basis-1/2">
        {/* Title */}
        <Link
          href={project.link}
          target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"}
          className="mb-6 md:mb-12"
          referrerPolicy={project.noFollow ? "no-referrer" : "origin"}
        >
          <h3 className="text-1xl font-bold uppercase md:text-2xl">{project.title}</h3>
        </Link>
        {/* Description */}
        <p className="mb-6 text-justify md:mb-12">{project.description}</p>
        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-4 md:mb-12">
          {technologies.map((technology, index) => (
            <TechnologyChip key={index} color={technology.color} technology={technology.technology} />
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={project.link}
            target={project.link.substring(0, 1) === "#" ? "_top" : "_blank"}
            className="w-32"
            referrerPolicy={project.noFollow ? "no-referrer" : "origin"}
          >
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
