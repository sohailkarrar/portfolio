import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { reels } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";
import { videos } from "../constants";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full object-cover rounded-2xl relative">
            <Image
              src={image}
              alt="project_image"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(deployed_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <GithubLogo className="w-2/3 h-2/3 z-10" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const ReelsCard = function ({ index, url }) {

  return (

    <Tilt
      tiltMaxAngleX="1"
      tiltMaxAngleY="1"
      className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-2 rounded-2xl sm:w-[330px] w-full h-full min-h-[500px] shadow-sm shadow-primary"
    >
      <div className="relative w-full h-full">
        {/* Set the video to fill the container */}
        <div className="w-full h-full relative overflow-hidden" style={{ borderRadius: "1rem" }}>
          <video
            src={url} // Ensure `image` is a valid video URL
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Tilt>
  );
}

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
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>My work</p>
        <h2 className={"sectionHeadText text-center"}>Projects</h2>
      </motion.div>

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
