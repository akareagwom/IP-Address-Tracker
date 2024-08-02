import { useEffect, useState } from 'react';
import {fetchData} from '../IPAddress';

interface DataItem {
    ipAddress: string;
    location : {
        timezone: string;
        country: string;
        region: string;
        postalCode: string;
        lat: number;
        lng: number;
    }
    isp: string;
  }

const Address=() => {
    const [data, setData] = useState<DataItem[]>([]);
    const [ipAddress, setIpAddress] = useState<string>("");


    useEffect(()=>{
        const dataFunction =async()=>{
            try {
                const result = await fetchData();
                setData(result);
                // setIpAddress(ipAddress);
            } catch (error) {
                
            }
            
        }
        dataFunction();

    },[])


    return(
        <div className=" ">
            
            {data.map((item=>
            <div key={item.ipAddress} className="lg:flex bg-white shadow-xl justify-between absolute top-[25%] lg:top-[28%] left-[10%] lg:left-[10%] rounded-[10px] p-12 w-[80%]">
                <div  className="border-[1px solid red]">
                    <h1 className="text-[8px]" >IP ADDRESS</h1>
                    <p>{item.ipAddress}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >LOCATION</h1>
                    <p>{item.location.country}, {item.location.region}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >TIMEZONE</h1>
                    <p>{item.location.timezone}</p>
                </div>
                <div className="">
                    <h1 className="text-[8px]" >ISP</h1>
                    <p>{item.isp}</p>
                </div>

            </div>

            ))}
            
        </div>
    )
}

export default Address;