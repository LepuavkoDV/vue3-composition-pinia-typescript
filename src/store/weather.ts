import { defineStore } from 'pinia';
import {
  ICoordinates,
  weatherRapidApi,
} from '@/modules/api';

/* eslint-disable camelcase */
export interface IWeatherData {
  precip: number;
  snow: number;
  temp: number;
  timestamp_local: string;
  timestamp_utc: string;
  ts: number;
}

export interface IWeatherState {
  city_name: string;
  county_code: string;
  lat: number;
  lon: number;
  state_code: string;
  timezone: string;
  data: IWeatherData[];
}
/* eslint-enable camelcase */

export const useWeather = defineStore('weather', {
  state: (): IWeatherState => ({
    /* eslint-disable camelcase */
    city_name: '',
    county_code: '',
    lat: 0,
    lon: 0,
    state_code: '',
    timezone: '',
    data: [],
    /* eslint-enable camelcase */
  }),
  getters: {},
  actions: {
    async getWeather(params: ICoordinates) {
      const { data } = await weatherRapidApi.getMinutelyForecast(params);
      this.setWeather(data);
    },
    setWeather(weatherState: IWeatherState) {
      this.$patch({ ...weatherState });
    },
  },
});
