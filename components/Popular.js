import Image from 'next/image'
import React from 'react'
import Torna from '../assets/torna.jpg'
import Shimla from '../assets/shimla.jpg'
import Andman from '../assets/andman.jpg'
import { TfiLocationPin } from 'react-icons/tfi'

function Popular() {
  return (
    <div className='flex flex-col gap-20 min-h-[80vh] md:justify-center md:pt-[50px]'>
          <div className='flex justify-center h-fit'>
              <p className='md:text-[3rem] text-[2rem] text-center'>Enjoy The Beauty<br /> Of The India</p>
          </div>
          <div className='flex gap-10 justify-center md:flex-row flex-col md:items-start items-center'>
              <div data-aos="fade-down" data-aos-duration="600">
                  <div className='w-[300px] h-[360px] relative image-container overflow-hidden'>
                      <Image src={Torna} alt="" fill className='transform transition-all duration-[1s] hover:scale-125' />
                      <div className="image-shadow"></div>
                  </div>
                <p className='pt-2 text-[1.5rem] '>Fort Torna</p>
                <p className='text-base text-gray-400 leading-relaxed flex items-center gap-2'><TfiLocationPin/>Maharashtra</p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1200">
                  <div className='w-[300px] h-[360px]  relative overflow-hidden image-container'>
                      <Image src={Shimla} alt="" fill className='transform transition-all duration-[1s] hover:scale-125 ' />
                      <div className="image-shadow"></div>
                  </div>
                  <p className='pt-2 text-[1.5rem]'>Shimla</p>
                  <p className='text-base text-gray-400 leading-relaxed flex items-center gap-2'><TfiLocationPin />Shimla</p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1800">
                  <div className='w-[300px] h-[360px]  relative overflow-hidden image-container'>
                      <Image src={Andman} alt="" fill className='transform transition-all duration-[1s] hover:scale-125 ' />
                      <div className="image-shadow"></div>
                  </div>
                  <p className='pt-2 text-[1.5rem]'>Secluded Blue Seas</p>
                  <p className='text-base text-gray-400 leading-relaxed flex items-center gap-2'><TfiLocationPin />Andaman & Nicobar</p>
              </div>
          </div>
    </div>
  )
}

export default Popular