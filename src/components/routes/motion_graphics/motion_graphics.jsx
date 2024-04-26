import Cursor from "../../cursor/Cursor";
import Navbar from "../../navbar/Navbar";
import "./motion_graphics.scss";
import VideoScroll from "./VideoScroll/VideoScroll";
import video1 from '../../../assets/motionGraphics/3dangels.mp4'
import video2 from '../../../assets/motionGraphics/beat.mp4'
import video3 from '../../../assets/motionGraphics/3d shape sheet.mp4'
import video4 from '../../../assets/motionGraphics/boxes.mp4'
import video5 from '../../../assets/motionGraphics/Auraball1.mp4'
import video6 from '../../../assets/motionGraphics/confetti.mp4'
import video7 from '../../../assets/motionGraphics/crackers.mp4'
import video8 from '../../../assets/motionGraphics/flicker text.mp4'
import video9 from '../../../assets/motionGraphics/Gold text.mp4'
import video10 from '../../../assets/motionGraphics/infinity.mp4'
import video11 from '../../../assets/motionGraphics/lines.mp4'
import video12 from '../../../assets/motionGraphics/movinglines.mp4'
import video13 from '../../../assets/motionGraphics/retro.mp4'
import video14 from '../../../assets/motionGraphics/sun.mp4'
import video15 from '../../../assets/motionGraphics/textani1.mp4'
import video16 from '../../../assets/motionGraphics/tunnel.mp4'
import video17 from '../../../assets/motionGraphics/waves.mp4'
import video18 from '../../../assets/motionGraphics/wipetext.mp4'



const MotionGraphics = () => {
  const videos = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
    { src: video4 },
    { src: video5 },
    { src: video6 },
    { src: video7 },
    { src: video8 },
    { src: video9 },
    { src: video10 },
    { src: video11 },
    { src: video12 },
    { src: video13 },
    { src: video14 },
    { src: video15 },
    { src: video16 },
    { src: video17 },
    { src: video18 },

    // add more videos
  ];

  return (
    <>
      <Cursor />
      <section className="motionGraphics">
        <Navbar />
        <div className="motionText">
          <h1>Motion Graphics</h1>
        </div>
        <div className="videoContainer">
          <VideoScroll videos={videos} />
        </div>
      </section>
    </>
  );
};

export default MotionGraphics;
