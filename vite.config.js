import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default () =>{
  return defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          intro: resolve(__dirname, '1-intro/index.html'),
          formValidation: resolve(__dirname, '2-form-validation/index.html'),
          pokemon: resolve(__dirname, '3-pokemon/index.html'),
          composition: resolve(__dirname, '4-composition/index.html'),
          microblog: resolve(__dirname, '5-microblog/index.html'),
          router: resolve(__dirname, '6-router/index.html'),
          routerOptions: resolve(__dirname, '6-router-options/index.html'),
        },
        external: false,
      }
    },
    plugins: [
      vue()
    ],
  })
}
