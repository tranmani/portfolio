import Image from "next/image";

interface ITechnology {
  name: string;
  logo: string;
  className: string;
}

const Technologies: React.FC = () => {
  const imgSize = (className: string) => {
    if (className.includes("span-2")) return 200;
    if (className.includes("span-1")) return 100;
    return 100;
  };

  return (
    <section className="mb-24" id="technologies">
      <div className="">
        <div className="grid w-full auto-rows-auto grid-cols-6 gap-4">
          {technologies.map((technology, index) => (
            <div key={index} className={`flex flex-col items-center justify-center ${technology.className}`}>
              <Image
                src={technology.logo}
                alt={technology.name}
                width={imgSize(technology.className)}
                height={imgSize(technology.className)}
              />
              <span className="text-center">{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const technologies: ITechnology[] = [
  {
    name: "React",
    logo: "/tech-logo/react.svg",
    className: "col-span-2 row-span-2",
  },
  {
    name: "TypeScript",
    logo: "/tech-logo/typescript.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Next.js",
    logo: "/tech-logo/nextjs.svg",
    className: "col-span-1 row-span-1",
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
    className: "col-span-1 row-span-1",
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
    name: "MySQL",
    logo: "/tech-logo/mysql.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Docker",
    logo: "/tech-logo/docker.svg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "Kubernetes",
    logo: "/tech-logo/kubernetes.svg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "GraphQL",
    logo: "/tech-logo/graphql.svg",
    className: "col-span-1 row-span-1",
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
