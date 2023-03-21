const Hero: React.FC = () => {
  return (
    <section
      className="stop-[rgba(105,90,166,0.5)] flex h-[100vh] w-full items-center justify-center bg-gradient-to-t from-white to-[rgba(105,90,166,0.35)] dark:from-[rgba(26,26,26,0.35)] dark:to-[rgba(105,90,166,0.35)]"
      id="hero">
      <div className="grow-1">
        <h1 className="bold mb-4 text-4xl text-slate-800 opacity-80 dark:text-slate-50">
          <span className="mb-[calc(1px+(27-4)*((100vw-200px)/(1300-300)))] block text-[calc(30px+(30-30)*((100vw-200px)/(1300-300)))] font-[500]">
            HI!
          </span>
          <span className="mb-0, block text-[calc(30px+(35-30)*((100vw-200px)/(1300-300)))]">I am Huy Tran</span>
        </h1>
        <br />
        <p className="spacing-[calc(1px+(7-1)*((100vw-200px)/(1300-300)))] text-[calc(10px+(12-10)*((100vw-200px)/(1300-300)))] uppercase opacity-80">
          front-end / back-end developer
          <br />
          based in the netherlands
        </p>
      </div>
    </section>
  );
};

export default Hero;
