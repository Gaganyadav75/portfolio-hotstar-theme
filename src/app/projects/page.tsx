"use client"
import { useData } from '@/components/MainAppContext';
import MainSection from '@/components/MainSection';
import Post from '@/components/reuseable/Post';
import { SlideInOnScroll } from '@/components/reuseable/ScrollOnDisplay';
import React from 'react'

function Page() {

    const {getProjectHero,getAllProjects} = useData()

    const projects = getAllProjects()

    
    return (
        <MainSection data={getProjectHero()}>
            {
                <>
                <div className='absolute top-0 left-0 w-0'></div>
                <div className="relative w-full z-10  bg-[#0f1014e2] to-transparent bg-linear-to-t ">
                    <div className="absolute w-full h-100 -top-100  left-0  from-[#0f1014e2] to-transparent bg-linear-to-t "></div>
                    <div className='relative w-full flex  z-50 '>
                        <div className="relative flex flex-col lg:w-[70%] -top-40 w-full">
                            {projects.map((ele, ind) => {
                                return <SlideInOnScroll key={"post_" + ind} > <Post background={ele.background} slug={ele.slug} title={ele.title} description={ele.description[0]} list1={ele.list1} /></SlideInOnScroll>
                            })
                            }
                        </div>

                    </div>
                </div>
            </>}
        </MainSection>
    )

}

export default Page