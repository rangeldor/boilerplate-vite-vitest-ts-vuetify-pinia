import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListCreate from '@/components/todo/TodoListCreate.vue'
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

describe('TodoListCreate.vue', () => {
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  let wrapper: ComponentPublicInstance<any>
  const vuetify = createVuetify({ components, directives })

  it('Should create todo', async () => {
    wrapper = mount(TodoListCreate, {
      global: {
        plugins: [pinia, vuetify]
      }
    })

    const title = wrapper.find('[data-testid="todo-create-title"]').get('input')
    await title.setValue(fakeTodo.title)
    expect(title.element.value).toBe(fakeTodo.title)

    const completed = wrapper.find('[data-testid="todo-create-completed"]').get('input')
    await completed.setChecked()
    expect(completed.element.checked).toBeTruthy()
    await wrapper.find('form').trigger('submit.prevent')
    console.log(wrapper.vm.todoForm)
    
    // expect(useTodo.create()).toHaveBeenCalled()
  })
})
