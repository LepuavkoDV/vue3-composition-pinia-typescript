import {
  ApiModule,
  IApiModule,
  IApiResponse,
} from '@/modules/api/HTTPApi/ApiModule';
import { headers, EWeatherRapidApiEndpoints } from './config';

export interface ICoordinates {
  lat: number;
  lon: number;
}

class WeatherRapidApi extends ApiModule implements IApiModule {
  constructor() {
    super();
    this.http.setHeaders(headers);
  }

  getMinutelyForecast(params: ICoordinates): Promise<IApiResponse> {
    return this.http.get(EWeatherRapidApiEndpoints.minutely, { params });
  }
}

export const weatherRapidApi = new WeatherRapidApi();
