import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        console.log(navRef.current);
        navRef.current.classList.toggle("translate-y-0");
    };
    const [clicked,setClick] = useState('Home');
    const nav = ["Home", "About", "Popular", "Explore"]
    const link = ["#home", "#about", "#popular", "#explore"]
    return (
      <header
        id="nav"
        className="flex fixed top-0 z-50 items-center justify-between  w-screen h-[80px]  text-white md:px-[12rem] backdrop-blur-md"
      >
        <span className="text-[20px] font-bold md:pl-0 pl-4">Travel</span>
        <nav
          ref={navRef}
          className="fixed top-0 left-0 h-screen w-screen text-[20px] backdrop-blur-md md:backdrop-blur-0 flex items-center justify-center flex-col gap-6 transition duration-[1s] -translate-y-[100vh] md:translate-y-0 md:relative md:flex-row  md:justify-end"
        >
          {nav.map((title, i) => (
            <Link
              href={link[i]}
              className={`mx-[2rem] relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full ${
                title === clicked ? "border-b-2" : "before:h-[2px]"
              }  before:bg-white before:scale-x-0 before:origin-center before:transform before:duration-[0.3s] before:ease-in-out before:hover:scale-x-[1]`}
              key={i}
              onClick={() => setClick(title)}
            >
              {title}
            </Link>
          ))}
          <button
            className="absolute top-8 right-8  md:p-[5px] md:hidden"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="md:p-[5px] md:hidden pr-4" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
}

export default Navbar