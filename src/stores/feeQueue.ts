import { defineStore } from 'pinia'
import { api } from '@/services/api/private'
import { AxiosError, AxiosResponse } from 'axios'
import { IFeeQueue } from '@/interfaces/fee-queue'

interface IState {
  feeQueue: IFeeQueue | Record<string, never>
  isLoading: boolean
}

export const useFeeQueueStore = defineStore('feeQueue', {
  state: (): IState => ({
    feeQueue: {},
    isLoading: false
  }),

  actions: {
    async fetchAll (filter = ''): Promise<IFeeQueue | undefined> {

        this.isLoading = true

        const url = `/tax/taxQueue?filter='${filter}'`

        try {
            const response = await api.get(url)
            
            this.feeQueue = response.data
        } catch (error) {
            const err = error as AxiosError
            
            if (err.response) return err.response
        } finally {
            this.isLoading = false
        }
    },

    async approvalDecision (ids: number[] | null, decision: boolean, justification: string): Promise<AxiosResponse | undefined> {

      this.isLoading = true

      const url = '/tax/approvalDecision'

      try {
          const response = await api.post(url, {
            ids,
            decision,
            justification
          })
          
          return response.data
      } catch (error) {
          const err = error as AxiosError
          
          if (err.response) return err.response
      } finally {
          this.isLoading = false
      }
  }
  }
})