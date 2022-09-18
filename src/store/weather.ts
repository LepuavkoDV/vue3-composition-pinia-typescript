import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { weatherRapidApi } from '@/modules/api';

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

export const useWeather = defineStore('weather', () => {
  const state: Partial<IWeatherState> = reactive({});
  async function getWeather() {
    const res = await weatherRapidApi.getMinutelyForecast({ lat: '35.5', lon: '-78.5' });
    state = res;
  }
  return { state, getWeather };
});
