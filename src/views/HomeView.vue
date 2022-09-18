<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
    {{ computedMessage }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue';
import type { Ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { useWeather } from '@/store/weather';

const message: Ref<string> = ref('Welcome to your Vue3 + TS app');
const computedMessage = computed(() => `${message.value} + computed`);
const weather = useWeather();
onBeforeMount(() => {
  weather.getWeather();
});
</script>
