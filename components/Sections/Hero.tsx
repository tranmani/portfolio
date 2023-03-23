const Hero: React.FC = () => {
  return (
    <section
      className="stop-[rgba(105,90,166,0.5)] flex h-[100vh] w-full items-center justify-center bg-gradient-to-t from-white to-[rgba(105,90,166,0.35)] dark:from-[rgba(26,26,26,0.35)] dark:to-[rgba(105,90,166,0.35)]"
      id="hero"
    >
      <div className="grow-1">
        <h1 className="bold mb-4 text-4xl text-slate-800 opacity-80 dark:text-slate-50">
          <span className="mb-[calc(1px_+_(27_-_4)*((100vw-200px)/(1300-300)))] block text-[calc(30px_+_(40_-_30)*((100vw_-_200px)/(1300_-_300)))] font-[500]">
            HI!
          </span>
          <span className="mb-0, block text-[calc(40px_+_(45_-_30)*((100vw_-_200px)/(1300_-_300)))]">
            I am Huy Tran
          </span>
        </h1>
        <br />
        <p className="spacing-[calc(1px_+_(7_-_1)*((100vw_-_200px)/(1300_-_300)))] text-[calc(15px_+_(15_-_10)*((100vw_-_200px)/(1300_-_300)))] uppercase opacity-80">
          front-end / back-end developer
          <br />
          based in the netherlands
        </p>
      </div>
    </section>
  );
};

export default Hero;
