<template>
  <v-card width="100%">
    <v-card-header>
      <v-card-title>
        <h1 class="test__title--color">
          Todo Detalhes
        </h1>
      </v-card-title>
    </v-card-header>
    <v-card-text>
      <div class="d-flex justify-center align-start flex-column">
        <div>
          <strong>Id:</strong>
          <span class="ml-1">{{ todo.id }}</span>
        </div>
        <div>
          <strong>Título:</strong>
          <span
            class="ml-1"
            data-testid="todo-detail-title"
          >{{ todo.title }}</span>
        </div>
        <div>
          <strong>Completo?:</strong>
          <span class="ml-1">{{ todo.completed ? 'Sim' : 'Não' }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
// import { useTheme } from 'vuetify'

const { todo } = useTodoStore()
// const theme = useTheme()
// const color = theme.themes.value.light.colors.primary
</script>

<style lang="scss" scoped>
.test {
  &__title {
    &--color {
      color: rgb(var(--v-theme-primary));
    }
  }
}
</style>
