import Cursor from "../../cursor/Cursor";
import Navbar from "../../navbar/Navbar";
import "./PgProjects.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";

const PgProjects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "NewsLetter",
      image: "/March14.jpg",
      desc: "NewsLetter for March 14",
    },
    {
      id: 2,
      title: "NewsLetter",
      image: "/March15.jpg",
      desc: "NewsLetter for March 15",
    },
    {
      id: 3,
      title: "NewsLetter",
      image: "/March16.jpg",
      desc: "NewsLetter for March 16",
    },
    {
      id: 4,
      title: "Advertisement",
      image: "/ad1.jpg",
      desc: "Advertisement for a Perfume",
    },
    {
      id: 5,
      title: "Advertisement",
      image: "/ad2.jpg",
      desc: "Advertisement for a Watch",
    },
    {
      id: 6,
      title: "Advertisement",
      image: "/ad3.jpg",
      desc: "Advertisement for Company",
    },
    {
      id: 7,
      title: "Advertisement",
      image: "/b1.jpg",
      desc: "Broacher for College",
    },
    {
      id: 8,
      title: "Advertisement",
      image: "/b2.jpg",
      desc: "Broacher for College",
    },
    {
      id: 9,
      title: "Advertisement",
      image: "/b3.jpg",
      desc: "Broacher for College",
    },
  ];

  return (
    <>
      <div className="Cursor">
        <Cursor />
      </div>
      <section className="PgProjects">
        <div className="nav">
          <Navbar />
        </div>
        <div className="PgContainer">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="grid-item"
            >
              <motion.h6>{item.desc}</motion.h6>
              <img
                className="newsletterImg"
                src={item.image}
                alt={item.title}
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="grid-item-expanded"
                onClick={() => setSelectedId(null)}
              >
                <div className="expanded-content">
                  <motion.button onClick={() => setSelectedId(null)}>
                    <CircleX  size={40}/>
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

export default PgProjects;
