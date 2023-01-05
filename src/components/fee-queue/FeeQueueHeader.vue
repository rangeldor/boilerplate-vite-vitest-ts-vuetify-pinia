<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex justify-start align-center">
      <h2 class="mr-2 fee-queue__title">
        Fila de Taxa
      </h2>
      <MicroLearningDialog />
    </div>
    <div>
      <v-switch
        v-model="batch"
        hide-details
        inset
        color="primary"
        label="Em lote"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFeeQueue } from '@/composables/useFeeQueue'
import MicroLearningDialog from '@/components/fee-queue/MicroLearningDialog.vue'

const { batch } = useFeeQueue()

</script>

<style lang="scss" scoped>
.fee-queue {
  &__title {
    @media (max-width: 575px) {
      font-size: medium;
    }
  }
}
</style>
