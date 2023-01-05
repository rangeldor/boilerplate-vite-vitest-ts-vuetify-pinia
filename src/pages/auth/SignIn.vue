<template>
  <FormLoader v-if="userStore.isLoading" />

  <v-card
    v-else
    class="overflow-hidden"
    max-width="400"
    width="100%"
    elevation="3"
  >  
    <v-card-title class="d-flex flex-column justify-center align-center my-10">
      <img
        :src="LogoIcon"
        alt="logo"
      >
    </v-card-title>
    <v-card-text>
      <v-form
        class="mx-3"
        @submit.prevent="handleSubmit"
      >
        <v-row no-gutters>
          <v-col cols="12">
            <label for="login">Login</label>
            <v-text-field
              id="login"
              v-model="form.login"
              class="mt-1"
              variant="filled"
              color="primary"
              autofocus
              :rules="[ (value: string) => !!value || 'Campo obrigatório!' ]"
            />
          </v-col>

          <v-col cols="12">
            <label for="login">Senha</label>
            <v-text-field
              id="password"
              v-model="form.password"
              class="mt-1 signin"
              variant="filled"
              color="primary"
              :append-inner-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :type="showPassword ? 'text' : 'password'"
              :rules="[ (value: string) => !!value || 'Campo obrigatório!' ]"
              @click:append-inner="showPassword = !showPassword"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            color="primary"
            block
            rounded="pill"
            size="large"
            class="my-8"
            type="submit"
          >
            Entrar
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import LogoIcon from '@/assets/logo_scaniasdeal_mobile.svg'
import { useRouter } from 'vue-router'
import { RouteName } from '@/enums/route'
import { ISignIn } from '@/interfaces/user'
import { useSnackbar } from '@/composables/useSnackbar'
import { useUserStore } from '@/stores/user'
import FormLoader from '@/components/auth/signin/FormLoader.vue'

const snackbar = useSnackbar()
const router = useRouter()
const userStore = useUserStore()

const showPassword = ref<boolean>(false)

const welcomeNotify = () => snackbar.success('Bem vindo!')
const goToHome = () => {
  router.push({
    name: RouteName.CreditQueue
  })

  welcomeNotify()
}

const form = ref<ISignIn>({ login: '', password: '' })
const isFormValid = computed(() => form.value.login !== '' && form.value.password !== '')

const handleSubmit = async (): Promise<void> => {
  try {
    if (isFormValid.value) {
      await userStore.signIn(form.value)
      goToHome()
    } 
  } catch (error) {
    snackbar.error('Erro ao efetuar login!')
  }
}

</script>

<style lang="scss" scoped>
/* stylelint-disable selector-class-pattern */
:deep() {
  .v-field__append-inner {
    color: rgb(var(--v-theme-primary));
  }
}

</style>
