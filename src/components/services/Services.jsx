import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import {
  Film,
  Camera,
  Blend,
  RadioTower,
  Printer,
  SquarePen,
} from "lucide-react";

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
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="Services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <h2>Services Provided By </h2>
        <h1>
          <motion.b whileHover={{ color: "orange" }}>VESSEL</motion.b>
        </h1>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <Film className="symbolStyle" />
          </div>
          <h3 className="titles">Video & Photo Editing</h3>
          <p className="discription">
            <motion>
              Edit videos for all sorts of purposes: events, news productions,
              personal hobby and many more.
            </motion>
          </p>
        </motion.div>

        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <Blend className="symbolStyle" />
          </div>
          <h3 className="titles">Motion Design & Graphics</h3>
          <p className="discription">
            <motion>
              Create stunning motion elements to enhance the overall visual
              experience. Designing and providing dynamics to graphics in videos
              and photos.
            </motion>
          </p>
        </motion.div>

        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <Camera className="symbolStyle" />
          </div>
          <h3 className="titles">Videography & Photography</h3>
          <p className="discription">
            <motion>
              Capture moments through a visionary perspective to make the
              overall production, cinematic.
            </motion>
          </p>
        </motion.div>

        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <SquarePen className="symbolStyle" />
          </div>
          <h3 className="titles">Copy Writing</h3>
          <p className="discription">
            <motion>
              Drafting compelling narratives or objective prose for newsletters,
              press releases, scripts for radio and television programs; script
              for short-films and many more.
            </motion>
          </p>
        </motion.div>

        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <Printer className="symbolStyle" />
          </div>
          <h3 className="titles">Print Materials</h3>
          <p className="discription">
            <motion>Create posters, flyers, brochures, pamphlets</motion>
          </p>
        </motion.div>

        <motion.div whileHover={{ background: "lightgray", color: "black" }}>
          <div className="symbols">
            <RadioTower className="symbolStyle" />
          </div>
          <h3 className="titles">Radio & Television</h3>
          <p className="discription">
            <motion>
              Produce news bulletins, interviews, talk-shows, commercials for
              radio and television.
            </motion>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
