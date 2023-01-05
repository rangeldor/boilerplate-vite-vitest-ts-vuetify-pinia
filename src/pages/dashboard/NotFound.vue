<template>
  <div>
    <h1>Página não encontrada</h1>
    <p>
      Oops, Não foi possível encontrar essa página.
      <router-link :to="RoutePath.CreditQueue">
        Retornar a Página inicial
      </router-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { RoutePath } from '@/enums/route'

</script>