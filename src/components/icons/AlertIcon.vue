<template>
  <v-avatar
    :color="colorName"
    size="large"
  >
    <v-icon
      :color="type"
      :icon="iconName"
    />
  </v-avatar>
</template>

<script setup lang="ts">
import { StatusType } from '@/enums/status'
import { computed, toRefs } from 'vue'

interface AlertIconProps {
    type: StatusType
}

const props = withDefaults(defineProps<AlertIconProps>(), {
    type: StatusType.SUCCESS
})

const { type } = toRefs(props)

const iconType = {
    success: 'fas fa-check-circle',
    error: 'fas fa-circle-xmark',
    info: 'fas fa-circle-info',
    warning: 'fas fa-circle-exclamation',
}
const iconName = computed(() => iconType[type.value])

const colorType = {
    success: 'rgba(69, 196, 96,0.14)',
    error: 'rgba(244,67,54,0.25)',
    info: 'rgba(33,150,243,0.25)',
    warning: 'rgba(251, 164, 34,0.19)',
}
const colorName = computed(() => colorType[type.value])

</script>
