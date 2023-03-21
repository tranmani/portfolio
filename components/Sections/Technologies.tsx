import useMousePosition from "@/lib/hooks/use-mouse-position";
import Image from "next/image";
import React from "react";
import Tooltip from "../shared/tooltip";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ITechnology {
  name: string;
  logo: string;
  className: string;
}

const Technologies: React.FC = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect() || { left: 0, top: 0 };
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouseX", `${x}px`);
    element.style.setProperty("--mouseY", `${y}px`);
  };

  const imgSize = (className: string) => {
    if (className.includes("span-2")) return 200;
    if (className.includes("span-1")) return 100;
    return 100;
  };

  return (
    // <StyledDiv onMouseMove={handleMouseOver}>
    <section className="w-[100vw] py-32 md:w-[100vw]" id="technologies">
      <div className="flex justify-center">
        <div className="grid max-w-[85vw] auto-rows-auto grid-cols-3 gap-4 md:max-w-[1200px] md:grid-cols-6 md:px-12">
          {technologies.map((technology, index) => (
            <Tooltip content={technology.name} key={index}>
              <motion.div
                onMouseMove={handleMouse}
                className={`flex h-full flex-col items-center justify-center rounded-lg border bg-[rgba(233,231,234,0.5)] p-4 transition-all ease-in-out dark:border-[rgba(255,255,255,.09)] dark:bg-[rgb(145,145,145)] ${technology.className}`}
                id="technology"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Image
                  src={technology.logo}
                  alt={technology.name}
                  height={imgSize(technology.className)}
                  width={imgSize(technology.className)}
                />
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
    // </StyledDiv>
  );
};

export default Technologies;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    background: radial-gradient(
      circle 20vmax at var(--mouseX) var(--mouseY),
      rgba(17, 17, 17, 0.1) 0%,
      rgba(17, 17, 17, 0.5) 50%,
      rgba(17, 17, 17, 0.99) 100%
    );
  }
`;

const technologies: ITechnology[] = [
  {
    name: "TypeScript",
    logo: "/tech-logo/typescript.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Next.js",
    logo: "/tech-logo/nextjs.svg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "Node.js",
    logo: "/tech-logo/nodejs.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "MongoDB",
    logo: "/tech-logo/mongodb.svg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "TailwindCSS",
    logo: "/tech-logo/tailwind.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Git",
    logo: "/tech-logo/git.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "React",
    logo: "/tech-logo/react.svg",
    className: "col-span-2 row-span-2",
  },
  {
    name: "Github",
    logo: "/tech-logo/github.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "HTML",
    logo: "/tech-logo/html.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "CSS",
    logo: "/tech-logo/css.svg",
    className: "col-span-1 row-span-2",
  },
  {
    name: "JavaScript",
    logo: "/tech-logo/javascript.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Python",
    logo: "/tech-logo/python.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Kubernetes",
    logo: "/tech-logo/kubernetes.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "MySQL",
    logo: "/tech-logo/mysql.svg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "GraphQL",
    logo: "/tech-logo/graphql.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Docker",
    logo: "/tech-logo/docker.svg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "Vercel",
    logo: "/tech-logo/vercel.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Netlify",
    logo: "/tech-logo/netlify.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Golang",
    logo: "/tech-logo/go.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Azure DevOps",
    logo: "/tech-logo/azure-devops.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Gitlab",
    logo: "/tech-logo/gitlab.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "MUI",
    logo: "/tech-logo/mui.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Quasar",
    logo: "/tech-logo/quasar.svg",
    className: "col-span-1 row-span-1",
  },
];
