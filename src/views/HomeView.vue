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

const message: Ref<string> = ref('Welcome to your Vue3 + TS app');
const computedMessage = computed(() => `${message.value} + computed`);
const messages = useMessages();
onMounted(() => {
  console.log('onMounted');
});

const method = (): void => {
  // message.value = 1;
};
</script>
