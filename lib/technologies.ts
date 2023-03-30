export interface ITechnology {
  name: string;
  logo: string;
  className: string;
  style: React.CSSProperties;
  type: "frontend" | "backend" | "other";
}

export const technologies: ITechnology[] = [
  {
    name: "TypeScript",
    logo: "/tech-logo/typescript.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "frontend",
  },
  {
    name: "Next.js",
    logo: "/tech-logo/nextjs.svg",
    className: "col-span-2 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "frontend",
  },
  {
    name: "Node.js",
    logo: "/tech-logo/nodejs.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "backend",
  },
  {
    name: "MongoDB",
    logo: "/tech-logo/mongodb.svg",
    className: "col-span-2 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "backend",
  },
  {
    name: "TailwindCSS",
    logo: "/tech-logo/tailwind.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "frontend",
  },
  {
    name: "Git",
    logo: "/tech-logo/git.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "other",
  },
  {
    name: "React",
    logo: "/tech-logo/react.svg",
    className: "col-span-2 row-span-2",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "frontend",
  },
  {
    name: "Github",
    logo: "/tech-logo/github.svg",
    className: "col-span-1 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "other",
  },
  {
    name: "HTML",
    logo: "/tech-logo/html.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "frontend",
  },
  {
    name: "CSS",
    logo: "/tech-logo/css.svg",
    className: "col-span-1 row-span-2",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "frontend",
  },
  {
    name: "JavaScript",
    logo: "/tech-logo/javascript.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "frontend",
  },
  {
    name: "Python",
    logo: "/tech-logo/python.svg",
    className: "col-span-1 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "backend",
  },
  {
    name: "Kubernetes",
    logo: "/tech-logo/kubernetes.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "other",
  },
  {
    name: "MySQL",
    logo: "/tech-logo/mysql.svg",
    className: "col-span-2 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "backend",
  },
  {
    name: "GraphQL",
    logo: "/tech-logo/graphql.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "backend",
  },
  {
    name: "Docker",
    logo: "/tech-logo/docker.svg",
    className: "col-span-2 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "other",
  },
  {
    name: "Vercel",
    logo: "/tech-logo/vercel.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "other",
  },
  {
    name: "Netlify",
    logo: "/tech-logo/netlify.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "other",
  },
  {
    name: "Golang",
    logo: "/tech-logo/go.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "backend",
  },
  {
    name: "Azure DevOps",
    logo: "/tech-logo/azure-devops.svg",
    className: "col-span-1 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "other",
  },
  {
    name: "Gitlab",
    logo: "/tech-logo/gitlab.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "other",
  },
  {
    name: "MUI",
    logo: "/tech-logo/mui.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(46, 131, 255) -10%, rgb(235, 125, 159) 50%, rgb(255, 203, 190) 100%)",
    },
    type: "frontend",
  },
  {
    name: "Quasar",
    logo: "/tech-logo/quasar.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(120deg, rgb(254, 173, 166) 0%, rgb(245, 239, 239) 100%)",
    },
    type: "frontend",
  },
  {
    name: "Vue.js",
    logo: "/tech-logo/vue.svg",
    className: "col-span-1 row-span-1",
    style: {
      background:
        "linear-gradient(90deg,#6d9ee7 12.5%,#adbfe3 26.04%,#f0c9b4 39.06%,#f4ba6e 56.96%,#ffc178 70.83%,#e58334 92.71%)",
    },
    type: "frontend",
  },
  {
    name: "Figma",
    logo: "/tech-logo/figma.svg",
    className: "col-span-1 row-span-1",
    style: {
      background: "linear-gradient(90deg, rgb(167, 159, 253) -10%, rgb(227, 190, 233) 40%, rgb(244, 168, 154) 70%)",
    },
    type: "other",
  },
];
