<template>
  <div
    ref="globalPreloader"
    :class="`global-preloader ${animated} ${zoomOut}`"
  >
    <v-sheet class="h-100 d-flex flex-column justify-center align-center">
      <div class="global-preloader__message d-flex flex-column justify-center align-center h-100">
        <LogoIcon />
        <v-progress-linear
          class="my-10"
          color="white"
          height="10"
          rounded
          indeterminate
        />
        <h3>Carregando</h3>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import LogoIcon from '../icons/LogoIcon.vue'

const globalPreloader = ref()
const windowAddEventListener = ref<string>('load')
const preloaderAddEventListener = ref<string>('animationend')
const animated = ref<string>('')
const zoomOut = ref<string>('')
const opacity = ref<number>(1)
const display = ref<string>('block')

const onWindowLoad = () => {
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
  z-index: 9999;

  &__message {
    width: 25%;

    @media (max-width: 575px) {
      width: 75%;
    }
  }
}
</style>