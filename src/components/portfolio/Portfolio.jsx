import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
  },

//   {
//     id: 2,
//     title: "Next.js Commerce",
//     img: "https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
//   },

//   {
//     id: 3,
//     title: "Vannilla JS App",
//     img: "https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
//   },

//   {
//     id: 4,
//     title: "Music App",
//     img: "https://images.pexels.com/photos/18300234/pexels-photo-18300234/free-photo-of-corner-of-building-with-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
//   },
];

const Single = ({ item }) => {

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>

          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Projects" className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
