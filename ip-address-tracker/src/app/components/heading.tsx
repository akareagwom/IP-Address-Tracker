"use client"
import { IoIosArrowForward } from "react-icons/io";

export const Heading =()=>{
    return(
        <>
        <div className="p-0 m-0 h-[40vh] flex flex-col items-center bg-[url('/images/pattern-bg-mobile.png')] lg:bg-[url('/images/pattern-bg-desktop.png')] ">
            <h1 className="text-white text-xl mt-4">IP Address Tracker</h1>
            <input
            className="
            lg:p-2
            p-3
            lg:w-[34%]
            w-[75%]
            mt-4
            text-[13px]
            rounded-[8px]
            "
             type="search" 
             name="" 
             placeholder="Search for any IP address or domain" 
             id="" />
             <button className="text-white absolute rounded-l-none bg-black py-3.5 lg:py-1.5 right-[40px] lg:right-[356px] px-4 rounded-[8px] top-[60px]">
             <IoIosArrowForward />
             </button>
        </div>
        </>
    )
}