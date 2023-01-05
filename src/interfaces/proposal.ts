import { IProposalType } from "@/enums/proposal"
import { Ref } from "vue"

export interface IProposalComposable {
    active: Ref<boolean>
    ids: Ref<number[] | null>
    title: Ref<string>
    buttonText: Ref<string>
    type: Ref<IProposalType>
    toggleProposalDialog(): void
    openApprovedDialog(id: number[]): void
    openReprovedDialog(id: number[]): void
}