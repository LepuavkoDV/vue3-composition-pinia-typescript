<template>
  <nav class="flex-row w-full h-1 p-2 mb-3">
    <router-link to="/">Weather</router-link> |
    <router-link to="/random-palette">Random Palette</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
