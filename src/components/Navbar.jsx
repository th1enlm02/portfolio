import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkedinUrl = "https://www.linkedin.com/in/th1enlm02";

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full flex items-center max-w-7xl mx-auto transition-all duration-500 ${
          scrolled ? "justify-center" : "justify-between"
        }`}
      >
        {!scrolled && (
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Levi &nbsp;
              <span className='sm:block hidden'> |&nbsp; DevOps/System Engineer</span>
            </p>
          </Link>
        )}

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={linkedinUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-tertiary text-white text-[18px] font-medium px-5 py-2 rounded-full hover:bg-[#34d399] transition-colors duration-300'
            >
              Hire Me!
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href={linkedinUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-poppins font-medium text-[16px] text-white bg-tertiary px-4 py-2 rounded-full hover:bg-[#34d399] transition-colors duration-300'
                  onClick={() => setToggle(!toggle)}
                >
                  Hire Me!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;