import "./services.scss";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

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
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div className="services">
        
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="textContainer"
      >
        <p>Be the change you wish to see in the world.</p>
        <hr />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="titleContainer"
      >
        <div className="title">
          <h1>
            <FaUserGraduate className="Icon" /> <b> Education </b>
          </h1>

          <motion.div whileHover={{scale:1.1}} className="titleItems">
            <div>
              <img src="./Concordia.png" alt="" />
            </div>
            <div>
              <h2>
                <b>M.Sc. </b> in Building Engineering
              </h2>
            </div>
            <div className="date">(Jan 2021 - Apr 2023)</div>
          </motion.div>

          <motion.div whileHover={{scale:1.1}} className="titleItems">
            <img id="IUST" src="./IUST.png" alt="" />
            <h2>
              {" "}
              <b>B.Sc. </b> in Mechanical Engineering
            </h2>
            <div className="date">(Sep 2016 - Aug 2020)</div>
          </motion.div>
        </div>

        <div className="title">
          <h1>
            <MdOutlineWork className="Icon" /> <b>Experience</b>.
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="listContainer"
      >
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Programming Languages</h2>
          <p>Loremm ipsum ......</p>
          <button>Go</button>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>Loremm ipsum ......</p>
          <button>Go</button>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>Loremm ipsum ......</p>
          <button>Go</button>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>Loremm ipsum ......</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
