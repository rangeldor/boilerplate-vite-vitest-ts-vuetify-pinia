<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex justify-start align-center">
      <h2 class="mr-2 credit-queue__title">
        Fila de crédito
      </h2>
      <MicroLearningDialog />
    </div>
  </div>
</template>
  
<script setup lang="ts">
//   import { useCreditQueue } from '@/composables/useCreditQueue'
import MicroLearningDialog from '@/components/credit-queue/MicroLearningDialog.vue'
    
</script>
  
<style lang="scss" scoped>
.credit-queue {
  &__title {
    @media (max-width: 575px) {
      font-size: medium;
    }
  }
}
</style>
  