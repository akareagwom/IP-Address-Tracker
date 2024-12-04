import { useEffect, useState } from 'react';
import {fetchData} from '../IPAddress';

// interface DataItem {
//     ipAddress: string;
//     location : {
//         timezone: string;
//         country: string;
//         region: string;
//         postalCode: string;
//         lat: number;
//         lng: number;
//     }
//     isp: string;
//   }

type IpstackResponse =  any

const Address : React.FC<{ ipAddress: string }>=({ ipAddress }) => {
    // const [data, setData] = useState<DataItem[]>([]);
    const [ipData, setIpData] = useState<IpstackResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getIpData = async () => {
      setLoading(true);
      const data = await fetchData();
      if (data) {
        setIpData(data);
      } else {
        setError('Failed to fetch IP data');
      }
      setLoading(false);
    };

    getIpData();
  }, [ipAddress]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

    
        const dataFunction =async()=>{
            try {
                // const result = await fetchData();
                // setData(result);
                // setIpAddress(ipAddress);
            } catch (error) {
                
            }
            
        }
        dataFunction();


    return(
        <div className=" ">
          hola  
           
            <div key={ipData.ipAddress} className="lg:flex bg-white shadow-xl justify-between absolute top-[25%] lg:top-[28%] left-[10%] lg:left-[10%] rounded-[10px] p-12 w-[80%]">
                <div  className="border-[1px solid red]">
                    <h1 className="text-[8px]" >IP ADDRESS </h1>
                    <p>{ipData.ipAddress}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >LOCATION</h1>
                    <p>{ipData.location.country}, {ipData.location.region}</p>
                </div>

                <div className="border-[1px solid red]">
                    <h1 className="text-[8px]" >TIMEZONE</h1>
                    <p>{ipData.location.timezone}</p>
                </div>
                <div className="">
                    <h1 className="text-[8px]" >ISP</h1>
                    <p>{ipData.isp}</p>
                </div>

            </div>

          
            
        </div>
    )
}

export default Address;