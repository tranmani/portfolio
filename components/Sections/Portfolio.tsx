import Project from "./Portfolio/Project";
import React from "react";
import { projects } from "@/lib/projects";
import ProjectIcon from "../shared/icons/ProjectIcon";

const Portfolio: React.FC = () => {
  return (
    <section className="mb-24 max-w-[85vw] md:max-w-[1200px] md:px-12 " id="portfolio">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <ProjectIcon />
        </div>

        <div className="mb-20 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">Work / Projects</h2>
          <p className="text-neutral-400">Selected Work</p>
        </div>

        <div className="">
          <div className="flex flex-col items-center gap-16">
            {projects.map((project, index) => (
              <Project key={index} project={project} index={index + 1} technologies={project.technologies} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
