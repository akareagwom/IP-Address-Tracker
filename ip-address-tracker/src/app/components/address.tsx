import { useEffect, useState } from 'react';
import {fetchData} from '../IPAddress';

interface DataItem {
    ipAddress: string;
    location: object;
    timezone: string;
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
        <div className=" lg:flex bg-white shadow-xl justify-between absolute top-[25%] lg:top-[28%] left-[10%] lg:left-[10%] rounded-[10px] p-12 w-[80%]">
            
            {data.map((item=>
            <div key={item.ipAddress} className="lg:flex">
                <div  className="border-[1px solid red]">
                    <h1 className="text-[8px]" >IP ADDRESS</h1>
                    <p>{item.ipAddress}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >LOCATION</h1>
                    <p>{JSON.stringify(item.location)}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >TIMEZONE</h1>
                    <p>brrrrrrrrr</p>
                </div>
                <div className="">
                    <h1 className="text-[8px]" >ISP</h1>
                    <p>brrrrrrrrr</p>
                </div>

            </div>

            ))}
            
        </div>
    )
}

export default Address;