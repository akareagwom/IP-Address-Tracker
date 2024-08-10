import { GetServerSideProps } from 'next';
import { fetchIpData } from '../../addressApi';

interface HomeProps {
    ipData: any;
  }
  
  const ApiTest: React.FC<HomeProps> = ({ ipData }) => {
    return (
      <div>
        <h1>Your IP Information</h1>
        {ipData ?(
        <div className="">
            <p>IP: {ipData.ip}</p>
        </div>): (
            <p>error</p>
        )
        }
        {/* {ipData.map (
          <div>
            <p>IP: {ipData.ip}</p>
            <p>Country: {ipData.country_name}</p>
            <p>City: {ipData.city}</p>
            
          </div>
        ) : (
          <p>Unable to fetch IP data.</p>
        )} */}
      </div>
    );
  };
  
  export const getServerSideProps: GetServerSideProps = async () => {
    // Get the client's IP address from the request headers
    const ip = 'check'; // Replace 'check' with a specific IP or 'check' to get the requester's IP
    
    const ipData = await fetchIpData('134.201.250.155');
    
    return {
      props: {
        ipData,
      },
    };
  };
  
  export default ApiTest;