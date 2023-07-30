import Image from 'next/image'
import React, { useEffect } from 'react'
import Explore from '../assets/explore.jpg'

function About() {
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-center my-[200px] md:gap-40" >
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:w-[500px] w-[90vw] flex md:flex-1 md:justify-end overflow-hidden"
      >
        <Image
          src={Explore}
          alt=""
          className="md:h-[600px] h-[400px] md:w-[500px] w-[90vw] transform transition-all duration-[1s] hover:scale-125 "
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex-1 flex flex-col md:justify-center  leading-relaxed md:text-start text-center"
      >
        <p className="md:text-[3rem] text-[1.5rem]">
          Learn More <br /> About Travel
        </p>
        <p className="pt-2 pb-4 md:text-base text-sm text-gray-400 leading-relaxed md:w-[450px] w-[90vw]">
          All the trips around the world are a great pleasure and happiness for
          anyone, enjoy the sights when you travel the world. Travel safely and
          without worries, get your trip and explore the paradises of the world
        </p>
        <button class="arrow-button w-fit md:m-0 m-auto">
          <span className="mr-4">Explore Travel</span>
          <span class="arrow"></span>
        </button>
      </div>
    </div>
  );
}

export default About