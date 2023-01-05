import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(({ mode }) => {
	const env = { ...process.env, ...loadEnv(mode, process.cwd()) }

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
		base: './',
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/scss/main.scss";`
				}
			}
		},
		server: {
			host: 'localhost',
			port: 8080
		}
	}
})
