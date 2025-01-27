import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 sm:h-80 violet-gradient" />
        </div>

        <div className="z-10 relative">
          <h1
            className={`${styles.heroHeadText} text-white text-[32px] sm:text-[60px] leading-tight`}
          >
            Hi, I'm <span className="text-[#915EFF]">Palash Hawee</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-[14px] sm:text-[24px] leading-normal sm:leading-relaxed`}
          >
            Transforming Ideas into Scalable Solutions
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Responsive scrolling indicator */}
      <div className="absolute bottom-10 sm:bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] sm:w-[35px] h-[60px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
