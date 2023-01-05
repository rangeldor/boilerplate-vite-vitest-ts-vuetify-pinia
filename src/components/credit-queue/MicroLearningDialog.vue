<template>
  <v-btn
    size="x-small"
    color="white"
    icon
    @click.prevent="toggleMicrolearningDialog"
  >
    <v-icon>
      fas fa-question
    </v-icon>
  </v-btn>

  <v-dialog
    v-model="microlearningDialog"
    max-width="750"
  >
    <v-card
      height="100%"
      width="100%"      
    >  
      <v-card-title class="d-flex justify-center align-center mt-3 font-weight-bold">
        Perguntas frequentes
      </v-card-title>
      <v-card-text>
        <v-expansion-panels class="mb-6">
          <v-expansion-panel
            v-for="question in questionsFilter"
            :key="question.title"
          >
            <v-expansion-panel-title
              class="bg-microleaning-title"
              expand-icon="fas fa-caret-down"
              collapse-icon="fas fa-caret-up"
            >
              {{ question.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-microleaning-background">
              <div class="d-flex flex-column justify-start align-start">
                <span class="mb-5">{{ question.text }}</span>
                <BaseButtonFilter
                  :title="question.title"
                  :color="question.color"
                  :quantity="question.quantity"
                />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel
            v-for="question in questions"
            :key="question.typeButton"
          >
            <v-expansion-panel-title
              class="bg-microleaning-title"
              expand-icon="fas fa-caret-down"
              collapse-icon="fas fa-caret-up"
            >
              {{ question.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-microleaning-background">
              <div class="d-flex flex-column justify-start align-start">
                <span class="mb-5">{{ question.text }}</span>
                <MicrolearningDialogTypeButton
                  :class-name="question.className"
                  :variant="question.variant"
                  :color="question.color"
                  :name="question.title"
                  :type="question.typeButton"
                />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-card-actions class="d-flex justify-center align-center my-3">  
        <v-btn
          variant="elevated"
          color="secondary"
          class="text-capitalize px-10"
          rounded="pill"
          @click.prevent="toggleMicrolearningDialog"
        >
          Voltar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script setup lang="ts">
import { Microlearning } from '@/enums/microlearning';
import { ref } from 'vue'
import BaseButtonFilter from './BaseButtonFilter.vue'
import MicrolearningDialogTypeButton from '@/components/fee-queue/MicrolearningDialogTypeButton.vue'

const microlearningDialog = ref<boolean>(false)
const toggleMicrolearningDialog = () => microlearningDialog.value = !microlearningDialog.value

interface IQuestionsFilter {
  title: string
  text: string
  quantity: number
  color: "green" | "blue-lighten-2" | "yellow-darken-2" | "pink-lighten-2" | "orange-darken-1" | "teal-lighten-2"
}

const questionsFilter = ref<IQuestionsFilter[]>([{
    title: 'Nova',
    quantity: 2,
    text: 'Texto nova',
    color: 'green'
},
{
  title: 'Liberada Análise',
  quantity: 2,
  text: 'Texto Liberada Análise',
    color: 'blue-lighten-2'
},
{
  title: 'Em Análise',
  quantity: 2,
  text: 'Texto Em Análise',
    color: 'yellow-darken-2'
},
{
  title: 'Pendência',
  quantity: 2,
  text: 'Texto Pendência',
    color: 'pink-lighten-2'
},
{
  title: 'Ret. Pendência',
  quantity: 2,
  text: 'Texto Ret. Pendência',
    color: 'orange-darken-1'
},
{
  title: 'Comitê',
  quantity: 2,
    text: 'Texto Comitê',
    color: 'teal-lighten-2'
}])

interface IQuestionsList {
    title: string
    text: string
    typeButton: Microlearning
    color: string
    className: string
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | undefined
}

const questions = ref<IQuestionsList[]>([
{
    title: 'Detalhes',
    text: 'Texto Detalhes',
    typeButton: Microlearning.Detail,
    color: 'secondary',
    className: 'text-white',
    variant:'outlined'
},
{
    title: 'Direcionar',
    text: 'Texto direcionar',
    typeButton: Microlearning.Opinionated,
    color: 'secondary',
    className: '',
    variant:'elevated'
},
{
    title: 'Decisão',
    text: 'Texto Decisão',
    typeButton: Microlearning.Approve,
    color: 'success',
    className: 'text-white',
    variant:'outlined'
}])
</script>
