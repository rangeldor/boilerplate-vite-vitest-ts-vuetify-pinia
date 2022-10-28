<template>
  <v-app>
    <v-main>
      <h1 class="text-primary">
      Todo List - JSON Placeholder
    </h1>
    <TodoList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/todo/TodoList.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    TodoList
},

  data () {
    return {
      //
    }
  },
})
</script>
