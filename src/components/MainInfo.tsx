"use client"
import Link from 'next/link';
import { MyInfo } from './types';

export default function MainInfo({data}:{data:MyInfo}) {

  return (
    <div className="flex flex-col w-[80%] relative max-lg:-bottom-10 z-20 fade-out duration-500">
    {!data.title?
    <GlitchTitle/>
    :
    <h1 className='text-5xl font-bold '>{data.title}</h1>}
    <div className="mt-3 lg:text-lg text-xs">
      <Info2 list={data.list1}/>
    </div>
   
    <Descriptions list={data.description}/>
    {data.list2 && 
    <div className="flex lg:font-semibold font-medium gap-2 lg:text-sm text-xs mt-2 ">
       <Languages list={data.list2} active={data?.list2top} />
    </div>
    }
    <div className="mt-5 w-full flex">
      {data.button &&
      <Link href={data.button.link}>
        <button
          className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold w-70 cursor-pointer"
          title={data.button.title}
        >
          {data.button.text}
        </button>
      </Link>
      }
      {data.button2 &&
      <a className='cursor-pointer' href={data.button2.email?"mailto:"+data.button2.email:data.button2.link}>
      <button title={data.button2.title} onDoubleClick={()=>{if(data?.button2?.email)navigator.clipboard.writeText(data.button2.email)}} className="hover:bg-[#4a5565be] px-4 py-3 ml-3 bg-[#4a556592]  rounded-lg">
        
          {data.button2.text}
      </button>
      </a>
      }

    </div>
  </div>
  )
}

const GlitchTitle = () => {
  return (

    <h1
      className="glitch-text fade-out duration-700 z-50 w-full text-4xl md:text-5xl font-extrabold uppercase  text-white bg-clip-text text-left pl-1"
      data-text="CODE GALAXY"
    >
      CODEE GALAXY
    </h1>

  );
};


const Descriptions = ({list}:{list:string[]})=>{
  return(
    list.map((ele,ind)=>
      <p key={"desc_"+ind} className=" drop-shadow-md lg:text-lg  text-sm mt-2 lg:w-[60%]">
     {ele}
    </p>)
  )
}

const Info2 = ({list}:{list:{text:string,title:string}[]})=>{
  return(
    list.map((ele, ind)=>
      <span
        key={"info1_"+ind}
      className="lg:px-2 mr-2 lg:py-1 px-1 py-0.5 border rounded"
      title={ele.title}>
        {ele.text}
      </span>)
  )
}


const Languages = ({
    list,
    active = 0,
  }: {
    list: string[];
    active?: number;
  }) => {
    return (
      list.map((ele,ind)=>
      <button
      key={"lang_"+ind}
        className={`lg:px-4 lg:py-2 px-2 py-1 backdrop-blur-3xl ${
          active==ind && "bg-[#232123]"
        } opacity-80  rounded-3xl`}
      >
        <span>{ele}</span>
      </button>
      )
    );
  };
  