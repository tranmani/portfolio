import CalendarIcon from "../shared/icons/CalendarIcon";

interface IExperience {
  title: string;
  company: string;
  place: string;
  description: string;
  date: string;
}

const Experience: React.FC = () => {
  const renderCalendarIcon = () => {
    return (
      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <CalendarIcon />
      </span>
    );
  };

  return (
    <section className="mb-24 max-w-[85vw] md:max-w-[1200px] md:px-12" id="experience">
      <div className="flex flex-wrap gap-x-8 md:flex-nowrap lg:gap-x-20">
        <div className="basis-[100%] md:basis-[30%] lg:basis-[20%]">
          <div className="mb-14 before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:bg-[rgba(105,90,166,0.6)] sm:text-left">
            <h3 className="text-3xl font-semibold uppercase">Experiences</h3>
            <span className="text-sm uppercase tracking-wider dark:text-gray-400">My working experience</span>
          </div>
        </div>
        <div className="relative basis-[100%] border-l border-dashed border-gray-200 dark:border-gray-700 md:basis-[70%] lg:basis-[80%]">
          {experiences.map((experience, index) => (
            <div className="mb-10 ml-6" key={index}>
              {renderCalendarIcon()}
              <div className="mb-1 items-end">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</span>
                <span className="text-sm">
                  {" - " + experience.company} - {experience.place}
                </span>
                {index === 0 && (
                  <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Current
                  </span>
                )}
              </div>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description.split("|").map((description, index) => {
                  return (
                    <span key={description}>
                      {description}
                      {experience.description.split("|").length - 1 !== index && <br />}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

const experiences: IExperience[] = [
  {
    title: "Junior Web Developer",
    company: "SevginWeb",
    place: "Deventer, Netherlands",
    description: "Further develop the deposit page of the application",
    date: "February 2023 - Present",
  },
  {
    title: "Web Developer Intern",
    company: "Accenture",
    place: "Amsterdam, Netherlands",
    description:
      "- Interviewing stakeholders in order to create the front-end designs.|- Developing the microservice with Go.|- Deploying the microservice to GCP with Azure Pipeline, utilized Docker and Kubernetes.",
    date: "May 2022 - November 2022",
  },
  {
    title: "Part-time Web Developer",
    company: "SevginWeb",
    place: "Remote",
    description:
      "- Building a number of blogs from scratch with Nextjs and headless WordPress with a focus on SEO.|- Creating serverless scripts using Cloudflare Worker.|- Experiencing working in the iGaming industry.",
    date: "August 2021 - December 2022",
  },
  {
    title: "Web Developer Intern",
    company: "Code.rehab",
    place: "Enschede, Netherlands",
    description: "Helping further develop an online magazine platform - Greenzeen.io",
    date: "February 2021 - July 2021",
  },
  {
    title: "Part-time Web Developer",
    company: "Eye Designer",
    place: "Geneva, Switzerland",
    description:
      "- Responsible for the social media appearance of the salon.|- Setting up a few e-commerce websites (NopCommerce) for the business BrowHenna.ch - DluxPro.com.",
    date: "July 2020 - December 2020",
  },
];
