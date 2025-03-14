import axios from "axios";
import { useEffect, useState } from "react";


 const  useIpAdress= ()=> {
    
  const [geoPlugin, setGeoPlugin] = useState(null);
     const [ ip, setIp ] = useState(null);
  
      const controller = new AbortController();
  const getApiAddress = () => {
        axios({
            method: 'get',
            url: 'https://api.ipify.org?format=json',
            // signal: controller.signal
        })
            .then((res) => {
                if (res.status === 200 && res.data && res.data.ip) {
                    setIp(res.data.ip);
                } else {
                    throw new Error('response error');
                }
            })
            .catch((error) => {
                console.log('getApiAddress failed', error);
            });
    };
 
   const getGeoByIp = () => {
        axios({
            method: 'get',
            url: `http://www.geoplugin.net/json.gp?ip=${ip}`,
            // signal: controller.signal
        })
            .then((res) => {
                if (res.status === 200 && res.data) {
                    setGeoPlugin(res.data);
                } else {
                    throw new Error('response error');
                }
            })
            .catch((error) => {
                console.log('getGeoByIp failed', error);
            });
    };
      
  useEffect(() => {
        getApiAddress();
        return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    useEffect(() => {
        ip && getGeoByIp();
        return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ip ]);
     
     
     
     
  console.log(geoPlugin);
  console.log(ip);
  
     
     return {geoPlugin}
  
}
export default   useIpAdress