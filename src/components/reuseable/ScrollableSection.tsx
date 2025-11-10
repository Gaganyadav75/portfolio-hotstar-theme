import React, { ReactNode } from 'react'
import { CarouselElement } from '../Curosel'
import { SlideInOnScroll } from './ScrollOnDisplay'

interface types{
    heading:string,
    items:ReactNode[]
}


function ScrollableSection({heading,items=[]}:types) {
  return (
    <SlideInOnScroll className="w-full">
    {/* <div className="absolute bottm-0 left-0 w-full h-10 from-[#0f1014] bg-linear-to-t to-transparent bg-opacity-50"></div> */}

      <h2 className="text-xl font-semibold mb-2">{heading}</h2>

      <CarouselElement items={items}/>

  </SlideInOnScroll>
  )
}

export default ScrollableSection



