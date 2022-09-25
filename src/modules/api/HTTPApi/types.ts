import { AxiosRequestHeaders } from 'axios';

export interface IRapidApiRequestHeaders extends AxiosRequestHeaders {
  'X-RapidAPI-Key': string;
  'X-RapidAPI-Host': string;
}
