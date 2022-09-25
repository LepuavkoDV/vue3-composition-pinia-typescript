<template>
  <div class="random-palette flex flex-col w-auto mx-2.5 my-5 border-2 rounded-md border-amber-200 bg-amber-100">
    <div class="flex p-2">{{ randomPalette.type }}</div>
    <div class="flex flex-row justify-start align-super p-2">
      <div v-for="(color, cKey) in palette" :key="cKey" class="flex w-fit h-fit p-3">{{ color }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  useRandomPalette,
} from '@/store/randomPalette';

const randomPalette = useRandomPalette();
randomPalette.getRandomPalette(1, 5);
const palette = computed<string[]>(() => randomPalette.data[0].palette);
</script>
