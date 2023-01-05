<template>
  <v-list
    v-model:opened="opened"
    v-model:selected="selected"
  >      
    <template
      v-for="(item, index) in ListItems"
      :key="index"
    >
      <v-list-item      
        v-if="item.hasPermission"        
        :value="item.value"
        link
        active-color="primary"
        :prepend-icon="item.icon"
        :title="item.title"
        rounded="te-xl be-xl"
        :to="item.to"
      />
    </template>    
    

    <v-list-item
      value="logout"
      link
      active-color="primary"
      prepend-icon="fas fa-right-from-bracket"
      title="Sair"
      rounded="te-xl be-xl"
      @click.prevent="userStore.signOut"
    />
  </v-list>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue'
import { RoutePath } from '@/enums/route'
import { useUserStore } from '@/stores/user'
import { Permission } from '@/enums/permission'

const selected = ref<string[]>([])
const opened = ref<string[]>([])
const userStore = useUserStore()

const hasUser = computed(() => Object.keys(userStore.user).length > 0)
const getPermission = (permission: Permission) => hasUser.value ? userStore.user.permissions.includes(permission) : false
const hasPermissionFeeQueue = computed(() => getPermission(Permission.FeeQueue)) 

const ListItems = ref([
    {
        value: 'credit-queue',
        title: 'Fila de Crédito',
        icon: 'fas fa-list-check',
        to: RoutePath.CreditQueue,
        hasPermission: true
    },
    {
        value: 'fee-queue',
        title: 'Fila de Taxa',
        icon: 'fas fa-list-check',
        to: RoutePath.FeeQueue,
        hasPermission: hasPermissionFeeQueue
    },
    {
        value: 'account',
        title: 'Conta',
        icon: 'fas fa-gear',
        to: RoutePath.Account,
        hasPermission: true
    }
])

</script>
