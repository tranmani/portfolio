import Layout from "@/components/layout";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Portfolio from "@/components/Sections/Portfolio";
import { GetServerSideProps } from "next/types";
import React from "react";

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Experience />
    </Layout>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       windowSize: 0,
//     },
//   };
// };
