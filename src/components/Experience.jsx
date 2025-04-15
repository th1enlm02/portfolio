import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { activities } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Component ExperienceCard
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.issuer}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.issuer}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.image && (
        <div className='mt-5 flex justify-center'>
          <img
            src={experience.image}
            alt={`${experience.title} proof`}
            className='max-w-full w-[300px] h-auto rounded-lg shadow-md object-cover'
          />
        </div>
      )}
    </VerticalTimelineElement>
  );
};

// Component Experience
const Experience = () => {
  const timelineRef = useRef(null);

  // Force re-render VerticalTimeline khi vào viewport
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top } = timelineRef.current.getBoundingClientRect();
        const isInViewport = top >= 0 && top <= window.innerHeight;
        if (isInViewport) {
          // Trigger re-render hoặc cập nhật layout của VerticalTimeline
          window.dispatchEvent(new Event('resize'));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Trigger lần đầu khi component được mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show" // Sử dụng whileInView để kích hoạt animation khi vào viewport
        viewport={{ once: true, amount: 0.25 }} // Chỉ kích hoạt một lần khi 25% phần tử vào viewport
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Activities.
        </h2>
      </motion.div>

      <motion.div
        className='mt-20 flex flex-col'
        ref={timelineRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <VerticalTimeline>
          {activities.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "activities");