<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
    {{ computedMessage }}
    <button @click="method()">Click Me</button>
    {{ messages.message }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { useMessages } from '@/store/messages';
import { useWeatherRapidApi } from '@/modules/api/WeatherRapidApi/WeatherRapidApi';

const message: Ref<string> = ref('Welcome to your Vue3 + TS app');
const computedMessage = computed(() => `${message.value} + computed`);
const messages = useMessages();
onMounted(async () => {
  const weatherRapidApiResponse = await useWeatherRapidApi.getMinutelyForecast({ lat: '35.5', lon: '-78.5' });
  console.log('weatherRapidApiResponse', weatherRapidApiResponse);
});

const method = (): void => {
  // message.value = 1;
};
</script>
