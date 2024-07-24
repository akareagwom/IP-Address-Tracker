import axios from "axios";

const getUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_xCF6qmBPCBmGpMJnzxcuH8c0943yj&ipAddress=8.8.8.8';

interface Info {
    ipAddress: string;
    location : object;
}

export const fetchData =async(): Promise <Info[]> =>{
    try{
        const response = await axios.get(getUrl);
    const data: Info[]=[
        {
            ipAddress: response.data.ip,
            location: response.data.location
        }
    ];
    return data;
    }catch (error)
    {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }


}
