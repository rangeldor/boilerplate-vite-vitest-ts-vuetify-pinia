<template>
  <v-app>
    <v-main>
      <v-container class="auth">
        <v-card
          class="rounded-tr-0 rounded-tl-xl rounded-bl-0 rounded-br-xl overflow-hidden"
          max-width="550"
          width="100%"
          elevation="3"
        >  
          <v-card-header class="d-flex justify-center align-center my-4">
            Logo
          </v-card-header>
          <v-card-content>
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
          </v-card-content>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
theme.themes.value.light.colors.background = '#041E42'
</script>
  
<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  height: 100vh;
  width: 100vw;

  &__logo {
    height: 50px;
  }
}
</style>