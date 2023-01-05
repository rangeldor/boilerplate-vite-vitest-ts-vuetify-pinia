<template>
  <v-container>
    <v-btn
      prepend-icon="fas fa-arrow-left"
      @click.prevent="goToFeeQueue"
    >
      Voltar
    </v-btn>
    <FeeQueueListItem
      class="mt-5"
      :is-detail="true"
      :proposal="proposalComposable"
    />
  </v-container>
</template>

<script setup lang="ts">
import FeeQueueListItem from '@/components/fee-queue/FeeQueueListItem.vue'
import { useFeeQueue } from '@/composables/useFeeQueue'
import { RouteName } from '@/enums/route'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { proposalComposable } = useFeeQueue()

const router = useRouter()
const goToFeeQueue = () => router.push({ name: RouteName.FeeQueue })

onMounted(() => {
    if(proposalComposable.value === undefined) goToFeeQueue()
})
</script>
