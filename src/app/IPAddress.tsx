import axios from "axios";

const getUrl = 'https://api.ipstack.com/134.201.250.155?access_key=1efceeb335a4ccfd107b084ce061c2f3';
const ipUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey=50564c1e41724a48b216a5d64a75b191&ip=1.1.1.1'


interface Info {
    ipAddress: string;
    country_name: string;
    location : {
        timezone: string;
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
        const response = await axios.get(ipUrl);
    const data: Info[]=[
        {
            ipAddress: response.data.ip,
            country_name: response.data.location.country_name,
            location: {
                timezone: response.data.location.timezone,
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
