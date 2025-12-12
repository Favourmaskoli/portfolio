import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translateX(0)";
    sideMenuRef.current.setAttribute("aria-hidden", "false");
  };
  const closeMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translateX(100%)";
    sideMenuRef.current.setAttribute("aria-hidden", "true");
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%] ${
          isScroll
            ? "bg-opacity-50 bg-white shadow-sm backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          {/* <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="mr-14 w-28 cursor-pointer"
          /> */}
          <span className="text-4xl md:text-4xl">
            <svg
              className="h-15 w-15 text-blue-400 md:h-15 md:w-15"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L1 12h3l3-3h4l-3 5h4l1-3h4l-3 5h4l3-3h3L12 1zm0 2.293L19 10.5h-2l-3-3h-4l3 5h-4l-1 3h-4l3-5h-4L5 10.5H3L12 3.293z" />
              <path
                fillRule="evenodd"
                d="M10 17a2 2 0 100 4 2 2 0 000-4zM16 17a2 2 0 100 4 2 2 0 000-4zM13 17a2 2 0 100 4 2 2 0 000-4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>

        <ul
          className={`hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-8 ${
            isScroll
              ? "text-gray-800"
              : "bg-white backdrop-blur-lg shadow-sm dark:border dark:border-white/50 bg-opacity-50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Us
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="toggle theme"
              className={`w-6 ${isScroll ? "filter invert" : ""}`}
            />
          </button>

          <a
            href="#contact"
            className={`font-Ovo ml-4 hidden items-center gap-3 rounded-full border ${isScroll ? "border-gray-800" : "border-white"} px-10 py-2.5 lg:flex ${isScroll ? "text-gray-800" : "text-white"}`}
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              className={`w-3 ${isScroll ? "filter invert" : ""}`}
            />
          </a>

          <button
            className="ml-3 block md:hidden"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <ul
        ref={sideMenuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition-transform duration-500 md:hidden"
        aria-hidden="true"
      >
        <div className="absolute top-6 right-6" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>

        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#about">
            About Us
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#work">
            My Work
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#contact">
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
