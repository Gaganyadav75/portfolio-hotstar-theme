"use client"
import ClientPage from "@/components/Client";
import { useData } from "@/components/MainAppContext";
import MainSection from "@/components/MainSection";
import { EachPoster } from "@/components/reuseable/Post";
import ScrollableSection from "@/components/reuseable/ScrollableSection";
import { SlideInOnScroll } from "@/components/reuseable/ScrollOnDisplay";
import { MainData } from "@/data/data";
import { createContext, useContext, useEffect } from "react";

export const profilecontext = createContext(0);
const last = 6;

export default function Home() {

  const {getProfile,getAllProjects,getAllSkills} = useData()

  const projects = getAllProjects();
  const skills = getAllSkills()

  useEffect(()=>{
    document.fullscreenElement?.requestFullscreen();
  },[])


  const nodelist = projects.map((ele,ind)=>{
    return ind>=0 && ind<=last &&<EachPoster key={ind} link={`/projects/${ind!=last?ele.slug:""}`} details={{background:ele.background,title:ele.title,description:ele.description[0]}} active={ind==last}/>}).filter(ele=>ele)

  const nodelist2 = skills.map((ele,ind)=>{
    return ind>=0 && ind<=last &&<EachPoster  link={`/skills/${ind!=last?ele.slug:""}`} details={{background:ele.background,title:ele.title,description:ele.description[0]}} active={ind==last}/>}).filter(ele=>ele)
  
  return (
    <MainSection data={getProfile()}>
      <>
        <div className='absolute top-0 left-0 w-0'></div>
        {/* Continue Watching Section */}
        <div className="relative w-full z-10  bg-[#0f1014e2] to-transparent bg-linear-to-t ">
          <div className="absolute w-full h-50 -top-50  left-0  from-[#0f1014e2] to-transparent bg-linear-to-t "></div>
          <div className="relative w-full -top-35 flex flex-col gap-5">
            <ScrollableSection items={nodelist} heading="Projects" />
            <ScrollableSection items={nodelist2} heading="Skills" />
          </div>
        </div>
      </>
    </MainSection>
  );
}
