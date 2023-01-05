import { ref } from "vue"
import { IProposalComposable } from "@/interfaces/proposal"
import { IProposalType } from '@/enums/proposal'

const active = ref<boolean>(false)
const ids = ref<number[] | null>(null)
const title = ref<string>('')
const type = ref<IProposalType>(IProposalType.APPROVED)
const buttonText = ref<string>('')

export function useProposal(): IProposalComposable {

    const toggleProposalDialog = () => {        
        active.value = !active.value
    }

    const show = (titleValue: string, buttonTextValue: string, typeValue: IProposalType) => {
        title.value = titleValue
        buttonText.value = buttonTextValue
        type.value = typeValue
        toggleProposalDialog()
    }

    const openApprovedDialog = (idValue: number[]) => {
        const title = 'Aprovar'
        const buttonText = 'Aprovar'
        ids.value = []
        ids.value = idValue

        show(title, buttonText, IProposalType.APPROVED)
    }

    const openReprovedDialog = (idValue: number[]) => {
        const title = 'Reprovar'
        const buttonText = 'Reprovar'
        ids.value = []
        ids.value = idValue

        show(title, buttonText, IProposalType.REPROVED)
    }

    return { active, ids, title, type, buttonText, toggleProposalDialog, openApprovedDialog, openReprovedDialog }
}