import axios from "axios";

const getUrl = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_xCF6qmBPCBmGpMJnzxcuH8c0943yj&ipAddress';


interface Info {
    ipAddress: string;
    location : {
        timezone: string;
        country: string;
        region: string;
        city: string;
        postalCode: string;
        lat: number;
        lng: number;
    }
    isp: string;
}


export const fetchData =async(): Promise <Info[]> =>{
    try{
        const response = await axios.get(getUrl);
    const data: Info[]=[
        {
            ipAddress: response.data.ip,
            location: {
                timezone: response.data.location.timezone,
                country: response.data.location.country,
                region: response.data.location.region,
                city: response.data.location.city,
                postalCode: response.data.location.postalCode,
                lat: response.data.location.lat,
                lng: response.data.location.lng,
            },
            isp: response.data.isp
        }
    ];
    return data;
    }catch (error)
    {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }


}
