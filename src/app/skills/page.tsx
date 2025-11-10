"use client"
import { useData } from '@/components/MainAppContext'
import MainSection from '@/components/MainSection'
import BG_Overlays from '@/components/MainSection'
import Navbar from '@/components/Navbar'
import Post, { EachPoster } from '@/components/reuseable/Post'
import { SlideInOnScroll } from '@/components/reuseable/ScrollOnDisplay'
import { TechInfo } from '@/components/types'


function page() {


  const { getSkilltHero,getAllSkills } = useData()

  return (
    <MainSection data={getSkilltHero()}>
          <>
    <div className='absolute top-0 left-0 w-0'></div>
    <div className="relative w-full z-10  bg-[#0f1014e2] to-transparent bg-linear-to-t ">
      <div className="absolute w-full h-100 -top-100  left-0  from-[#0f1014e2] to-transparent bg-linear-to-t "></div>
        <SlideInOnScroll className='flex flex-col relative -top-35'>
              <Skills skills={getAllSkills()}/>
        </SlideInOnScroll>
    </div>
    </>
    </MainSection>
  )

}

export default page


const Skills = ({skills}:{skills:TechInfo[]})=>{

    return (
        <div className='grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-10 pb-5'>
            {skills.map((ele,ind)=>{
      return <EachPoster key={ind} link={`/skills/${ele.slug}`} details={{background:ele.background}} />})}
        </div>
    )
}