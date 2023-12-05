/* Auth: Jay Annadurai            */
/* Proj: N320: Vue - Teams        */
/* Date: 28 November 2023         */
/* Desc: Vue Configuration File   */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '~jayannad/N320-Vue/HW/7-vue-teams/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
