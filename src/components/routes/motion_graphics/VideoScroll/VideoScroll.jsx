import { useState } from "react";
import "./VideoScroll.scss";
import { MoveLeft , MoveRight } from 'lucide-react'


const VideoScroll = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };
  return (
    <div className="container">
      <button className="arrow" onClick={previousVideo}><MoveLeft className="MoveLeft"/></button>
      <video src={videos[currentVideoIndex].src} controls autoPlay loop/>
      <button className="arrow" onClick={nextVideo}><MoveRight className="MoveRight"/></button>
    </div>
  );
};

export default VideoScroll;
