import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="mb-24 max-w-[85vw] text-black dark:text-white md:max-w-[1400px] md:px-12" id="about">
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
        <div className="basis-[100%] md:basis-1/4">
          <div className="flex justify-center">
            <Image src="/logo.webp" height={250} width={250} className="rounded-full" alt="Huy Tran's picture" />
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
          <button className="">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
