import { GetServerSideProps } from 'next';
import { fetchIpData } from '../../addressApi';

interface HomeProps {
    ipData: any;
  }
  
  const ApiTest: React.FC<HomeProps> = ({ ipData }) => {
    return (
      <div>
        <h1>Your IP Information</h1>
        {ipData ? (
          <div>
            <p>IP: {ipData.ip}</p>
            <p>Country: {ipData.country_name}</p>
            <p>City: {ipData.city}</p>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p>Unable to fetch IP data.</p>
        )}
      </div>
    );
  };
  
  export const getServerSideProps: GetServerSideProps = async () => {
    // Get the client's IP address from the request headers
    const ip = 'check'; // Replace 'check' with a specific IP or 'check' to get the requester's IP
    
    const ipData = await fetchIpData(ip);
    
    return {
      props: {
        ipData,
      },
    };
  };
  
  export default ApiTest;