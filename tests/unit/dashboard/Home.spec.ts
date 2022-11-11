import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Home from '@/pages/dashboard/Home.vue'
import { ComponentPublicInstance } from 'vue'
import { describe, expect, it } from 'vitest'

const titleMock = 'Home page'

describe('Home.vue', () => {
    let wrapper: ComponentPublicInstance<any>
    const vuetify = createVuetify({ components, directives })

    it('Should get home title', () => {
        wrapper = mount(Home, {
            global: {
                plugins: [vuetify]
            }
        })

        const title = wrapper.find('[data-testid="home-title"]').text()
        expect(title).toBe(titleMock)
    })
})