<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <FeeQueueHeader />
      </v-col> 

      <v-col cols="12">
        <FeeQueueSearch />
      </v-col> 

      <v-col cols="12">
        <FeeQueueList />
      </v-col> 
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FeeQueueHeader from '@/components/fee-queue/FeeQueueHeader.vue'
import FeeQueueList from '@/components/fee-queue/FeeQueueList.vue'
import FeeQueueSearch from '@/components/fee-queue/FeeQueueSearch.vue'

</script>
