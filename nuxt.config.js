// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // <--- Turn off folder-based naming
    },
  ],
})
