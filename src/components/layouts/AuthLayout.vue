<template>
  <v-app>    
    <v-main>
      <v-container class="auth">
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
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script lang="ts" setup>

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
}
</style>