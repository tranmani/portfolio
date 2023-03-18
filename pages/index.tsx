import Layout from "@/components/layout";
import Image from "next/image";
export default function Home() {
  return (
    <Layout>
      <section className="stop-[rgba(105,90,166,0.5)] flex h-[100vh] items-center  justify-center bg-gradient-to-t from-white to-[rgba(105,90,166,0.35)]">
        <div className="grow-1">
          <h1 className="bold mb-4 text-4xl text-slate-800 opacity-80">
            <span className="mb-[calc(1px+(27-4)*((100vw-200px)/(1300-300)))] block text-[calc(30px+(30-30)*((100vw-200px)/(1300-300)))] font-[500]">
              HI!
            </span>
            <span className="mb-0, block text-[calc(30px+(35-30)*((100vw-200px)/(1300-300)))]">I am Huy Tran</span>
          </h1>
          <br />
          <p className="spacing-[calc(1px+(7-1)*((100vw-200px)/(1300-300)))] text-[calc(10px+(12-10)*((100vw-200px)/(1300-300)))] uppercase opacity-80">
            front-end / back-end developer
          </p>
        </div>
      </section>
      <section className="mb-24">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta
              quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
              <br />
              culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique,
              voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione
              eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
            </p>
            <button className="">Download CV</button>
          </div>
        </div>
      </section>
      <section className="h-[100vh] min-h-[100vh]">abc</section>
    </Layout>
  );
}
