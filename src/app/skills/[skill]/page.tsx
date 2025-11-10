'use client'
import { useData } from '@/components/MainAppContext'
import MainSection from '@/components/MainSection';
import Post from '@/components/reuseable/Post';
import { ProjectInfo } from '@/components/types';
import React from 'react'

type SkillsPageProps = {
  params: Promise<{ skill: string }>
};

export default function Page({params}:SkillsPageProps) {
    const { skill } = React.use(params);

    console.log({skill})
    const {getAllProjects,getSkill} = useData()

    const projects = getAllProjects()
    const data = getSkill(skill)
    console.log(data)
    if(!data) return null;
  return (
        <MainSection data={data}>
              <>
        <div className='absolute top-0 left-0 w-0'></div>
        <div className="relative w-full z-10  bg-[#0f1014e2] to-transparent bg-linear-to-t ">
          <div className="absolute w-full h-100 -top-100  left-0  from-[#0f1014e2] to-transparent bg-linear-to-t "></div>
      <div className="flex flex-col w-full">
          <div className=' lg:w-[70%] w-full flex flex-col'>
              <h2 className="text-xl font-semibold pl-2">Projects</h2>
              {projects?.map((ele: ProjectInfo, ind: number) => {
                  return ind > 0 && <Post key={"post_" + ind}  slug={ele.slug} background={ele.background} title={ele.title} description={ele.description[0]} list1={ele.list1} />
              })
              }
          </div>
      </div>
        </div>
        </>
        </MainSection>

  )
}
