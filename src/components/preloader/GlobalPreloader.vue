<template>
  <div
    ref="globalPreloader"
    :class="`global-preloader ${animated} ${zoomOut}`"
  >
    <v-progress-linear
      color="primary"
      height="5"
      indeterminate
    />
  
    <div class="preloader">
      <h1>Carregando arquivos</h1>
      <span class="font-weight-normal">Aguarde por favor...</span>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  
  const globalPreloader = ref()
  const windowAddEventListener = ref<string>('load')
  const preloaderAddEventListener = ref<string>('animationend')
  const animated = ref<string>()
  const zoomOut = ref<string>()
  const opacity = ref<number>(1)
  const display = ref<string>('block')
  
  const onWindowLoad = (): void => {
    animated.value = 'animate__animated'
    zoomOut.value = 'animate__fadeOut animate__fast'
  
    globalPreloader.value.addEventListener(preloaderAddEventListener.value, () => {
      opacity.value = 0
      display.value = 'none'
    })
  }
  
  onMounted(() => {
    window.addEventListener(windowAddEventListener.value, onWindowLoad)
  })
  
  </script>
  
  <style lang="scss" scoped>
  .global-preloader {
    display: v-bind(display);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: v-bind(opacity);
    background-color: "#0C0B0A";
    z-index: 9999;
  }

  .preloader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  </style>