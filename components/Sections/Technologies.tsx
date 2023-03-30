import Image from "next/image";
import React from "react";
import Tooltip from "../shared/tooltip";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import TechnologyIcon from "../shared/icons/TechnologyIcon";
import { technologies } from "@/lib/technologies";
import useWindowSize from "@/lib/hooks/use-window-size";

type FilterType = "all" | "frontend" | "backend" | "other";

const Technologies: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [filteredTechnologies, setFilteredTechnologies] = React.useState(technologies);
  const [type, setType] = React.useState<FilterType>("all");

  const buttonRef1 = React.useRef<HTMLButtonElement>(null);
  const buttonRef2 = React.useRef<HTMLButtonElement>(null);
  const buttonRef3 = React.useRef<HTMLButtonElement>(null);
  const buttonRef4 = React.useRef<HTMLButtonElement>(null);

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
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
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

  React.useEffect(() => {
    if (type === "all") {
      setFilteredTechnologies(technologies);
    } else {
      setFilteredTechnologies(technologies.filter((technology) => technology.type === type));
    }
  }, [type]);

  const handleChangeType = (type: FilterType) => () => {
    setType(type);
  };

  const getStyle = (type: FilterType) => {
    switch (type) {
      case "all":
        return `before:w-[41px] before:left-0`;
      case "frontend":
        return `before:w-[87px] before:left-[41px]`;
      case "backend":
        return `before:w-[83px] before:left-[128px]`;
      case "other":
        return `before:w-[63px] before:left-[211px]`;
      default:
        return 0;
    }
  };

  return (
    <section className="max-w-[85vw] pb-32 md:max-w-[1200px]" id="technologies">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <TechnologyIcon />
        </div>
        <h2 className="text-2xl font-bold uppercase md:text-3xl">Technologies</h2>
        <p className="text-neutral-400">Technologies I have worked with</p>
        <div className="my-12 flex justify-center">
          <div
            className={`relative flex w-fit justify-center overflow-hidden rounded-xl before:absolute before:z-[-1] before:h-full before:bg-[rgba(105,90,166,0.4)] before:transition-all before:duration-300 before:ease-linear before:content-[''] dark:before:bg-[rgba(105,90,166,1)] ${getStyle(
              type,
            )}`}
          >
            <StyledButton
              onClick={handleChangeType("all")}
              className={`w-[41px] rounded-l-lg border-r-[1px] border-slate-300 hover:shadow-[inset_0_0_4px_rgba(105,90,166,0.4)] dark:border-slate-600 dark:hover:shadow-[inset_0_0_4px_rgba(105,90,166,1)]`}
              ref={buttonRef1}
            >
              All
            </StyledButton>
            <StyledButton
              onClick={handleChangeType("frontend")}
              className={`w-[87px] border-r-[1px] border-slate-300 hover:shadow-[inset_0_0_4px_rgba(105,90,166,0.4)] dark:border-slate-600 dark:hover:shadow-[inset_0_0_4px_rgba(105,90,166,1)]`}
              ref={buttonRef2}
            >
              Frontend
            </StyledButton>
            <StyledButton
              onClick={handleChangeType("backend")}
              className={`w-[83px] border-r-[1px] border-slate-300 hover:shadow-[inset_0_0_4px_rgba(105,90,166,0.4)] dark:border-slate-600 dark:hover:shadow-[inset_0_0_4px_rgba(105,90,166,1)]`}
              ref={buttonRef3}
            >
              Backend
            </StyledButton>
            <StyledButton
              onClick={handleChangeType("other")}
              className={`w-[63px] rounded-r-lg hover:shadow-[inset_0_0_4px_rgba(105,90,166,0.4)] dark:border-slate-600 dark:hover:shadow-[inset_0_0_4px_rgba(105,90,166,1)]`}
              ref={buttonRef4}
            >
              Other
            </StyledButton>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid auto-rows-auto grid-cols-3 gap-4 md:grid-cols-6 md:gap-6 md:px-12">
          <AnimatePresence>
            {filteredTechnologies.map((technology, index) => (
              <Tooltip content={technology.name} key={index}>
                <Wrapper
                  key={index}
                  initial="initial"
                  whileInView="whileInView"
                  whileHover="hover"
                  variants={wrapperVariants}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                  }}
                  exit="exit"
                  layout
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
          </AnimatePresence>
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

const StyledButton = styled("button")`
  padding: 0.5rem 0.7rem;
  // background-color: rgba(105, 90, 166, 0.4);
  transition: all 0.2s ease-in-out;
  z-index: 4;
`;
