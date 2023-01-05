<template>
  <v-snackbar
    v-model="active"
    :color="type"
    location="right top"
    :timeout="timeout"
  >
    <div class="d-flex justify-start align-center">
      <v-icon
        :icon="iconName"
        class="mr-2"
      />
      <span>{{ description }}</span>
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/composables/useSnackbar'
import { computed } from 'vue'

const { active, type, timeout, description } = useSnackbar()

const iconType = {
    success: 'fas fa-check-circle',
    error: 'fas fa-circle-xmark',
    info: 'fas fa-circle-info',
    warning: 'fas fa-circle-exclamation',
}
const iconName = computed(() => iconType[type.value])

</script>
