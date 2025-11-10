'use client'
import { useData } from '@/components/MainAppContext'
import MainSection from '@/components/MainSection';
import Post from '@/components/reuseable/Post';
import React from 'react'

type ProjectPageProps = {
  params: Promise<{ project: string }>;
};

export default function page({params}:ProjectPageProps) {
    const { project } = React.use(params);

    const {getAllProjects,getProject} = useData()

    const projects = getAllProjects().filter(ele=>ele.slug!=project)
    const data = getProject(project)

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
              {projects?.map((ele: any, ind: any) => {
                  return <Post key={"post_" + ind} id={ind}  slug={ele.slug} background={ele.background} title={ele.title} description={ele.description[0]} list1={ele.list1} />
              })
              }
          </div>
      </div>
        </div>
        </>
        </MainSection>

  )
}
