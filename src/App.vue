<template>
  <GlobalPreloader />
  <Notify />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import Notify from '@/components/notify/Notify.vue'
import GlobalPreloader from '@/components/preloader/GlobalPreloader.vue'

</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}

html,
body {
  height: 100% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #fff inset !important;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
