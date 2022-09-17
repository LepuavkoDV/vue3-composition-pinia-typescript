import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('messages', () => {
  const message = ref('message');
  return {
    message,
  };
});
