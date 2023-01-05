<template>
  <v-text-field
    density="compact"    
    variant="solo"
    label="Pesquise aqui o nome do cliente"
    single-line
    hide-details
  >
    <template #prepend-inner>
      <div class="d-flex justify-center align-center h-100 mt-1 mr-1">
        <v-icon icon="fas fa-magnifying-glass fa-lg" />
      </div>
    </template>
  </v-text-field>
</template>
  
  <script setup lang="ts">
//   import { useCreditQueue } from '@/composables/useCreditQueue'
  
//   const { searchData } = useCreditQueue()
  
  </script>
  