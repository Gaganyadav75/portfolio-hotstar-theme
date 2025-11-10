"use client"
import React, { useEffect } from "react";
import MainInfo from "./MainInfo";
import { FadeImage } from "./reuseable/FadeImage";
import { MyInfo } from "./types";


export default function MainSection({
  children,
  data
}: Readonly<{
  children: React.ReactNode;
  data:MyInfo
}>) {

  return (
 
    <div
      // style={{backgroundImage:`url(${myInfo[0].background})`}}
      className="relative h-svh w-full flex flex-col bg-no-repeat bg-cover bg-center text-white overflow-hidden "
    >
        <FadeImage src={data.background}/>
      <div className="absolute inset-0 z-[5] h-full lg:w-lg w-20 from-[#0f1014] bg-linear-to-r to-transparent "></div>

    

      <div className=" overflow-x-hidden overflow-y-scroll no-scrollbar h-svh w-full bg-cover bg-center text-white ">
 
        <div className="relative flex flex-col justify-center  items-start h-full w-full">
          {/* details */}
          <MainInfo data={data}/>
        </div>
       
        {children}
      </div>
    </div>
  );
}


