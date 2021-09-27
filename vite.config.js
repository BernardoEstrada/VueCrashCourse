import vue from '@vitejs/plugin-vue'

export default {
  process.env.NODE_ENV === 'production'
    ? '/vue-crash-course/'
    : '/'
  plugins: [
    vue()
  ],
}
