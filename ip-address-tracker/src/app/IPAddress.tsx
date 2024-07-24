import axios from "axios";

const getUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_xCF6qmBPCBmGpMJnzxcuH8c0943yj&ipAddress=8.8.8.8';

interface Info {
    ipAddress: string;
    location : object;
}

export const fetchData =async()=>{
    const response = await axios.get(getUrl);
    // const data = response.data;
    console.log(response)


}
