<script setup lang="ts">
import esriConfig from '@arcgis/core/config'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import TileLayer from '@arcgis/core/layers/TileLayer'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import { onMounted, onUnmounted, ref } from 'vue'
import '@arcgis/core/assets/esri/themes/light/main.css'

const apiKey = import.meta.env.VITE_ARCGIS_API_KEY
const mapDiv = ref<HTMLDivElement>()
let view: MapView | null = null

onMounted(async () => {
  try {
    // 設定 API Key (請替換成您的 API Key)
    esriConfig.apiKey = apiKey
    const map = new Map({
      basemap: 'streets-navigation-vector',
    })

    const tileLayer = new TileLayer({
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
      opacity: 0.5,
    })

    // 使用正確且穩定的 FeatureLayer URL
    const featureLayer = new FeatureLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0',
      opacity: 0.7,
      // 添加錯誤處理
      outFields: ['*'],
    })

    // 先初始化 view
    view = new MapView({
      container: mapDiv.value,
      map,
      center: [121.5654, 25.0330],
      zoom: 11,
    })

    // 等待 view 準備就緒後再添加圖層
    await view.when()

    map.add(tileLayer)
    map.add(featureLayer)

    // 監聽圖層載入錯誤
    featureLayer.on('layerview-create-error', (error) => {
      console.error('FeatureLayer 載入失敗:', error)
    })

    // 等待圖層載入完成
    await featureLayer.load().catch((error) => {
      console.error('FeatureLayer 載入錯誤:', error)
    })
  }
  catch (error) {
    console.error('地圖初始化錯誤:', error)
  }
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
