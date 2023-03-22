import useDarkMode from "@/lib/hooks/use-dark-mode";
import useMediaQuery from "@/lib/hooks/use-media-query";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const { theme } = useDarkMode();
  const isSmallerThan600 = useMediaQuery("(max-width: 600px)");
  const isSmallerThan1024 = useMediaQuery("(max-width: 1024px)");

  const getBubbleColor = () => {
    if (theme === "light") {
      return "#000";
    } else {
      return "#fff";
    }
  };

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
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onhover: {
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
            value: getBubbleColor(),
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
            out_mode: "out",
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
