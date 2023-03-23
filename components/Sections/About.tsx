import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="mb-24 max-w-[85vw] text-black dark:text-white md:max-w-[1200px] md:px-12" id="about">
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
        <div className="basis-[100%] md:basis-1/4">
          <div className="flex justify-center">
            <Image
              src="/logo.webp"
              height={250}
              width={250}
              className="rounded-full"
              alt="Huy Tran's picture"
              priority
            />
          </div>
        </div>
        <div className="basis-[100%] md:basis-1/2">
          <p className="mb-2">Who Am I ?</p>
          <p>
            I&apos;m a frontend programmer who have experience with creating responsive and user-friendly websites.
            I&apos;m proficient in JavaScript, React, Vue and Nodejs. I enjoy learning and adapt to new technologies as
            well as solving challenging problems. Some of my recent projects include this portfolio website, a blog
            platform for with headless CMS with a focus in SEO.
          </p>
          <br />
          <p className="pb-6">
            I have a degree in computer science from Saxion University and I&apos;m currently working remotely in
            Almere, the Netherlands.
          </p>
          <Link
            href="https://nbviewer.org/github/tranmani/tranmani/blob/dev/HuyTran_CV.pdf"
            target="_blank"
            type="button"
            className="group relative mt-4 inline-block overflow-hidden rounded border border-gray-700 px-7 py-4 font-semibold dark:border-gray-200 dark:text-gray-100"
          >
            Download CV
            <span className="whitespace-no-wrap absolute -top-7 -right-7 origin-bottom-left -translate-y-full translate-x-1/3 rotate-45 transform bg-[rgba(105,90,166,0.6)] px-5 py-1 text-center text-xs uppercase tracking-wider text-white transition-all ease-in-out group-hover:top-0 group-hover:right-0 ">
              \^o^/
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
