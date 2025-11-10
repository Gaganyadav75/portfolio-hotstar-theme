"use client"
import React, { Dispatch, useEffect } from 'react'
import Image from "next/image";


function StartPage({viewer,setViewer}:{viewer:boolean|null,setViewer:Dispatch<boolean>}) {

  useEffect(()=>{
    const vwr = sessionStorage.getItem("profile");
    const profiles = [
      "Recruiters", "Clients", "Friends", "Developer" 
    ];
    if(vwr && profiles.includes(vwr)){
      setViewer(true)
    }else{
      setViewer(false)
    }
  },[setViewer])

  if(viewer==null){
    return <div className='absolute top-1/2 left-1/2 -translate-1/2 w-10 h-10 rounded-full border-4 border-red-500 border-b-white animate-spin'></div>
  }
  if(viewer){
    return null;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen lg:px-[20%] px-[5%] text-white bg-[#0f1014] h-full w-full">

    <div className="absolute top-0 w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 w-full ">

        <div>
          <div className="absolute top-6 left-6">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </div>  
        </div>
        <div className=" h-40 flex items-end">
          <h1 className="text-3xl font-semibold mb-8 w-full text-center">Who&apos;s are you?</h1>
        </div>
      </div>
      <ProfilesLister setViewer={setViewer}/>

    </div>
 
  </div>
  )
}

export default StartPage


export const ProfilesLister = ({setViewer}:{setViewer:Dispatch<boolean>})=>{
  const profiles = [
    { name: "Recruiters", icon: 
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" viewBox="0 0 24 24">
      <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v2H2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2zM2 12h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z"/>
    </svg>
     },
    { name: "Clients", icon:<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" viewBox="0 0 24 24">
      <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm6 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM4 18c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4v-2z"/>
    </svg> },
    { name: "Friends", icon:
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16" id="handshake">
      <path fill="white" d="M13 3a5.393 5.393 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152-.17.17-.38.34-.6.51-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.876.876 0 0 0 .15 1 .833.833 0 0 0 1.002-.002.62.62 0 0 0 .077.881.994.994 0 0 0 1.006-.002.806.806 0 0 0-.003 1.005 1.012 1.012 0 0 0 .892-.114.822.822 0 0 0 .187.912 1.093 1.093 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.311 1.311 0 0 0 1.094-.791c.146.056.312.094.488.094.236 0 .455-.068.64-.185.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279.996.996 0 0 0 .138-1.215.036.036 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.564 1.564 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.725 4.725 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781.319.359 1.269 1.179 1.719 1.599.28.26 1 .78.58 1.18s-.75 0-1.44-.56-2.23-1.94-2.23-1.94a.937.937 0 0 0 .27.72c.17.2 1.12 1.12 1.52 1.54s.75.67.41 1-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75.288.378.848.868 1.188 1.248s.54.7 0 1-1.34-.44-1.69-.8v-.002a.411.411 0 0 0-.1-.269.896.896 0 0 0-.906-.188A.609.609 0 0 0 6 11.1a.754.754 0 0 0-.912.001.61.61 0 0 0-.085-.95 1 1 0 0 0-1.174.08.66.66 0 0 0-.068-.911.996.996 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64-.68.51-1.25 1-1.08 1.34a1.834 1.834 0 0 0 2.087.036 2.41 2.41 0 0 1 1.343-.403c.347 0 .677.072.976.203.554.374 1.574 1.294 2.504 1.874 1.17.85 1.4 1.4 1.12 1.68z"></path>
    </svg>
     },
    { name: "Developer", icon:
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" viewBox="0 0 24 24">
      <path d="M8.7 14.7L5.4 11.4l3.3-3.3-1.4-1.4L2.6 11.4l4.7 4.7 1.4-1.4zM15.3 14.7l3.3-3.3-3.3-3.3 1.4-1.4 4.7 4.7-4.7 4.7-1.4-1.4zM9.6 20l4.8-16h-2l-4.8 16h2z"/>
    </svg>
     },
  ];



  return(
    <div className="flex gap-10 justify-around  items-center w-fit mt-30 ">
    {profiles.map((profile, index) => (
      <div key={index} onClick={()=>{sessionStorage.setItem("profile",profile.name);setViewer(true);}} className="group active:scale-105 flex flex-col items-center cursor-pointer opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-110 ">
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r  from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
          {profile.icon}
        </div>
        <span className="relative mt-4 text-sm font-semibold bg-gradient-to-r  from-blue-200 to-blue-500 bg-no-repeat bg-left-bottom bg-[length:0%_100%] group-hover:bg-[length:100%_100%] transition-all duration-700 bg-clip-text text-white group-hover:text-transparent">
          {profile.name}
        </span>
      </div>
    ))}
    
  </div>
  )
}