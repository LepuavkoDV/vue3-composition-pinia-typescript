<template>
  <div class="container mx-auto w-1/2 h-fit font-sans bg-slate-100 border-1 rounded">
    <div class="container mx-auto">{{ weather.city_name }}</div>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from '@/store/weather';

const weather = useWeather();
weather.getWeather({ lat: '50.45', lon: '30.52' });
</script>
