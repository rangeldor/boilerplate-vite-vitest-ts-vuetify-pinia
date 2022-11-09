<template>
  <v-snackbar
    v-model="active"
    color="background"
    location="right top"
    :timeout="timeout"
  >
    <div class="d-flex justify-start align-center">
      <v-icon
        :icon="icon"
        :color="type"
        class="mr-2"
      />
      <span>{{ description }}</span>
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/composables/useSnackbar'
import { computed } from 'vue';
// import { useTheme } from 'vuetify'
const { active, type, timeout, description } = useSnackbar()

const iconType = {
    success: 'fas fa-check-circle',
    error: 'fas fa-circle-xmark',
    info: 'fas fa-circle-info',
    warning: 'fas fa-circle-exclamation',
}
const icon = computed(() => iconType[type.value])

// const theme = useTheme()
// const snackbarBorderColorType = {
//     success: theme.themes.value.light.colors.success,
//     error: theme.themes.value.light.colors.error,
//     info: theme.themes.value.light.colors.info,
//     warning: theme.themes.value.light.colors.warning,
// }
// const snackbarBorderColor = computed(() => snackbarBorderColorType[type.value])

</script>

<!-- <style lang="scss">
.v-snackbar {
  &__wrapper {
    border-bottom: 4px solid v-bind(snackbarBorderColor);
  }
}
</style> -->
