"use client"
import { IoIosArrowForward } from "react-icons/io";
import {fetchData} from '../IPAddress';
import { useEffect, useState } from 'react';
import ApiTest from "./apiTest";

let ipData: any;

export const Heading =()=>{
    const [ipAddress, setIpAddress] = useState<string>("");


    // const handleSubmit = (e:React.FormEvent)=>{
    //     e.preventDefault();
    //     fetchData();
    // }

    return(
        <>
        <div className="p-0 m-0 h-[40vh] flex flex-col items-center bg-no-repeat bg-cover bg-[url('/images/pattern-bg-mobile.png')] lg:bg-[url('/images/pattern-bg-desktop.png')] ">
            <h1 className="text-white text-xl mt-[20%] lg:mt-8">IP Address Tracker</h1>
            <form  className="relative">
                <input
                className="
                lg:p-2
                p-3
                lg:w-[350px]
                w-[300px]
                mt-4
                text-[13px]
                rounded-[9px]
                "
                type="search"
                value={ipAddress} 
                // onChange={(e) => setIpAddress(e.target.value)}
                name="" 
                placeholder="Search for any IP address or domain" 
                id="" />
                <button type="submit" className="text-white absolute rounded-l-none bg-black py-4 lg:py-[11px] right-[0px] lg:right-[0px] px-4 rounded-[8px] top-[15px]">
                <IoIosArrowForward />
                </button>
            </form>
            <div className="">
                <ApiTest ipData={ipData} />
            </div>
        </div>
        </>
    )
}