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
        Direcionar
      </v-card-title>
      <v-card-text>
        <v-select
          v-model="form.direction"
          :items="directionItems"
          label="Escolha para quem você deseja direcionar"
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
              @click.prevent="toggleDirectionDialog"
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
              Direcionar
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
  const directionItems = ref([{
      value: 'user',
      title: 'Teste'    
  }])
  
  const toggleDirectionDialog = () => {
      active.value = !active.value
  }
  
  const form = reactive({ 
      direction: 'user',
  })
  
  const handleDecision = () => {
      snackbar.success('Direcionado com sucesso!')
  }
  
  </script>
  