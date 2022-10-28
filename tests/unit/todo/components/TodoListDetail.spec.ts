import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListDetail from '@/components/todo/TodoListDetail.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { ComponentPublicInstance } from 'vue'
import { describe, expect, it, beforeEach } from 'vitest'

const fakeTodo = {
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
}

describe('TodoListDetail.vue', () => {
  let wrapper: ComponentPublicInstance<any>
  const vuetify = createVuetify({ components, directives })
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todo = fakeTodo

  it('Should display todo title', () => {
    wrapper = mount(TodoListDetail, {
      global: {
        plugins: [pinia, vuetify]
      }
    })

    const todoTitle = wrapper.find('[data-testid="todo-detail-title"]')
    const title = todoTitle.text()
    expect(title).toContain(fakeTodo.title)
  })
})
