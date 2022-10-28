import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListItem from '@/components/todo/TodoListItem.vue'
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

describe('TodoListItem.vue', () => {
  let wrapper: ComponentPublicInstance<any>
  const vuetify = createVuetify({ components, directives })
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todo = fakeTodo

  it('Should get todo title', () => {
    wrapper = mount(TodoListItem, {
      global: {
        plugins: [pinia, vuetify]
      },
      props: {
        todoItem: fakeTodo
      }
    })

    const todoTitle = wrapper.find('[data-testid="todo-title"]')
    const title = todoTitle.text()
    expect(title).toContain(fakeTodo.title)
  })

  it('Should set todo on todoStore', () => {
    const wrapper = mount(TodoListItem, {
      global: {
        plugins: [pinia, vuetify]
      },
      props: {
        todoItem: fakeTodo
      }
    })

    const detailButton = wrapper.find('[data-testid="todo-detail-button"]')
    detailButton.trigger('click')

    expect(useTodo.todo).toEqual(fakeTodo)
    expect(useTodo.openDetailDialog).toBe(true)
  })
})
