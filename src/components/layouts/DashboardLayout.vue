<template>
  <v-app
    full-height
    :theme="theme"
  >
    <Notify />

    <!-- <Drawer :toogle-drawer="drawer" /> -->
  
    <v-app-bar
      elevation="1"
    >
      <v-app-bar-nav-icon @click.prevent="toogleDrawer" />
  
      <v-app-bar-title>
        Logo
      </v-app-bar-title>

      <v-responsive>
        Sdeal
      </v-responsive>
  
      <template #append>
        Bem vindo
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          />
        </v-avatar>
      </template>
    </v-app-bar>
  
    <v-main>
      <router-view
        v-slot="{ Component }"
      >
        <transition
          name="scale"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import Notify from '@/components/notify/Notify.vue'
//   import Drawer from '@/components/sidebar/Drawer.vue'

const theme = ref<string>('dark')
const drawer = ref<boolean>(true)
const toogleDrawer = () => {
    drawer.value = !drawer.value
}
</script>
  
<style lang="scss" scoped>
.dashboard {
  &__logo {
    display: flex;
    height: 25px;

    @media (max-width: 575px) {
      height: 15px;
    }
  }
}
</style>