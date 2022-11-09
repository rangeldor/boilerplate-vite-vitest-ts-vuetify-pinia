import { Ref, ref } from "vue"
import { SnackbarType } from '@/enums/snackbar'

interface ISnackbarComposable {
    active: Ref<boolean>
    description: Ref<string>
    type: Ref<SnackbarType>
    timeout: Ref<number>
    success(descriptionValue: string, timeoutValue?: number): void
    warning(descriptionValue: string, timeoutValue?: number): void
    info(descriptionValue: string, timeoutValue?: number): void
    error(descriptionValue: string, timeoutValue?: number): void
}
// Colocar ReadOnly
const active = ref<boolean>(false)
const description = ref<string>('')
const type = ref<SnackbarType>(SnackbarType.SUCCESS)
const timeout = ref<number>(2000)

export function useSnackbar(): ISnackbarComposable {
    const show = (descriptionValue: string, typeValue: SnackbarType, timeoutValue?: number) => {
        description.value = descriptionValue
        timeout.value = timeoutValue ?? 2000
        type.value = typeValue
        active.value = true
    }

    const success = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, SnackbarType.SUCCESS, timeoutValue)
    }

    const warning = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, SnackbarType.WARNING, timeoutValue)
    }

    const info = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, SnackbarType.INFO, timeoutValue)
    }

    const error = (descriptionValue: string, timeoutValue?: number) => {
        show(descriptionValue, SnackbarType.ERROR, timeoutValue)
    }

    return { active, timeout, type, description, success, warning, info, error }
}