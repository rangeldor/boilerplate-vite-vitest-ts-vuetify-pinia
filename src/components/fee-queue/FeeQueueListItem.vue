<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex justify-start align-center">
              <v-avatar
                size="x-small"
                color="error"
                class="mr-2"
              />

              <h4 class="mr-2">
                Proposta:
              </h4> 
              <span>{{ proposal?.proposal }}</span>
            </div>

            <div
              v-if="batch"
              class="d-flex justify-end align-center"
            >
              <v-checkbox
                v-model="itemSelected"
                hide-details
              />
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col
          cols="12"
          lg="3"
        >
          <strong class="mr-2">N do contrato:</strong>
          <span>{{ proposal?.contract }}</span>
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Prazo: </strong>
          <span>{{ proposal?.deadline }}</span>
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Quantidade implementos: </strong>
          <span>{{ proposal?.amountImplements }}</span>
        </v-col>      
      </v-row>
      <v-row class="mt-1">
        <v-col
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Cliente: </strong>
          <span>{{ proposal?.client }}</span>
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Valor Solicitado: </strong>
          <span>{{ proposal?.valueRequested }}</span>          
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Quantidade onibus: </strong>
          <span>{{ proposal?.amountBus }}</span>
        </v-col>      
      </v-row>
      <v-row class="mt-1">
        <v-col
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Tipo: </strong>
          <span>{{ proposal?.type }}</span>
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Gerente: </strong>
          <span>{{ proposal?.manager }}</span>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Valor Total: </strong>
          <span>{{ proposal?.totalValue }}</span>
        </v-col>      
      </v-row>
      <v-row class="mt-1">
        <v-col
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Produto: </strong>
          <span>{{ proposal?.product }}</span>
        </v-col>
        <v-col
          :class="{ 'd-none d-sm-flex': !isDetail }"
          cols="12"
          lg="3"
        >
          <strong class="mr-1">Quantidade Caminhões: </strong>
          <span>{{ proposal?.amountTruck }}</span>
        </v-col>
        <v-col
          cols="12"
          lg="3"
          :class="{ 'd-none d-sm-flex': !isDetail }"
        >
          <strong class="mr-1">Entrada Sdeal: </strong>
          <span>{{ formatToBrazilianDatetime(proposal?.startDate, 'DD/MM/YYYY hh:mm:ss') }} </span>
        </v-col>      
      </v-row>

      <v-row
        v-if="!batch"
        class="mt-5"
      >
        <v-col cols="12">
          <div class="fee-queue__gap--10 d-flex flex-sm-row flex-column justify-end align-center align-sm-end">
            <div class="fee-queue__gap--10 d-flex justify-end align-center">
              <v-btn
                size="small"
                rounded="pill"
                color="secondary"
                class="text-capitalize"
                @click.prevent="openJustifyDialog(proposal.id)"
              >
                Justificativa
              </v-btn>
              <v-btn
                size="small"
                rounded="pill"
                color="secondary"
                class="text-capitalize"
                @click.prevent="openOpinionatedDialog(proposal.id)"
              >
                Ver parecer
              </v-btn>
            </div>

            <div class="fee-queue__gap--10 d-flex justify-end align-center mt-sm-0 mt-3">
              <v-btn
                size="small"
                variant="outlined"
                rounded="pill"
                color="success"
                class="text-capitalize"
                @click.prevent="openApprovedDialog([proposal.id])"
              >
                <span class="text-white">Aprovar</span>
              </v-btn>
              <v-btn
                size="small"
                variant="outlined"
                rounded="pill"
                color="primary"
                class="text-capitalize"
                @click.prevent="openReprovedDialog([proposal.id])"
              >
                <span class="text-white">Reprovar</span>
              </v-btn>
              <v-btn
                v-if="!isDetail"
                size="small"
                variant="outlined"
                rounded="pill"
                color="secondary"
                class="text-capitalize"
                @click.prevent="handleDetail"
              >
                <span class="text-white">Detalhes</span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { useFeeQueue } from '@/composables/useFeeQueue'
import { RouteName } from '@/enums/route'
import { useRouter } from 'vue-router'
import { IProposal } from '@/interfaces/fee-queue'
import { useDayJs } from '@/composables/useDayjs'
import { useJustify } from '@/composables/useJustify'
import { useProposal } from '@/composables/useProposal'

export interface IFeeQueueItemProps {
  isDetail: boolean,
  proposal: IProposal
}

const feeQueueItemProps = defineProps<IFeeQueueItemProps>()
const { isDetail, proposal } = toRefs(feeQueueItemProps)

const { formatToBrazilianDatetime } = useDayJs()
const { openOpinionatedDialog, openJustifyDialog } = useJustify()
const { openApprovedDialog, openReprovedDialog } = useProposal()

const { batch, proposalComposable, proposalIds, addProposalId, removeProposalId } = useFeeQueue()
watch([() => batch.value], () => {
  if (proposalIds.value.length === 0) itemSelected.value = false
})

const itemSelected = ref<boolean>(false)
watch([() => itemSelected.value], () => {
  itemSelected.value ? addProposalId(proposal.value?.proposal) : removeProposalId(proposal.value?.proposal)
})

const router = useRouter()
const goToFeeQueueDetail = () => router.push({ name: RouteName.FeeQueueDetail })
const setProposalId = () => proposalComposable.value = proposal.value
const handleDetail = () => {
  setProposalId()
  goToFeeQueueDetail()
}

</script>

<style lang="scss" scoped>
.fee-queue {
  &__gap {
    &--10 {
      gap: 10px;
    }
  }
}
</style>
