import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Cards({title,image}) {
    console.log(image);
  return (
    <div className='md:w-[260px] w-[90vw] aspect-[4/3] relative overflow-hidden'>
      <Image src={image} alt="" fill className='transform transition-all duration-[1s] hover:scale-125 inner-box-shadow' />
        <span className='absolute bottom-0 p-4 text-lg font-bold'>{title}</span>
    </div>
  )
}

export default Cards