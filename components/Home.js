import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import Goa from "../assets/goa.jpg";
import Himalaya from "../assets/Himalaya.jpg";
import GateOfIndia from "../assets/gateOfIndia.jpg";
import TajMahal from "../assets/taj.jpg";

function Home() {
  const images = [
    {
      image: Goa,
      title: "Goa",
    },
    {
      image: Himalaya,
      title: "Himalaya",
    },
    {
      image: GateOfIndia,
      title: "Gateway Of India",
    },
    {
      image: TajMahal,
      title: "Taj Mahal",
    },
  ];
  return (
    <div className="home-bg w-screen min-h-screen relative z-0" id="home">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:pt-[8rem] md:px-[12rem] pt-[150px] md:block flex flex-col items-center"
      >
        <p className="md:text-[1.5rem]">Welcome to Travel</p>
        <p className="md:text-[6rem] text-[2rem]">
          Explore <br className="md:block hidden" />
          The India
        </p>
        <p className="md:w-[450px] md:p-0 p-4 text-center md:text-start md:text-base text-sm">
          Live the trips exploring the india, discover paradises,
          islands, mountains and much more, get your trip now
        </p>
        <button class="arrow-button mb-20">
          <span className="mr-4">Let&apos;s Start Your Journey</span>
          <span class="arrow"></span>
        </button>
        <div className="flex gap-8 md:flex-row flex-col">
          {images.map((item, index) => (
            <Cards image={item.image} title={item.title} key={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
