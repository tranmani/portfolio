import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
  };

  const whileInView = (delay: number, duration: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
      },
    };
  };

  return (
    <section
      className="stop-[rgba(105,90,166,0.5)] flex h-[100vh] w-full items-center justify-center bg-gradient-to-t from-white to-[rgba(105,90,166,0.35)] dark:from-[rgba(26,26,26,0.05)] dark:to-[rgba(105,90,166,0.35)]"
      id="hero"
    >
      <div className="grow-1">
        <h1 className="bold mb-4 text-4xl text-slate-800 opacity-80 dark:text-slate-50">
          <motion.span
            initial="initial"
            whileInView={whileInView(0, 0.2)}
            viewport={{ once: true }}
            variants={textVariants}
            className="mb-[calc(1px_+_(27_-_4)*((100vw-200px)/(1300-300)))] block text-[calc(30px_+_(40_-_30)*((100vw_-_200px)/(1300_-_300)))] font-[300]"
          >
            HI!
          </motion.span>
          <motion.span
            initial="initial"
            whileInView={whileInView(0.15, 0.2)}
            viewport={{ once: true }}
            variants={textVariants}
            className="mb-0, block text-[calc(40px_+_(45_-_30)*((100vw_-_200px)/(1300_-_300)))] font-[300]"
          >
            I am
            <motion.span className="font-bold text-violet-500"> Huy Tran</motion.span>
          </motion.span>
        </h1>
        <br />
        <motion.p
          initial="initial"
          whileInView={whileInView(0.3, 0.2)}
          viewport={{ once: true }}
          variants={textVariants}
          className="spacing-[calc(1px_+_(7_-_1)*((100vw_-_200px)/(1300_-_300)))] text-[calc(15px_+_(15_-_10)*((100vw_-_200px)/(1300_-_300)))] uppercase opacity-80"
        >
          front-end / back-end developer
          <br />
          based in the netherlands
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
