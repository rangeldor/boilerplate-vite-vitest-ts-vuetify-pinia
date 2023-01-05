import { defineStore } from 'pinia'
import { api } from '@/services/api/public'
import { AxiosError } from 'axios'
import { IUser, ISignIn } from '@/interfaces/user'
import router from '@/router/index'
import { RouteName } from '@/enums/route'
import { useUserComposable } from '@/composables/useUser'

const localUser: IUser = JSON.parse(localStorage.getItem('user') || '{}')

interface IState {
  user: IUser
  isLoading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): IState => ({
    user: localUser,
    isLoading: false
  }),

  getters: {
    userInitials(): string {
      return Object.keys(this.user).length > 0 ? this.user.name.substring(0, 2) : ''
    }
  },

  actions: {
    async signIn ({ login, password }: ISignIn) {

      this.isLoading = true

      const url = 'api/Token/Login'

      try {
        const response = await api.post(url, {
          code_system: 1,
          client_id: login,
          client_secret: password
        })

        const userComposable = useUserComposable()
        const user = userComposable.setToken(response.data)

        this.user = user

        return user
      } catch (error) {
        const err = error as AxiosError

        if (err.response) {
          return err.response
        }
      } finally {
        this.isLoading = false
      }
    },

    signOut () {
        localStorage.removeItem('user')

        const userStore = useUserStore()
        userStore.$reset()
        
        router.push({
          name: RouteName.SignIn
        })
    }
  }
})