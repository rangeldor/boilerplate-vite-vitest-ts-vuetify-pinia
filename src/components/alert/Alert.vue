<template>
  <v-dialog
    v-model="active"
    max-width="380"
  >
    <v-card
      height="100%"
      width="100%"
    >  
      <v-card-title class="d-flex justify-center align-center mt-3">
        <AlertIcon :type="type" />
      </v-card-title>
      <v-card-text class="d-flex flex-column justify-center align-center pt-1">
        <h2>{{ title }}</h2>
        <span>{{ description }}</span>
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center my-3">
        <v-btn
          variant="elevated"
          color="primary"
          class="text-capitalize px-10"
          rounded="pill"
          @click.prevent="toggle"
        >
          Continuar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'
import AlertIcon from '@/components/icons/AlertIcon.vue'

const { active, type, title, description, toggle } = useAlert()

</script>
