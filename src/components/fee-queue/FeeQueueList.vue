<template>  
  <v-row
    v-if="feeQueueStore.isLoading"
    class="align-center d-flex justify-center"
  >
    <FormLoader />
  </v-row>
  
  <v-row
    v-else-if="storeIsEmpty"
    class="d-flex flex-column justify-center align-center mt-16 pt-16"
  >
    <ProposalEmptyMessage />
  </v-row>

  <v-row
    v-else-if="searchingIsEmpty"
    class="d-flex flex-column justify-center align-center mt-16 pt-16"
  >
    <ProposalEmptyMessage is-searching />
  </v-row>
  
  <v-row v-else>
    <v-col
      v-for="proposalListItem in filteredProposals"
      :key="proposalListItem.proposal"
      cols="12"
    >
      <FeeQueueListItem
        :is-detail="false"
        :proposal="proposalListItem"
      />
    </v-col>
    <v-col
      v-if="batch"
      cols="12"
    >
      <div class="d-flex justify-end align-center">
        <v-btn
          variant="outlined"
          rounded="pill"
          color="success"
          class="text-capitalize mr-2"
          @click.prevent="openApprovedDialog(proposalIds)"
        >
          <span class="text-white">Aprovar Lote</span>
        </v-btn>
        <v-btn
          variant="outlined"
          rounded="pill"
          color="primary"
          class="text-capitalize"
          @click.prevent="openReprovedDialog(proposalIds)"
        >
          <span class="text-white">Reprovar Lote</span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import FeeQueueListItem from '@/components/fee-queue/FeeQueueListItem.vue'
import { useFeeQueue } from '@/composables/useFeeQueue'
import { useFeeQueueStore } from '@/stores/feeQueue'
import FormLoader from '@/components/auth/signin/FormLoader.vue'
import ProposalEmptyMessage from '@/components/fee-queue/ProposalEmptyMessage.vue'
import { useProposal } from '@/composables/useProposal'

const { batch } = useFeeQueue()
const feeQueueStore = useFeeQueueStore()
const { filteredProposals, proposalIds } = useFeeQueue()
const { openApprovedDialog, openReprovedDialog } = useProposal()

const proposalsSearchIsEmpty = computed(() => filteredProposals.value?.length === undefined || filteredProposals.value?.length === 0)
const proposalsStoreIsEmpty = computed(() => feeQueueStore.feeQueue?.data === undefined || feeQueueStore.feeQueue.data.length === 0)

const searchingIsEmpty = computed(() => !feeQueueStore.isLoading && proposalsSearchIsEmpty.value && !proposalsStoreIsEmpty.value)
const storeIsEmpty = computed(() => !feeQueueStore.isLoading && proposalsStoreIsEmpty.value)

onMounted(() => {
  feeQueueStore.fetchAll()
})

</script>
