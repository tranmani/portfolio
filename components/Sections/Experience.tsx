import { educations } from "@/lib/educations";
import { experiences } from "@/lib/experiences";
import CalendarIcon from "../shared/icons/CalendarIcon";

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
      {/* Experiences */}
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
              <p className="mb-4 text-justify text-base font-normal text-gray-500 dark:text-gray-400">
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
      {/* Education */}
      <div className="mt-20 flex flex-wrap gap-x-8 md:mt-0 md:flex-nowrap lg:gap-x-20">
        <div className="basis-[100%] md:basis-[30%] lg:basis-[20%]">
          <div className="mb-14 before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:bg-[rgba(105,90,166,0.6)] sm:text-left">
            <h3 className="text-3xl font-semibold uppercase">Education</h3>
            <span className="text-sm uppercase tracking-wider dark:text-gray-400">My certificate</span>
          </div>
        </div>
        <div className="relative basis-[100%] border-l border-dashed border-gray-200 dark:border-gray-700 md:basis-[70%] lg:basis-[80%]">
          {educations.map((education, index) => (
            <div className="mb-10 ml-6" key={index}>
              {renderCalendarIcon()}
              <div className="mb-1 items-end">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{education.title}</span>
                <span className="text-sm">
                  {" - " + education.company} - {education.place}
                </span>
              </div>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {education.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {education.description.split("|").map((description, index) => {
                  return (
                    <span key={description}>
                      {description}
                      {education.description.split("|").length - 1 !== index && <br />}
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
