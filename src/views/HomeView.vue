<template>
  <div class="flex justify-center">
    <div :class="[
      'min-w-sm max-w-sm border border-gray-100 bg-gray-50',
      'shadow-lg hover:shadow-shadow-xl',
      'card transition-shadow test w-full bg-green-600 text-purple-50 rounded-md']">
      <h2 class="text-md mb-2 px-4 pt-4">
        <div class="flex justify-between">
          <div class="badge relative top-0">
            <span class="mt-2 py-1 h-12px text-md font-semibold w-12px rounded right-1 bottom-1 px-4">
              {{ weather.city_name }}
            </span>
          </div>
          <span class="text-lg font-bold ">6:13</span>
        </div>
      </h2>
      <div class="flex items-center p-4">
        <div class="flex justify-center items-center w-96">
          <IconCloudy/>
        </div>
      </div>
      <div class="text-md pt-4 pb-4 px-4">
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <span class="flex space-x-2 items-center">
              <IconWindy/>
              <span>27km/h</span>
            </span>
            <span class="flex space-x-2 items-center">
              <IconRainy/>
              <span>32%</span>
            </span>
          </div>
          <div>
            <h1 class="text-6xl">12°</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ICoordinates } from '@/modules/api';
import IconCloudy from '@/components/icons/IconCloudy.vue';
import IconWindy from '@/components/icons/IconWindy.vue';
import IconRainy from '@/components/icons/IconRainy.vue';
import { useWeather } from '@/store/weather';

const coordinates: ICoordinates = reactive({
  lat: 50.45,
  lon: 30.52,
});
const weather = useWeather();
weather.getWeather(coordinates);
</script>
