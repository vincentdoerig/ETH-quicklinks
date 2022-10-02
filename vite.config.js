import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue()],
  base: process.env.BASE,
}
