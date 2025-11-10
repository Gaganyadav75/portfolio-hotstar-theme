"use client"
import React, {  useState } from 'react'
import StartPage from '../components/StartPage'
import Navbar from '../components/Navbar'

function App({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


  const [viewer,setViewer] = useState<boolean|null>(null);






  return (
    !viewer?
    <StartPage viewer={viewer} setViewer={setViewer}/>
    :
   <>

    <Navbar/>
    <div className='absolute bg-linear-to-r from-[#0f1014] to-transparent  transition-all duration-1100 ease-in-out left-0 top-0 h-svh w-sm'></div>
        {children}
   </>
  )
}

export default App