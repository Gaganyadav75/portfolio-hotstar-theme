"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbar() {
    const route = usePathname();
    const list = [
        {text:"Home",icon:'/home.svg',route:"/"},
        {text:"Skills",icon:'/skills.png',route:"/skills"},
        {text:"Projects",icon:"/projects.png",route:"/projects"},
        {text:"Contact",icon:"/contact.png",route:"/contact"}
    ]

  return (
    <div className='justify-center items-center flex h-full w-fit z-40'>


      
        <div className=' h-full flex flex-col justify-center items-center z-40'>
            <div className="absolute top-6 lg:left-6 left-3 z-50">
              <Link href={"/"}>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </Link>
            </div>  
  

          <nav  className="flex group flex-col gap-5 w-fit lg:m-7 m-3 p-5 z-20 ">
          <div className='absolute w-0 group-hover:block bg-linear-to-r from-black to-transparent  transition-all duration-1100 ease-in-out left-0 top-0 h-full  group-hover:md:-w-md group-hover:w-xs'></div>

            {list.map((ele,ind)=>{
                return <Link key={ind} href={ele.route}> 
                <button 
                  type="button"
                  className={`cursor-pointer relative hover:opacity-100 flex gap-x-2 group-hover:drop-shadow-sm shadow-amber-50 w-fit`}
                >
                  
                  <span className="">
                    {ele.icon?<img className={`${route==ele.route? "opacity-100 drop-shadow-[0_0_10px_white]" : "opacity-75"} hover:opacity-100 w-6 aspect-square invert-100`} src={ele.icon} alt={ele.text}/>:
                    <div className="w-5 aspect-square rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden"></div>
                    }
                  </span>
                  <span className={`absolute opacity-0 ${route==ele.route? "group-hover:opacity-100 glow": "group-hover:opacity-75"} hover:opacity-100 -translate-x-30 group-hover:flex  group-hover:translate-x-7 transition-all duration-1000 ease-in-out bg-transparent text-sm font-semibold`}>
                        <p>{ele.text}</p>
                  </span>
                </button>
                </Link>
            })}

          </nav>
        
        </div>
    </div>
  );
}

export default Navbar