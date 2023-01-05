import { Ref, ref } from "vue"
import { StatusType } from '@/enums/status'

interface IAlertComposable {
    active: Ref<boolean>
    title: Ref<string>
    description: Ref<string>
    type: Ref<StatusType>
    toggle(): void
    approved(): void
    disapproved(): void
    error(): void
   
}

const active = ref<boolean>(false)
const title = ref<string>('')
const description = ref<string>('')
const type = ref<StatusType>(StatusType.SUCCESS)

export function useAlert(): IAlertComposable {
    const show = (titleValue: string, descriptionValue: string, typeValue: StatusType) => {
        title.value = titleValue
        description.value = descriptionValue
        type.value = typeValue
        active.value = true
    }

    const toggle = () => {
        active.value = !active.value
    }

    const approved = () => {
        const title = 'Aprovado com sucesso'
        const description = 'Aprovado com sucesso'

        show(title, description, StatusType.SUCCESS)
    }

    const disapproved = () => {
        const title = 'Reprovado com sucesso'
        const description = 'Reprovado com sucesso'

        show(title, description, StatusType.SUCCESS)
    }

    const error = () => {
        const title = 'Aconteceu algum erro'
        const description = 'Aconteceu algum erro'

        show(title, description, StatusType.WARNING)
    }

    return { active, type, title, description, toggle, approved, disapproved, error }
}