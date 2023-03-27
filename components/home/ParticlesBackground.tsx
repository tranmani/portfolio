import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import useMediaQuery from "@/lib/hooks/use-media-query";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const { theme } = React.useContext(ThemeContext);
  const isSmallerThan600 = useMediaQuery("(max-width: 600px)");
  const isSmallerThan1024 = useMediaQuery("(max-width: 1024px)");

  const getBubbleNumber = () => {
    if (isSmallerThan600) {
      return 40;
    }

    if (isSmallerThan1024) {
      return 80;
    }

    return 160;
  };

  const getBubbleDistance = () => {
    if (isSmallerThan1024) {
      return 0;
    }

    return 200;
  };

  const getBubbleRepulseDistance = () => {
    if (isSmallerThan1024) {
      return 0;
    }

    return 300;
  };

  return (
    <Particles
      id="particles"
      init={loadFull}
      options={{
        fullScreen: false,
        background: {
          opacity: 0,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: getBubbleDistance(),
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: getBubbleRepulseDistance(),
              duration: 4,
            },
          },
          retina_detect: true,
        },
        particles: {
          color: {
            value: theme === "light" ? "#000" : "#fff",
          },
          number: {
            value: getBubbleNumber(),
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "none",
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
      }}
    />
  );
};
