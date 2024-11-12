import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    width: scrolled ? "75%" : "100%",
    transition: "width 0.3s ease-in-out",
    transform: scrolled ? "translateX(-50%)" : "none",
    left: scrolled ? "50%" : "0",
    borderRadius: scrolled ? "1.5rem" : "0",
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 backdrop-blur-md dark:backdrop-blur-xl shadow-lg bg-opacity-50"
      style={headerStyle}
    >
      <nav className="container relative h-14 flex justify-between items-center">
        <div className="text-2xl uppercase font-nova text-darkerBrown">
          SKIN<span className="text-darkBrown">CARE</span>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center gap-5 left-0 top-0 ">
          <div className="md:hidden" onClick={toggleMenu}>
            <i className="ri-menu-2-line cursor-pointer text-xl dark:text-white"></i>
          </div>
        </div>
        <DarkMode />

        <div
          className={`${
            menuVisible ? "block" : "hidden"
          } fixed top-0 left-0 z-40 w-full py-14 bg-lightBrown border-b border-darkBrown md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto md:bg-transparent`}
        >
          <div className="relative w-full h-full">
            <ul className="flex flex-col w-full h-full text-lg text-center gap-5 md:flex-row">
              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="nav_link text-darkBrown dark:text-white hover:border-b-2 hover:border-darkBrown dark:hover:border-darkerGold ease-in duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="nav_link text-darkBrown dark:text-white hover:border-b-2 hover:border-darkBrown dark:hover:border-darkerGold ease-in duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={closeMenu}
                  className="nav_link text-darkBrown dark:text-white hover:border-b-2 hover:border-darkBrown dark:hover:border-darkerGold ease-in duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  onClick={closeMenu}
                  className="nav_link text-darkBrown dark:text-white hover:border-b-2 hover:border-darkBrown dark:hover:border-darkerGold ease-in duration-200"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="nav_link text-darkBrown dark:text-white hover:border-b-2 hover:border-darkBrown dark:hover:border-darkerGold ease-in duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div
              className="absolute top-[0rem] right-4 text-3xl cursor-pointer z-50 md:hidden"
              onClick={toggleMenu}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
