<template>
  <v-switch
    v-if="type === Microlearning.Batch"
    hide-details
    inset
    color="primary"
    label="Em lote"
  />
  <v-btn
    v-else 
    size="small"
    rounded="pill"
    :color="color"
    :variant="variant"
    class="text-capitalize"
  >
    <span :class="className">{{ name }}</span>
  </v-btn>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Microlearning } from '@/enums/microlearning'

interface ProposalEmptyMessageProps {
    type: Microlearning
    name: string
    className: string
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | undefined
    color: string
}

const props = defineProps<ProposalEmptyMessageProps>()

const { type, name, variant, color, className } = toRefs(props)

</script>
