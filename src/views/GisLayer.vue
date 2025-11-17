<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import TileLayer from '@arcgis/core/layers/TileLayer'
import '@arcgis/core/assets/esri/themes/light/main.css'

const mapDiv = ref<HTMLDivElement>()
let view: MapView | null = null

onMounted(() => {
  const map = new Map({
    basemap: 'streets-navigation-vector',
  })

  const tileLayer = new TileLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    opacity: 0.5,
  })

  map.add(tileLayer)

  view = new MapView({
    container: mapDiv.value,
    map,
    center: [121.5654, 25.0330],
    zoom: 11,
  })
})

onUnmounted(() => {
  if (view) {
    view.destroy()
  }
})
</script>

<template>
  <div class="gis-container">
    <div ref="mapDiv" class="map-view" />
  </div>
</template>

<style scoped>
.gis-container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.map-view {
  width: 100%;
  height: 100%;
}
</style>
