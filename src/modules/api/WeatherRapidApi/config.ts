import { IRapidApiRequestHeaders } from '@/modules/api/HTTPApi/types';

export const headers: IRapidApiRequestHeaders = {
  'X-RapidAPI-Key': 'f6ec054409msh6b81feb5aef6c24p1054b2jsn9f79e10d9358',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

export enum ERapidApiWeatherEndpoints {
  minutely = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
}
