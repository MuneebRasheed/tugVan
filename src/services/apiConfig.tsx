import axios from 'axios';
import AppConfig from '../utils/config';
export const APIHANDLER = async (
  method?: string,
  route?: string,
  data?: any,
  token?: string,
) => {
 
  const config = AppConfig();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return await axios({
    method,
    url: `${config.apiUrl}${route}`,
    data: data,
    headers: headers,
  }).catch((error: any) => {
    return error;
  });
};
