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
        Decisão
      </v-card-title>
      <v-card-text>
        <v-select
          v-model="form.status"
          :items="proposalItems"
          label="Escolha o status da proposta"
        />
        <v-select
          v-model="form.reason"
          :items="reasonItems"
          label="Motivo"
        />
        <v-textarea
          v-model="form.justify"
          variant="filled"
          label="Digite aqui sua justificativa"
          auto-grow
        />
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center mx-3 mb-3">
        <v-row class="justify-center">
          <v-col
            cols="6"
            sm="4"
          >
            <v-btn
              variant="elevated"
              color="secondary"
              class="text-capitalize px-10"
              rounded="pill"
              size="large"
              block
              @click.prevent="toggleDecisionDialog"
            >
              Voltar
            </v-btn>
          </v-col>

          <v-col
            cols="6"
            sm="4"
          >
            <v-btn
              variant="elevated"
              color="primary"
              class="text-capitalize px-10"
              rounded="pill"
              size="large"
              block
              @click.prevent="handleDecision"
            >
              Confirmar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSnackbar } from '@/composables/useSnackbar'
import FormLoader from '../auth/signin/FormLoader.vue'

const snackbar = useSnackbar()

const active = ref<boolean>(false)
const isLoading = ref<boolean>(false)

// Terá um endpoint para trazer esses dados
const proposalItems = ref([{
    value: 'approve',
    title: 'Aprovar'    
},
{
    value: 'repproved',
    title: 'Reprovar'    
}])

// Terá um endpoint para trazer esses dados
const reasonItems = ref([{
    value: 'test',
    title: 'Test'    
}])

const toggleDecisionDialog = () => {
    active.value = !active.value
}

const form = reactive({ 
    status: 'approve',
    reason: 'test',
    justify: ''
})

const handleDecision = () => {
    snackbar.success('Decisão enviada com sucesso!')
}

</script>
