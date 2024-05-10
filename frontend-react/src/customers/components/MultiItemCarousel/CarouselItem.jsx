import React from 'react'
import { topMeels } from '../../../Data/topMeels'

const CarouselItem = ({image,title}) => {
  return (
    
        <div className='flex flex-col justify-center items-center'>
            <img className='w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center' src={image} alt={title} />
            <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
        </div>
         
    
  )
}

export default CarouselItem