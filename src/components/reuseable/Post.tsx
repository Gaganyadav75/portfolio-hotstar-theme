"use client"
import React from 'react'
import { publish } from './event'
import { MainData } from '@/data/data'
import Link from 'next/link'

function Post({id,slug,background,title,list1,description}:{id:number,slug:string,background:string,title:string,list1:{text:string,title:string}[],description:string}) {
 
  return (
    <div >
      <Link href={"/projects/"+slug}>
<div className="hover:bg-[#000000ac] rounded-md p-1  z-50 mt-5 w-full lg:max-w-full flex md:flex-row flex-col">
    <div className='md:w-1/4 w-1/2 aspect-video h-fit p-1'>
  <img className=" w-full h-full rounded-md text-center overflow-hidden" src={background} title="Woman holding a mug"/>
  </div>

  <div className="p-1 ml-3 flex flex-col justify-between leading-normal">
    <div className="">
      <div className=" font-bold text-xl mb-2">{title}</div>
      <div className=" font-bold text-sm mb-2">
        {list1.map((ele,ind)=><span key={"skills_"+ind}>{ele.text} </span>)}
      </div>
      <p className="text-gray-400 text-base">{description}</p>
    </div>
  </div>
</div>
</Link>
    </div>
  )
}

export default Post



export const EachPoster = ({link,details,active=false}:{link:string,details:any,active?:Boolean})=>{


  return <Link href={link}><div className={`group cursor-pointer relative overflow-hidden w-full aspect-video bg-amber-400 rounded-xl`}>

      <img className='w-full h-full' src={active?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8MM9tKx0cDVDVDMPY0kn4xKDISrny7v7Ww&s":details.background} alt={details.text} />

      <>
          {/* <div className={`absolute top-0 w-full h-full transition-colors duration-700 bg-transparent ease-in-out group-hover:bg-[rgba(118,118,121,0.45)]`}></div>      */}
          <div className='text-white absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-90 transition-all drop-shadow-md duration-700 from-[#000000a5] to-[#676767a5] bg-gradient-to-t z-5 flex flex-col justify-end p-3'>  
            {active?
              <span className=' group-hover:opacity-100 flex transition-opacity duration-700 ease-in-out opacity-0 absolute bg-gray-50 top-1/2 left-1/2 -translate-1/2 z-20 rounded-full w-10 justify-center items-center aspect-square text-black '>+</span>
              :
              <div className='flex flex-col pr-5 md:text-lg text-xs'>
               <h2 className='font-bold'>{details.title}</h2>
               <p className='line-clamp-2 text-ellipsis overflow-hidden'>{details.description}</p>
              </div>
            } 

          </div>
      </>
      
  </div>
  </Link> 
}