import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md2vue from './plugins/md2vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        md2vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
