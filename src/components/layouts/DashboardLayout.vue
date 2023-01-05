<template>
  <v-app full-height>
    <Drawer :toogle-drawer="drawer" />
  
    <v-app-bar
      elevation="1"
    >
      <v-app-bar-nav-icon @click.prevent="toggleDrawer" />
  
      <v-app-bar-title>
        {{ pageName }}
      </v-app-bar-title>

      <v-responsive>
        SDeal
      </v-responsive>
  
      <template #append>
        <div class="d-flex justify-center align-center">
          <span class="mr-1">Bem vindo(a)</span>
          <strong class="mr-2">{{ userStore.user.name }}</strong>

          <v-avatar color="primary">
            <span class="text-uppercase">{{ userStore.userInitials }}</span>
          </v-avatar>
        </div>
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
import { computed, ref } from 'vue'
import Drawer from '@/components/sidebar/Drawer.vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const drawer = ref<boolean>(true)
const toggleDrawer = () => {
    drawer.value = !drawer.value
}

const route = useRoute()
const pageName = computed(() => route.meta.translatedName)

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