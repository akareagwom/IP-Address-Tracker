import axios from 'axios';


const IPSTACK_ACCESS_KEY= '50564c1e41724a48b216a5d64a75b191'
interface IpstackResponse {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: {
    geoname_id: number;
    capital: string;
    languages: {
      code: string;
      name: string;
      native: string;
    }[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
}

export const fetchIpData = async (ipAddress: string): Promise<IpstackResponse | null> => {
  const accessKey = process.env.IPSTACK_ACCESS_KEY;
  const url = `http://https://api.ipgeolocation.io/ipgeo?apiKey=${IPSTACK_ACCESS_KEY}${ipAddress}`;
  try {
      const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP data:', error);
    return null;
  }
};