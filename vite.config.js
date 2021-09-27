import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default () =>{
  return defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          // intro: resolve(__dirname, '1-intro/index.html'),
          formValidation: resolve(__dirname, '2-form-validation/index.html'),
        }
      }
    },
    plugins: [
      vue()
    ],
  })
}
