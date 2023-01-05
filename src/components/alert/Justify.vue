<template>
  <v-dialog
    v-model="active"
    max-width="550"
  >
    <FormLoader
      v-if="isLoading"
      class="align-self-center"
    />
    <v-card
      v-else
      height="100%"
      width="100%"
    >  
      <v-card-title class="d-flex justify-center align-center mt-3">
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-chip
          v-if="isJustify"
          label
        >
          {{ justify }}
        </v-chip>

        <div v-else>
          <div class="d-flex justify-space-between mx-1">
            <span>Usuário</span>
            <span>Justificativa</span>
            <span>Decisão</span>
          </div>
          <v-chip          
            v-for="opinion in opinionated"
            :key="opinion.id" 
            class="d-flex justify-space-between mt-2 py-5"
            label
          >
            <span>{{ opinion.user }}</span>
            <span>{{ opinion.justification }}</span>
            <strong class="font-weight-bold">{{ opinion.decisionApproval ? 'Aprovado' : 'Reprovado' }}</strong>
          </v-chip>
        </div>       
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center my-3">  
        <v-btn
          variant="elevated"
          color="primary"
          class="text-capitalize px-10"
          rounded="pill"
          @click.prevent="toggleJustifyDialog"
        >
          Voltar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
    
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useJustify } from '@/composables/useJustify'
import { IJustifyType } from '@/enums/justify'
import { useJustifyStore } from '@/stores/justify'
import { IOpinionatedData } from '@/interfaces/justify'
import { useSnackbar } from '@/composables/useSnackbar'
import FormLoader from '../auth/signin/FormLoader.vue'
    
const { active, id, title, type, toggleJustifyDialog } = useJustify()
const justifyStore = useJustifyStore()
const snackbar = useSnackbar()

const isLoading = ref<boolean>(false)

const justify = ref<string>('')
const getJustify = async () => {
  isLoading.value = true

  try {
    const justifyResponse = await justifyStore.fetchJustify(id.value)
    justify.value = justifyResponse?.justification ?? ''
  } catch (error) {
    snackbar.error('Erro ao carregar dados')
  } finally {
    isLoading.value = false
  }
}

const opinionated = ref<IOpinionatedData[]>([])
const getOpinionated = async () => {
  isLoading.value = true

  try {
    const opinionatedResponse = await justifyStore.fetchOpinionated(id.value)
    opinionated.value = opinionatedResponse ?? []
  } catch (error) {
    snackbar.error('Erro ao carregar dados')
  } finally {
    isLoading.value = false
  }
}

const isJustify = computed(() => type.value === IJustifyType.JUSTIFY )
const getData = () => {
    isJustify.value ? getJustify() : getOpinionated()
}

watch([() => active.value], () => {
    if (active.value) getData() 
})
</script>
    