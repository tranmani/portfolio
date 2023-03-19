import Layout from "@/components/layout";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Portfolio from "@/components/Sections/Portfolio";
import Technologies from "@/components/Sections/Technologies";
import React from "react";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Hero />
        <div className="max-w-[85vw] md:max-w-[1200px] md:px-12">
          <About />
          <Portfolio />
          <Experience />
          <Technologies />
        </div>
      </div>
    </Layout>
  );
};

export default Home;