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
import { ref } from 'vue'
import { Microlearning } from '@/enums/microlearning'
import MicrolearningDialogTypeButton from '@/components/fee-queue/MicrolearningDialogTypeButton.vue'

const microlearningDialog = ref<boolean>(false)
const toggleMicrolearningDialog = () => microlearningDialog.value = !microlearningDialog.value

interface IQuestions {
    title: string
    text: string
    typeButton: Microlearning
    color: string
    className: string
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | undefined
}

const questions = ref<IQuestions[]>([{
    title: 'Em lote',
    text: 'Ao Marcar essa funcionalidade ser?? permitido selecionar propostas que est??o na tela para uma aprova????o/reprova????o ??nica.',
    typeButton: Microlearning.Batch,
    color: 'secondary',
    className: 'text-white',
    variant:'elevated'
},
{
    title: 'Detalhes',
    text: 'Exibe informa????es chaves da proposta, tais como Dealer, qual a al??ada de decis??o, gerente e analista respons??vel, Risk Score e Risco PLD.',
    typeButton: Microlearning.Detail,
    color: 'secondary',
    className: 'text-white',
    variant:'outlined'
},
{
    title: 'Ver parecer',
    text: 'Detalha os coment??rios das al??adas que embasaram a aprova????o.',
    typeButton: Microlearning.Opinionated,
    color: 'secondary',
    className: '',
    variant:'elevated'
},
{
    title: 'Justificativa',
    text: 'Detalha o argumento do Vendedor no momento em que realizou a solicita????o da redu????o da taxa para essa proposta.',
    typeButton: Microlearning.Justify,
    color: 'secondary',
    className: '',
    variant:'elevated'
},
{
    title: 'Aprovar',
    text: 'Bot??o para aprovar a proposta e solicita que seja inserida uma justificativa.',
    typeButton: Microlearning.Approve,
    color: 'success',
    className: 'text-white',
    variant:'outlined'
},
{
    title: 'Reprovar',
    text: 'Bot??o para reprovar a proposta e solicita e que seja inserida uma justificativa.',
    typeButton: Microlearning.Disapprove,
    color: 'primary',
    className: 'text-white',
    variant:'outlined'
}])
</script>
