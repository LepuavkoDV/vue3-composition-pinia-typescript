import {
  ApiModule,
  IApiModule,
  IApiResponse,
  IRapidApiRequestHeaders,
} from '@/modules/api/ApiModule';

export interface ICoordinates {
  lat: number;
  lon: number;
}

const requestHeaders: IRapidApiRequestHeaders = {
  'X-RapidAPI-Key': 'f6ec054409msh6b81feb5aef6c24p1054b2jsn9f79e10d9358',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

enum endpoints {
  minutely = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
}

class WeatherRapidApi extends ApiModule implements IApiModule {
  constructor() {
    super();
    this.http.setHeaders(requestHeaders);
  }

  getMinutelyForecast(params: ICoordinates): Promise<IApiResponse> {
    return this.http.get(endpoints.minutely, { params });
  }
}

export const weatherRapidApi = new WeatherRapidApi();
