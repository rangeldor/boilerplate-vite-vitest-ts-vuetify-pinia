<template>
  <v-row>
    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'green'"
        :title="'Nova'"
        :quantity="2"
      />
    </v-col>

    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'blue-lighten-2'"
        :title="'Liberada Análise'"
        :quantity="2"
      />
    </v-col>

    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'yellow-darken-2'"
        :title="'Em Análise'"
        :quantity="2"
      />
    </v-col>

    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'pink-lighten-2'"
        :title="'Pendência'"
        :quantity="2"
      />
    </v-col>

    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'orange-darken-1'"
        :title="'Ret. Pendência'"
        :quantity="2"
      />
    </v-col>

    <v-col
      cols="12"
      lg="2"
      md="4"
      sm="6"
      xs="12"
    >
      <BaseButtonFilter
        :color="'teal-lighten-2'"
        :title="'Comitê'"
        :quantity="2"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import BaseButtonFilter from './BaseButtonFilter.vue'

</script>

