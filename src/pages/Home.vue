<template>
    <div>
      <h1 class="text-primary">
      Todo List - JSON Placeholder
    </h1>
    <TodoList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from '@/components/todo/TodoList.vue'

export default defineComponent({
  name: 'Home',

  components: {
    TodoList
},

  data () {
    return {
      //
    }
  },
})
</script>

<style scoped>

</style>