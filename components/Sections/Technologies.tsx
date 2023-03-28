import Image from "next/image";
import React from "react";
import Tooltip from "../shared/tooltip";
import styled from "styled-components";
import { motion } from "framer-motion";
import TechnologyIcon from "../shared/icons/TechnologyIcon";
import { technologies } from "@/lib/technologies";
import useWindowSize from "@/lib/hooks/use-window-size";

const Technologies: React.FC = () => {
  const { isMobile } = useWindowSize();

  const imgSize = (className: string) => {
    if (className === "col-span-2") return 200;
    if (className === "col-span-1") return 100;
    if (className === "row-span-2") return 200;
    if (className === "row-span-1") return 100;
    return 100;
  };

  const wrapperVariants = {
    hover: {
      scale: 1.1,
    },
    initial: {
      scale: 0,
    },
    whileInView: {
      scale: 1,
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.2,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  return (
    <section className="max-w-[85vw] pb-32 md:max-w-[1200px]" id="technologies">
      <div className="mb-20 text-center">
        <div className="mb-4 flex justify-center">
          <TechnologyIcon />
        </div>
        <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">Technologies</h2>
        <p className="text-neutral-400">Technologies I have worked with</p>
      </div>
      <div className="flex justify-center">
        <div className="grid auto-rows-auto grid-cols-3 gap-4 md:grid-cols-6 md:gap-6 md:px-12">
          {technologies.map((technology, index) => (
            <Tooltip content={technology.name} key={index}>
              <Wrapper
                initial="initial"
                whileInView="whileInView"
                whileHover="hover"
                variants={wrapperVariants}
                transition={{
                  ease: "easeOut",
                  duration: 0.3,
                }}
                className={`flex h-full flex-col items-center justify-center rounded-lg border bg-[rgba(233,231,234,0.5)] p-4 dark:border-[rgba(255,255,255,.09)] dark:bg-[rgb(110,110,110)] ${technology.className}`}
              >
                <Glow
                  variants={glowVariants}
                  transition={{
                    ease: "easeIn",
                    delay: 0.05,
                  }}
                  style={technology.style}
                />
                <Card
                  variants={cardVariants}
                  transition={{
                    ease: "easeOut",
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <Image
                    src={technology.logo}
                    alt={technology.name}
                    height={isMobile ? 100 : imgSize(technology.className.split(" ")[1])}
                    width={isMobile ? 100 : imgSize(technology.className.split(" ")[0])}
                    aria-label={technology.name}
                    style={{ objectFit: "contain" }}
                  />
                </Card>
              </Wrapper>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const Wrapper = styled(motion.div)`
  position: relative;
`;

const Glow = styled(motion.div)`
  @media only screen and (min-width: 768px) {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(15px);
    border-radius: 16px;
  }
`;

const Card = styled(motion.div)``;
