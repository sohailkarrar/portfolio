import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const videoEditingSkills = {
  software: [
    { name: "DaVinci Resolve", icon: "/assets/log/davinci.png", link: "#" },
    { name: "Adobe Premiere Pro", icon: "/assets/log/premier.png", link: "#" },
  ],
  tools: [
    { name: "DaVinci Resolve", icon: "/assets/log/davinci.png", link: "#" },
  ],
  techniques: [
    { name: "Color Grading", icon: "/assets/log/color.png", link: "#" },
    { name: "VFX", icon: "/assets/log/vfx.png", link: "#" },
    { name: "Cinematic Editing", icon: "/assets/log/cenematic.png", link: "#" },
    { name: "Slow Motion Editing", icon: "/assets/log/solo.png", link: "#" },
    { name: "Seamless Transitions", icon: "/assets/log/trans.png", link: "#" },
    { name: "Sound Design", icon: "/assets/log/sound.png", link: "#" },
    { name: "Storytelling Editing", icon: "/assets/log/story.png", link: "#" },
    { name: "Montage Editing", icon: "/assets/log/montage.png", link: "#" },
    { name: "Multicam Editing", icon: "/assets/log/multi.png", link: "#" },
    { name: "Motion Blur Effects", icon: "/assets/log/mot.png", link: "#" },
    { name: "Explainer Video Editing", icon: "/assets/log/ex.png", link: "#" },
  ],
  motionGraphics: [
    { name: "3D Animation", icon: "/assets/log/3d.png", link: "#" },
    { name: "Logo Animation", icon: "/assets/log/ani.png", link: "#" },
    { name: "Kinetic Typography", icon: "/assets/log/ty.png", link: "#" },
    { name: "Lower Thirds Design", icon: "/assets/log/lo.png", link: "#" },
    { name: "Explainer Video Animation", icon: "/assets/log/exp.png", link: "#" },
  ],
};

const skillCategories = [
  videoEditingSkills.software,
  videoEditingSkills.tools,
  videoEditingSkills.techniques,
  videoEditingSkills.motionGraphics,
];

const skillVariants = [
  "Software",
  "Tools",
  "Techniques",
  "Motion Graphics",
];

function Tech() {
  const skillsList = skillCategories.map((category, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden">{skillVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {category.map((skill) => (
          <Link
            href={skill.link}
            key={skill.name}
            target="_blank"
            className="flex flex-row"
          >
            <div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />

              <div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                {skill.name}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  ));

  const skillNames = skillVariants.map((skill, index) => (
    <h3 className="h-[50px] md:flex items-center hidden" key={index}>
      {skill}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have mastered so far</p>
        <h2 className={"sectionHeadText"}>Video Editing Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {skillNames}
        </motion.div>
        <div className="w-[2px] h-[400px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {skillsList}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
