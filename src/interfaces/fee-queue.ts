import { Ref } from 'vue'

export interface IProposal {
    id: number;
    idWorkFlow: number;
    proposal: number;
    contract: number;
    client: string;
    type: string;
    product: string;
    deadline: string;
    valueRequested: number;
    manager: string;
    amountTruck: number;
    amountImplements: number;
    amountBus: number;
    totalValue: number;
    startDate: string;
}

export interface IFeeQueue {
    statusCode: number;
    data: IProposal[];
    errors?: any;
    success: boolean;
}

export interface IFeeQueueComposable {
    batch: Ref<boolean>   
    proposalComposable: Ref<IProposal | undefined>   
    filteredProposals: Ref<IProposal[] | undefined>   
    searchProposal: Ref<string>   
    proposalIds: Ref<number[]>   
    addProposalId(id: number | undefined): void
    removeProposalId(id: number | undefined): void
}
