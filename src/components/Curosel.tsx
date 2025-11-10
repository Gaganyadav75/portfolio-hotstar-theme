"use client"
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



export const CarouselElement = ({ items }:{items:ReactNode[]}) => {
    return(
<Carousel 
containerClass=" w-[100%]"
itemClass="pr-4 w-full h-full" responsive={responsive}>
{items.map((item, index) => (
            <div
              key={index}
              className="block flex-shrink-0"
            >
              {item}
            </div>
          ))}
</Carousel>
    )
};




