import { defineStore } from 'pinia'
import { api } from '@/services/api/private'
import { AxiosError } from 'axios'
import { ICreditQueue, IDataItem } from '@/interfaces/credit-queue'

interface IState {
    creditQueue: ICreditQueue | Record<string, never>
    creditQueueItem: IDataItem | Record<string, never>
    isLoading: boolean
}

export const useCreditQueueStore = defineStore('creditQueue', {
  state: (): IState => ({
    creditQueue: {},
    creditQueueItem: {},
    isLoading: false
  }),

  actions: {    
    async fetchAll (filter = ''): Promise<ICreditQueue[] | undefined> {

        this.isLoading = true
        // Adicionar url correta quando houver
        const url = `/tax/creditQueue?filter='${filter}'`

        try {
            const response = await api.get(url)
            
            this.creditQueue = response.data
        } catch (error) {
            const err = error as AxiosError
            
            if (err.response) return err.response
        } finally {
            this.isLoading = false
        }
    },

    async fetchOne (id: number | null) {

        this.isLoading = true
        // Adicionar url correta quando houver
        const url = `/tax/creditQueue?id=${id}`

        try {
            const response = await api.get(url)
            
            this.creditQueueItem = response.data
        } catch (error) {
            const err = error as AxiosError
            
            if (err.response) return err.response
        } finally {
            this.isLoading = false
        }
    },
  }
})