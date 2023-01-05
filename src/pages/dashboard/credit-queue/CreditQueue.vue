<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <CreditQueueHeader />
      </v-col>

      <v-col cols="12">
        <CreditQueueFilter />
      </v-col> 

      <v-col cols="12">
        <CreditQueueSearch />
      </v-col> 
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CreditQueueFilter from '@/components/credit-queue/CreditQueueFilter.vue'
import CreditQueueHeader from '@/components/credit-queue/CreditQueueHeader.vue'
import CreditQueueSearch from '@/components/credit-queue/CreditQueueSearch.vue'

</script>
