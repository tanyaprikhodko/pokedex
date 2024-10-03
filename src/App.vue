<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #eaefed;
  overflow: hidden;
}
</style>
