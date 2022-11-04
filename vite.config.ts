import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(() => {
	const env = { ...process.env }

	return {
		define: {
			'process.env': env
		},
		plugins: [
			vue(),
			vuetify({
				autoImport: true
			}),
			eslint()
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			}
		},
		server: {
			host: 'localhost',
			port: 8080
		}
	}
})
