import "./SoundDesign.css";
import Cursor from "../../cursor/Cursor.jsx";
import Navbar from "../../navbar/Navbar.jsx";
import VideoScroll from "../motion_graphics/VideoScroll/VideoScroll.jsx";
import video1 from "../../../assets/SoundDesign/Forest.mp4";
import video2 from "../../../assets/SoundDesign/Jeep.mp4";
import video3 from "../../../assets/SoundDesign/waves.mp4";
import video4 from "../../../assets/SoundDesign/Train.mp4";

const soundDesign = () => {
  const videos = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
    { src: video4 },
  ];

  return (
    <>
      <Cursor />
      <section className="soundDesign">
        <Navbar />
        <div className="soundText">
          <h1>Sound Designs</h1>
        </div>
        <div className="videoContainer">
          <VideoScroll videos={videos} autoplay loop />
        </div>
      </section>
    </>
  );
};

export default soundDesign;
