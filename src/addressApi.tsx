import axios from 'axios';

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

export const fetchIpData = async (ip: string): Promise<IpstackResponse | null> => {
  const accessKey = process.env.IPSTACK_ACCESS_KEY; // Store your API key in environment variables
  const url = `http://api.ipstack.com/${ip}?access_key=${accessKey}`;
  
  try {
    const response = await axios.get<IpstackResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP data:', error);
    return null;
  }
};