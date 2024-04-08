import "./about.scss";
import Skills from "./Skills"
import className from "classnames";
import { motion } from "framer-motion";


import SkillBar from "./SkillBar";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const About = () => {

  const width = window.innerWidth;
  

  return (
    <motion.div className="about">
      <div className="wrapper">
        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="textContainer"
        >
          <h1>About Me</h1>
        </motion.div>

        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="titleContainer"
        >
          <div className="title">
            <h1>
              <b> Education </b>
            </h1>

            <motion.div whileHover={{ scale: 1.05 }} className="titleItems">
              <img src="./Concordia.png" alt="Concordia University" />
              <div className="educationItem">
                <h2>
                  <b>M.Sc.</b> Building Engineering
                </h2>
                <h3>Concordia University</h3>
                <p>GPA 4.1/4.3</p>
              </div>
              <div className="date">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="titleItems iustItem"
            >
              <img id="IUST" src="./IUST.png" alt="IUST Icon" />
              <div className="educationItem">
                <h2>
                  <b>B.Sc.</b> Mechanical Engineering
                </h2>
                <h3>Iran University of Science and Technology</h3>
                <p>GPA 17.5/20</p>
              </div>
              <div className="date">(Sep 2016 - Aug 2020)</div>
            </motion.div>
          </div>

          <div className="title">
            <h1>
              <b>Experience</b>
            </h1>

            <motion.div whileHover={{ scale: 1.05 }} className="titleItems">
              <img src="./Concordia.png" alt="Concordia University" />
              <div className="educationItem">
                <h2>
                  <b>Machine Learning Researcher</b>
                </h2>
                <h3>Concordia University</h3>
                <p>
                  Developed a novel Safe Deep Reinforcement Learning
                  (SDRL)approach for optimal dispatch of energy hubs to minimize
                  operational cost and satisfy operational constraints.
                </p>
              </div>
              <div className="date">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="titleItems">
              <img src="./iranbar.webp" alt="IranBar icon" />
              <div className="educationItem">
                <h2>
                  <b>Junior Data Scientist</b>
                </h2>
                <h3>IranBar</h3>
                <p>
                  Collaborated with cross-functional teams to train, optimize,
                  and deploy data-driven models for delivery price prediction.
                </p>
              </div>
              <div className="date">(Jun 2019 - May 2020)</div>
            </motion.div>
          </div>
        </motion.div>

        {width>1366 && <Skills variants={variants} width={width}/>}
      </div>
    </motion.div>
  );
};

export default About;
