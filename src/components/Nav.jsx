import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navlinks = [
  {
    link: "Acasa",
    to: "home",
  },
  {
    link: "Flota",
    to: "fleet",
  },

  {
    link: "Despre noi",
    to: "about",
  },
  {
    link: "Servicii",
    to: "offers",
  },
  {
    link: "Contacteaza-ne",
    to: "contact",
  },
];

const headerVariants = {
  hidden: {
    padding: "40px 0 40px 0",
    background: "none",
  },
  show: {
    position: "fixed",
    top: "0",
    padding: "14px 0 14px 0",
    background: "rgba(0, 0, 0, 0.92)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    transition: {
      type: "spring",
    },
  },
};

export default function Nav() {
  const [active, setActive] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsTop(true) : setIsTop(false);
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsTop(true) : setIsTop(false);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      variants={headerVariants}
      initial="hidden"
      animate={isTop ? "show" : ""}
      className="h-[80px] w-full z-[999] fixed flex items-center "
      aria-label="In-page jump links">
      <div className="container mx-auto">
        <div className="pt-4 flex items-center justify-between">
          <div>
            <a href="#home" className="text-2xl text-primary font-bold hover:text-accent transition-all duration-150">
              Ride Sharing
            </a>
          </div>
          <div className="hidden md:flex">
            {navlinks.map((link, index) => (
              <Link
                to={link.to}
                offset={-80}
                key={index}
                className={`text-md  ml-6 tracking-wide hover:text-accent hover:border-b-[1px] hover:border-accent transition-all duration-150 cursor-pointer ${
                  active === index ? "text-accent border-b-[1px] border-accent" : "text-primary"
                }`}
                onClick={() => setActive(index)}>
                {link.link}
              </Link>
            ))}
          </div>
          <div onClick={() => setNav(!nav)} className="md:hidden lg:hidden block">
            {nav ? (
              <AiOutlineClose
                size={30}
                className="text-primary hover:text-accent transition duration-150 cursor-pointer"
              />
            ) : (
              <RxHamburgerMenu
                size={30}
                className="text-primary hover:text-accent transition duration-150 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {nav ? (
        <div className="fixed md:hidden top-0 right-0 w-[50%] transition-all duration-200 h-screen bg-accent flex flex-col gap-y-6 z-50 pt-12">
          <AiOutlineClose
            size={30}
            className="text-secondary absolute top-4 right-8 hover:text-primary transition duration-150 cursor-pointer"
            onClick={() => setNav(!nav)}
          />
          {navlinks.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              offset={-100}
              className={`text-lg  ml-6 tracking-wide hover:text-primary hover:border-l-[2px] px-4  hover:border-primary transition duration-150 cursor-pointer ${
                active === index ? "text-primary border-l-[2px] border-primary" : "text-secondary"
              }`}
              onClick={() => {
                setActive(index);
                setNav(false);
              }}>
              {link.link}
            </Link>
          ))}
        </div>
      ) : (
        <div className="fixed top-0 right-0 w-0 h-screen overflow-hidden transition-all duration-200 bg-accent flex flex-col gap-y-6 z-50 pt-12">
          <AiOutlineClose size={30} className="text-secondary absolute top-4 right-8" onClick={() => setNav(false)} />
          {navlinks.map((link, index) => (
            <a
              href={link.to}
              key={index}
              className={`text-lg  ml-6 tracking-wide hover:text-primary hover:border-l-[2px] px-4 hover:border-primary transition-all duration-150 cursor-pointer ${
                active === index ? "text-primary border-l-[2px] border-primary" : "text-secondary"
              }`}
              onClick={() => setActive(index)}>
              {link.link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
