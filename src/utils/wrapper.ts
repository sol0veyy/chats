import axios from 'axios';
import { URLS } from '../constants/urls';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const wrapper = (
  method: 'post' | 'get' | 'put' | 'delete',
  url: string,
  params?: object,
  data?: object
) => {
  const config = {
    url,
    method,
    baseURL: URLS.API,
    headers: {
      'version': '0.0'
    },
    params,
    data
  }


  return axios
    .request(config)
    .then(checkResponse)
    .catch(catchError);
};
