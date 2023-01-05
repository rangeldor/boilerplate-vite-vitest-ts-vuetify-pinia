import { ref, watch, computed } from "vue"
import { IFeeQueueComposable } from '@/interfaces/fee-queue'
import { IProposal } from '@/interfaces/fee-queue'
import { useSnackbar } from './useSnackbar'
import { useFeeQueueStore } from '@/stores/feeQueue'

const batch = ref<boolean>(false)
const proposalComposable= ref<IProposal>()
const proposalIds = ref<number[]>([])
const searchProposal = ref<string>('')

export function useFeeQueue(): IFeeQueueComposable {

    const snackbar = useSnackbar()
    const feeQueueStore = useFeeQueueStore()

    const clonedProposals = ref<IProposal[]>([])

    const getFilteredProposals = (proposalValue: IProposal[]) => {
        return proposalValue.filter((proposal) => proposal.client.toLowerCase().includes(searchProposal.value.toLowerCase()))
    }

    const filteredProposals = computed(() => {
        clonedProposals.value = Object.assign([], feeQueueStore.feeQueue.data)

        return getFilteredProposals(clonedProposals.value)
    }) 
    
    const addProposalId = (id: number | undefined) => {
        (id === undefined) ? snackbar.error('Erro ao obter dados') : proposalIds.value.push(id)        
    }
   
    const removeProposalId = (id: number | undefined) => {
        (id === undefined) ? snackbar.error('Erro ao obter dados') : proposalIds.value.splice(proposalIds.value.indexOf(id), 1)
    }

    const resetProposalIds = () => {
        proposalIds.value = []
    }

    watch([() => batch.value], () => {
        if (!batch.value) resetProposalIds()
    })
    
    return { batch, proposalComposable, filteredProposals, searchProposal, proposalIds, addProposalId, removeProposalId }
}