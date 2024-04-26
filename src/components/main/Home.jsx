import { useRef, useEffect } from "react";
import videoBg from "../../assets/hero.mp4";
import "./Home.scss";
import { motion } from "framer-motion";
import { stackClasses } from "@mui/material";

const Home = () => {
  const videoRef = useRef(null);

  const textVariants = {
    initial: {
      x: -100, // Start from below the container
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
      delay: 6,
      duration: .1,
      },
    },

    mobile: {
      x: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      x: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.scrollY;
        videoRef.current.style.transform = `translateY(-${
          scrollPosition * 0.6
        }px)`; // Adjust the speed as needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("Services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="parallax-container">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-bg"
          src={videoBg}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="textwrapper">
        <motion.div
          className="TextContainer"
          variants={textVariants}
          initial="initial"
          animate={
            window.matchMedia("(min-width: 769px)").matches
              ? "animate"
              : "mobile"
          }
        >
          <motion.h2 variants={textVariants}>VESSEL</motion.h2>
          <br />
          <motion.h1 variants={textVariants}>Post Production Works</motion.h1>
          {/* {window.matchMedia("(min-width: 769px)").matches && (
            <motion.div variants={textVariants} className="buttons">
              <a href={`#Portfolio`}>See the Latest Work</a>
              <a href={`#Contact`}>Contact Me</a>
            </motion.div>
          )} */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            onClick={scrollToServices}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
