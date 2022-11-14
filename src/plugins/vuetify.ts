import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'
import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
      md,
      mdiSvg
    }
  },
  theme: {
    dark: true,
    themes: {
      light: {
        colors: {
          background: '#F7F7F7',
          surface: '#F7F7F7',
          primary: '#E35205',
          secondary: '#FDEEE6',
          tertiary: '#000000',
          accent: '#041E42'
        }
      },
      dark: {
        colors: {
          background: '#2D2926',
          surface: '#0C0B0A',
          primary: '#E35205',
          secondary: '#53565A',
          tertiary: '#000000',
          accent: '#0C0B0A'
        }
      }
    }
  }
})
