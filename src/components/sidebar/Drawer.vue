<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :width="display.mobile.value ? 280 : 300"    
    elevation="2"
  >
    <Cover />

    <List />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, toRefs } from 'vue'
import Cover from '@/components/sidebar/Cover.vue'
import List from '@/components/sidebar/List.vue'
import { useDisplay } from 'vuetify'

interface IDrawerProps {
  toogleDrawer: boolean
}

const drawerProps = withDefaults(defineProps<IDrawerProps>(), {
  toogleDrawer: true
})

const { toogleDrawer } = toRefs(drawerProps)

const drawer = ref<boolean>(true)

const handleDrawer = (): void => {
 drawer.value = !drawer.value
}

watch([() => toogleDrawer.value], () => {
  handleDrawer()
})

const display = useDisplay()

const handleMobileDrawer = () => {
  if (display.mobile.value) drawer.value = !drawer.value
}

onMounted(() => {
  handleMobileDrawer()
})

watch([() => display.mobile.value], () => {
  handleMobileDrawer()
})

</script>