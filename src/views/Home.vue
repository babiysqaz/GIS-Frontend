<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToGis() {
  router.push('/gis-layer')
}
</script>

<template>
  <div class="home-container">
    <h1>Vue 3 + TypeScript + Vite + ArcGIS</h1>
    <p>Project is ready!</p>
    <button @click="navigateToGis" class="nav-button">
      Go to GIS Layer
    </button>
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem;
  text-align: center;
}

.nav-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0079c1;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-button:hover {
  background-color: #005a87;
}
</style>
