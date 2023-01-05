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
        <v-textarea
          v-model="form.justify"
          variant="filled"
          label="Digite aqui sua justificativa"
          auto-grow
        />
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center my-3">
        <v-btn
          variant="elevated"
          color="secondary"
          class="text-capitalize px-10"
          rounded="pill"
          @click.prevent="toggleProposalDialog"
        >
          Voltar
        </v-btn>

        <v-btn
          variant="elevated"
          color="primary"
          class="text-capitalize px-10"
          rounded="pill"
          @click.prevent="handleProposal"
        >
          {{ buttonText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script setup lang="ts">
import { reactive,ref } from 'vue'
import { useProposal } from '@/composables/useProposal'
import { useFeeQueueStore } from '@/stores/feeQueue'
import { IProposalType } from '@/enums/proposal'
import { useSnackbar } from '@/composables/useSnackbar'
import { useAlert } from '@/composables/useAlert'
import FormLoader from '../auth/signin/FormLoader.vue'

const { approved, disapproved } = useAlert()
const { active, ids, title, type, buttonText, toggleProposalDialog } = useProposal()
const feeQueueStore = useFeeQueueStore()
const snackbar = useSnackbar()

const form = reactive({ 
    justify: ''
})

const isLoading = ref(false)

const handleProposal = () => {
    type.value === IProposalType.APPROVED ? postApproved() : postRepproved()
}

const resetForm = () => {
    form.justify = ''
}

const postApproved = async () => {
    isLoading.value = true

    try {
      const response = await feeQueueStore.approvalDecision(ids.value, true, form.justify)
      if (response?.status === 200) approved()
    } catch (error) {
      snackbar.error('Erro ao enviar dados')
    } finally {
      isLoading.value = false
    }

    toggleProposalDialog()
    resetForm()
}
const postRepproved = async () => {    
    isLoading.value = true

    try {
      const response = await feeQueueStore.approvalDecision(ids.value, false, form.justify)
      if (response?.status === 200) disapproved()
    } catch (error) {
      snackbar.error('Erro ao enviar dados')
    } finally {
      isLoading.value = false
    }
    
    toggleProposalDialog()
    resetForm()
}
</script>
  