import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMessages = defineStore('messages', () => {
  const message = ref('message');
  return {
    message,
  };
});
