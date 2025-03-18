import React from "react";
import Tilt from "react-parallax-tilt"; 
import { CldVideoPlayer } from "next-cloudinary";
import { reels } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"; 
import { videos } from "../constants";
// import 'next-cloudinary/dist/cld-video-player.css';

const ReelsCard = function ({ index, url }) {
  return (
    <Tilt
      tiltMaxAngleX="1"
      tiltMaxAngleY="1"
      className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-2 rounded-2xl sm:w-[330px] w-full h-full min-h-[500px] shadow-sm shadow-primary"
    >
      <div className="relative w-full h-full">
        {/* Container with aspect ratio and overflow control */}
        <div
          className="w-full relative overflow-hidden"
          style={{ 
            borderRadius: "1rem", // 16:9 aspect ratio (9 / 16 * 100)
          }}
        >
          {/* Google Drive embed iframe */}
          <CldVideoPlayer style={{height:'31rem'}} width="1080" height="1650" src="qcnzx7oiy13azxvkcvwm" />
        </div>
      </div>
    </Tilt>
  );
};

const VideosCard = function ({ index, url }) {
  return (
    <Tilt
      tiltMaxAngleX="1"
      tiltMaxAngleY="1"
      className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-2xl sm:w-[470px] w-full h-full min-h-[260px] shadow-sm shadow-primary"
    >
      <div className="relative w-full h-full">
        {/* Set the video to fill the container */}
        <div className="w-full h-full relative overflow-hidden" style={{ borderRadius: "1rem" }}>
          <video
            src={url} // Use a direct video URL
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </Tilt>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects">
      <div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>My work</p>
        <h2 className={"sectionHeadText text-center"}>Projects</h2>
      </div>

      <div className="w-full flex">

      </div>

      <h2 className={"subSectionHeadText"}>Reels</h2>
      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7 overflow-y-scroll max-h-[640px]">
        {reels.map((reel, index) => (
          <ReelsCard key={`reel-${index}`} index={index} {...reel} />
        ))}
      </div>
      <h2 className={"subSectionHeadText"}> Youtube Videos</h2>
      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7 overflow-y-scroll max-h-[600px]">
        {videos.map((video, index) => (
          <VideosCard key={`reel-${index}`} index={index} {...video} />
        ))
        }
      </div>
      {/* <iframe src="https://www.instagram.com/reel/DG8N623JxXW/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe> */}
      
    </section>
  );
}

export default Works;
