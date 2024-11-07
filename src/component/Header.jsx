import React, { useState } from "react";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };
  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg bg-opacity-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <div className="text-2xl uppercase font-nova text-lightBrown">
          SKIN<span className="text-darkBrown">CARE</span>
        </div>

        <div className="flex items-center gap-5 left-0 top-0">
          <i
            className={`cursor-pointer ml-4 text-xl ${
              darkTheme ? "text-yellow-400" : "text-darkBrown"
            }`}
            onClick={toggleTheme}
          >
            {darkTheme ? (
              <i className="ri-sun-line"></i>
            ) : (
              <i className="ri-moon-line"></i>
            )}
          </i>

          <div className="md:hidden" onClick={toggleMenu}>
            <i className="ri-menu-2-line cursor-pointer text-xl"></i>
          </div>
        </div>

        {menuVisible && (
          <div className="fixed top-0 left-0 z-40 w-full py-14 bg-lightBrown border-b border-darkBrown md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto">
            <div className="relative w-full h-full">
              <ul className="flex flex-col w-full h-full text-lg text-center gap-5 md:flex-row">
                <li>
                  <a
                    href="#home"
                    onClick={closeMenu}
                    className="nav_link text-darkBrown hover:border-b-2 hover:border-darkBrown ease-in duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="nav_link text-darkBrown hover:border-b-2 hover:border-darkBrown ease-in duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={closeMenu}
                    className="nav_link text-darkBrown hover:border-b-2 hover:border-darkBrown ease-in duration-200"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    onClick={closeMenu}
                    className="nav_link text-darkBrown hover:border-b-2 hover:border-darkBrown ease-in duration-200"
                  >
                    Review
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="nav_link text-darkBrown hover:border-b-2 hover:border-darkBrown ease-in duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div
                className="absolute  top-[0rem] right-4 text-3xl cursor-pointer z-50 md:hidden"
                onClick={toggleMenu}
              >
                <i className="ri-close-line"></i>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
