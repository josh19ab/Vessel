import "./Posters.scss";
import Cursor from "../../cursor/Cursor.jsx";
import Navbar from "../../navbar/Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CircleX } from "lucide-react";

const Posters = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "Poster1",
      image: "/p1.jpg",
    },
    {
      id: 2,
      title: "Poster2",
      image: "/p2.png",
    },
    {
      id: 3,
      title: "Poster3",
      image: "/p3.png",
    },
    {
      id: 4,
      title: "Poster4",
      image: "/p4.jpg",
    },
    {
      id: 5,
      title: "Poster5",
      image: "/p5.jpg",
    },
    {
      id: 6,
      title: "Poster6",
      image: "/p6.jpg",
    },
  ];

  return (
    <>
      <Cursor />
      <section className="Posters">
        <Navbar />
        <div className="PosterContainer">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="poster-item"
            >
              <img
                className="posterImg"
                src={item.image}
                alt={item.title}
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="poster-item-expanded"
                onClick={() => setSelectedId(null)}
              >
                <div className="expanded-poster">
                  <motion.button onClick={() => setSelectedId(null)}>
                    <CircleX size={40} />
                  </motion.button>
                  <img
                    src={items.find((item) => item.id === selectedId).image}
                    alt={items.find((item) => item.id === selectedId).title}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Posters;
