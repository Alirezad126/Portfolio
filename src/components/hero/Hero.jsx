import "./hero.scss";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  heroImageInitial: {
    opacity: 0,
    x: 2000,
  },

  heroImageAnimate: {
    x: 0,
    transition: {
      duration: 1,
    },
    opacity: 1,
  },

  heroImageInview: {
    y: [0, 80, -80, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Alireza Daneshvar</motion.h2>
          <motion.h1 variants={textVariants}>
            <div>
              <ReactTyped
                strings={[
                  "I'm a Data Scientist",
                  "I'm a Machine Learning Engineer!",
                  "I'm a Casual Singer !!",
                  "I'm a Gamer !!!",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </div>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Services">
              <motion.button variants={textVariants}>
                Try My Projects LIVE!
              </motion.button>
            </a>
            <a>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="scroll.png"
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Singer Engineer
      </motion.div>
      <div className="imageContainer">
        <motion.img
          variants={textVariants}
          initial="heroImageInitial"
          animate="heroImageAnimate"
          whileInView="heroImageInview"
          src="/header-img.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
