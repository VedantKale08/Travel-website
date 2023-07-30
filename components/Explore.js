import Image from 'next/image'
import React from 'react'
import ExploreImage from '../assets/contact.jpg';

function Explore() {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center" id="explore">
        <div className="explore-bg w-screen h-[80vh] relative z-0">
          <div className="absolute inset-0 w-screen h-full shadow"></div>
          <div
            className="absolute bottom-0 p-10 md:ml-48 md:text-start text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="md:text-[2.5rem] text-[1.5rem]">
              Explore The
              <br />
              Best Paradises
            </p>
            <p className="pt-2 md:text-base text-sm text-gray-400 leading-relaxed md:w-[40%]">
              Exploring paradises such ad island and valleys when travelling the
              world is one of the greatest experiences when you travel, it
              offers you harmony and peace and you can enjoy it with great
              comfort.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center md:justify-center my-[200px] md:gap-40">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:w-[500px] w-[90vw] flex md:flex-1 md:justify-end overflow-hidden"
          >
            <Image
              src={ExploreImage}
              alt=""
              className="md:h-[600px] h-[400px] md:w-[500px] w-[90vw] transform transition-all duration-[1s] hover:scale-125 "
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex-1 flex flex-col justify-center leading-relaxed md:p-0 md:w-fit w-screen p-4 md:text-start text-center"
          >
            <p className="md:text-[3rem] text-[2rem]">
              Your Journey <br /> Starts Here
            </p>
            <p className="pt-2 md:text-base text-sm text-gray-400 leading-relaxed md:w-[350px]">
              Get up to date with the latest travel and information with us.
            </p>
            <input
              type="text"
              className="email-input md:w-[360px] w-[90vw]"
              placeholder="Enter Your Email"
            />
            <button class="arrow-button  md:w-[360px] w-[90vw] flex">
              <span className="mr-4 text-start flex-1">
                Subscribe our Newsletter
              </span>
              <span class="arrow"></span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Explore