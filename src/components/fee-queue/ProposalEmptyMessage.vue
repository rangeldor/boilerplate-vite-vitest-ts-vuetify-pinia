<template>
  <v-icon
    size="x-large"
    color="secondary"
    icon="fas fa-list"
    class="mt-16"
  />
  <strong class="mt-2">{{ isSearching ? 'Não encontrado na pesquisa' : 'Sem propostas' }}</strong>
  <span class="mt-2">{{ isSearching ? 'Não há proposta do cliente pesquisado.' : 'Você não possui nenhuma proposta pendente.' }}</span>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

interface ProposalEmptyMessageProps {
    isSearching?: boolean
}

const props = withDefaults(defineProps<ProposalEmptyMessageProps>(), {
    isSearching: false
})

const { isSearching } = toRefs(props)
</script>
