import { ApiModule, IApiModule } from '@/modules/api/HTTPApi/ApiModule';
import { AxiosResponse } from 'axios';
import { headers, EWeatherRapidApiEndpoints } from './config';

export interface ICoordinates {
  lat: string;
  lon: string;
}

class WeatherRapidApi extends ApiModule implements IApiModule {
  constructor() {
    super();
    this.http.setHeaders(headers);
  }

  getMinutelyForecast(params: ICoordinates): Promise<AxiosResponse> {
    return this.http.get(EWeatherRapidApiEndpoints.minutely, { params });
  }
}

export const weatherRapidApi = new WeatherRapidApi();
