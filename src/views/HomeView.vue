<template>
  <div class="flex justify-center">
    <WeatherDisplay
      :city="weather.city_name"
      :weather="weather.getLatestWeatherData"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ICoordinates } from '@/modules/api';
import WeatherDisplay from '@/components/WeatherDisplay';
import { useWeather } from '@/store/weather';

const coordinates: ICoordinates = reactive({
  lat: 50.45,
  lon: 30.52,
});
const weather = useWeather();
weather.getWeather(coordinates);
</script>
