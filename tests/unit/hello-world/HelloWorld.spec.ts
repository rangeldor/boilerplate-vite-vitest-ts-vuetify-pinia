import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'
import { ComponentPublicInstance } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

describe('App.vue', () => {
  let wrapper: ComponentPublicInstance<any>
  const vuetify = createVuetify({ components, directives })

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify]
      }
    })
  })

  // afterEach(() => {
  //     wrapper?.unmount()
  //   })

  it('should mount', async () => {
    const helloTitle = wrapper.find('[data-testid="hello-title"]')
    expect(helloTitle.text()).toContain('Welcome to Vuetify 3 Beta 15')

    const helloCreateTitle = wrapper.find('[data-testid="hello-create-title"]').get('input')
    await helloCreateTitle.setValue('teste 1')
    expect(helloCreateTitle.element.value).toContain('teste 1')

    console.log({ 'test-title': wrapper.vm.title })
    // router.push({ name: 'home' })
    // await router.isReady()

    // expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })
})
