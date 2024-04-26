import { useRef } from "react";
import {  Link } from "react-router-dom";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Motion Graphics",
    img: "/motion.jpg",
    desc: "Designing graphics equipped with motion to narrate a visually appealing story using Adobe After Effects. ",
    path: "/motionGraphics",
  },
  {
    id: 2,
    title: "Post-Graduation Projects",
    img: "/pg.jpg",
    desc: "Project files of print, radio and television media during my post-graduation period. Projects related to the production of radio and television broadcast, as well as newspaper publication, were produced.",
    path: "/PgProjects",

  },
  {
    id: 3,
    title: "Sound Design",
    img: "/sound.jpg",
    desc: "Creatively using sound effects, music, ambient sounds and other audio elements to enhance and create dimension, depth, atmosphere and an overall cinematic experience. If you’re interested in post-graduation projects in sound design, here are some project ideas",
    path: "/SoundDesign",

  },
  {
    id: 4,
    title: "Posters",
    img: "/poster.jpg",
    desc: "Using advance photo manipulation softwares to create graphic poster for various scenarios. They are typically designed to be both eye-catching and informative1.",
    path: "/Posters",

  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={item.path}><button> See More </button></Link>
          </motion.div>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;