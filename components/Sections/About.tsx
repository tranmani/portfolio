import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="mb-24 text-black dark:text-white" id="about">
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
        <div className="basis-[100%] md:basis-1/4">
          <div className="flex justify-center">
            <Image src="/logo.webp" height={250} width={250} className="rounded-full" alt="Huy Tran's picture" priority />
          </div>
        </div>
        <div className="basis-[100%] md:basis-1/2">
          <p className="">Who Am I ?</p>
          <h2 className="">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae
            eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
            <br />
            culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates
            labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia
            temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
          </p>
          <Link
            href="https://nbviewer.org/github/tranmani/tranmani/blob/dev/HuyTran_CV.pdf"
            target="_blank"
            type="button"
            className="group relative mt-4 overflow-hidden rounded border border-gray-700 px-7 py-2 font-semibold dark:border-gray-200 dark:text-gray-100">
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
