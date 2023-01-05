<template>
  <v-container>
    <h2 class="mb-3">
      Conta
    </h2>

    <v-card>
      <v-card-title>
        <div class="d-flex justify-start align-center">
          <v-avatar
            size="large"
            class="mr-5"
            color="primary"
          >
            <span class="text-uppercase">{{ userStore.userInitials }}</span>
          </v-avatar>
          <span>{{ userStore.user.name }} {{ userStore.user.lastName }}</span>
        </div>
      </v-card-title>

      <v-card-text>
        <div class="d-flex justify-start align-center mt-2">
          <strong class="mr-1">Email: </strong>
          <span>{{ userStore.user.email }}</span>
        </div>
        <div class="d-flex justify-start align-center mt-2">
          <strong class="mr-1">Telefone: </strong>
          <span>{{ formatPhoneNumber(userStore.user.phoneNumber) }}</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const formatPhoneNumber = (phone: string) => {
  const phoneRegExpMatchArray = phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,5})(\d{0,4})/)
  const phoneFormatted = phoneRegExpMatchArray !== null ? `(${phoneRegExpMatchArray[1]}) ${phoneRegExpMatchArray[2]} ${phoneRegExpMatchArray[3]} - ${phoneRegExpMatchArray[4]}` : ''
  return phoneFormatted
}
</script>
