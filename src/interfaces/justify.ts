import { IJustifyType } from "@/enums/justify"
import { Ref } from "vue"

export interface IOpinionatedData {
    id: number;
    user: string;
    justification: string;
    decisionApproval: boolean;
}

export interface IOpinionated {
    statusCode: number;
    success: boolean;
    data: IOpinionatedData[];
    errors?: any;
}

export interface IJustifyData {
    justification: string;
}

export interface IJustify {
    statusCode: number;
    success: boolean;
    data: IJustifyData;
    errors?: any;
}

export interface IJustifyComposable {
    active: Ref<boolean>
    id: Ref<number | null>
    title: Ref<string>
    type: Ref<IJustifyType>
    toggleJustifyDialog(): void
    openJustifyDialog(id: number): void
    openOpinionatedDialog(id: number): void
}