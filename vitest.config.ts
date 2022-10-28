import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(() => {
    return {
        plugins: [
			vue(),
			vuetify({ autoImport: true }),
		],
        test: {
            globals: true,
            environment: 'happy-dom',
            setupFiles: "vuetify.config.js",
            deps: {
                inline: ["vuetify"]
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        root: '.', //Define the root
    }
});

