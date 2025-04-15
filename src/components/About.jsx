import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import profile from "../assets/profile.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaFileDownload } from "react-icons/fa";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const SocialButton = ({ index, icon: Icon, link, label }) => (
  <motion.a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    whileHover={{ scale: 1.1, backgroundColor: "#34d399", transition: { duration: 0.3 } }} // Hiệu ứng hover: phóng to và đổi màu
    className='flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white font-medium text-[14px] shadow-md'
  >
    <Icon className='w-5 h-5' />
    <span>{label}</span>
  </motion.a>
);

const About = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/th1enlm02",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/th1enlm02",
      label: "GitHub",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/th1enlm02",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/th1enlm02",
      label: "Instagram",
    },
    {
      icon: FaFileDownload,
      link: "/resume/CV_Lưu-Minh-Thiện.pdf",
      label: "Download CV",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col gap-10'>
        {/* Container cho phần mô tả và ảnh */}
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Container cho phần mô tả và nút (mô tả trên, nút dưới) */}
          <div className='flex flex-col gap-4 flex-1'>
            {/* Phần mô tả */}
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              I'm a senior student majoring in Computer Networks and Data Communications
              at the University of Information Technology VNU-HCM. With a keen interest in
              DevOps/System Engineering, I'm passionate about mastering the tools and
              technologies that power modern infrastructure and applications.
            </motion.p>

            {/* Container cho các nút (dưới phần mô tả, căn trái trên màn hình lớn) */}
            <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={social.label}
                  index={index}
                  icon={social.icon}
                  link={social.link}
                  label={social.label}
                />
              ))}
            </div>
          </div>

          {/* Khung ảnh bên phải */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1)}
            className='lg:w-[300px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              className='bg-tertiary rounded-[20px] p-5 flex justify-center items-center'
            >
              <img
                src={profile}
                alt='profile'
                className='w-full h-auto rounded-[20px] object-cover'
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.link}
            target='_blank'
            rel='noopener noreferrer'
            className='xs:w-[250px] w-full'
          >
            <ServiceCard index={index} title={service.title} icon={service.icon} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
