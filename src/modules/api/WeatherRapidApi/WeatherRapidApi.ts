import { HTTPInstance } from '@/modules/api/HTTPApi/HTTPInstance';
import { AxiosResponse } from 'axios';
import { headers, ERapidApiWeatherEndpoints } from './config';

export interface IMinutelyForecastParams {
  lat: string;
  lon: string;
}

class WeatherRapidApi {
  instance: HTTPInstance;

  constructor() {
    this.instance = new HTTPInstance();
    this.instance.setHeaders(headers);
  }

  getMinutelyForecast(params: IMinutelyForecastParams): Promise<AxiosResponse> {
    return this.instance.get(ERapidApiWeatherEndpoints.minutely, { params });
  }
}

export const useWeatherRapidApi = new WeatherRapidApi();
