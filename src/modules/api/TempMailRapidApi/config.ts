import { IRapidApiRequestHeaders } from '@/modules/api/HTTPApi/types';

export const headers: Partial<IRapidApiRequestHeaders> = {
  'X-RapidAPI-Key': 'f6ec054409msh6b81feb5aef6c24p1054b2jsn9f79e10d9358',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

export enum ERapidApiWeatherEndpoints {
  getOneAttachment = 'https://privatix-temp-mail-v1.p.rapidapi.com/request/one_attachment/id/%7Bmail_id%7D/%7BatId%7D/',
}
