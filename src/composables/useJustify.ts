import { ref } from "vue"
import { IJustifyComposable } from "@/interfaces/justify"
import { IJustifyType } from '@/enums/justify'

const active = ref<boolean>(false)
const id = ref<number | null>(null)
const title = ref<string>('')
const type = ref<IJustifyType>(IJustifyType.JUSTIFY)

export function useJustify(): IJustifyComposable {

    const toggleJustifyDialog = () => {
        active.value = !active.value
    }

    const show = (titleValue: string, typeValue: IJustifyType) => {
        title.value = titleValue
        type.value = typeValue
        toggleJustifyDialog()
    }

    const openJustifyDialog = (idValue: number) => {
        const title = 'Justificativa'
        id.value = idValue

        show(title, IJustifyType.JUSTIFY)
    }

    const openOpinionatedDialog = (idValue: number) => {
        const title = 'Parecer'
        id.value = idValue

        show(title, IJustifyType.OPINIONATED)
    }

    return { active, id, title, type, toggleJustifyDialog, openJustifyDialog, openOpinionatedDialog: openOpinionatedDialog }
}