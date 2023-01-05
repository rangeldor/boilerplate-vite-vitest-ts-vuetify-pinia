import { defineStore } from 'pinia'
import { api } from '@/services/api/private'
import { AxiosError } from 'axios'
import { IOpinionatedData, IJustifyData } from '@/interfaces/justify'

interface IState {
    isLoading: boolean
}

export const useJustifyStore = defineStore('justify', {
  state: (): IState => ({
    isLoading: false
  }),

  actions: {    
    async fetchOpinionated (id: number | null): Promise<IOpinionatedData[] | undefined> {

      const url = `/tax/previousDecisions?id=${id}`

      try {
          const response = await api.get(url)
          
          return response.data.data
      } catch (error) {
          const err = error as AxiosError
          
          if (err.response) return err.response
      } 
    },

    async fetchJustify (id: number | null): Promise<IJustifyData | undefined> {

        const url = `/tax/justification?id=${id}`
  
        try {
            const response = await api.get(url)
            
            return response.data.data
        } catch (error) {
            const err = error as AxiosError
            
            if (err.response) return err.response
        } 
      }
  }
})