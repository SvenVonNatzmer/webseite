// https://nuxt.com/docs/api/configuration/nuxt-config
// devtools: { enabled: true }

// Quelle Authentifikation:https://github.com/CodyBontecou/Nuxt-Auth-Tutorial/blob/lesson-2/nuxt.config.ts
// 


export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  app: {
    head: {
      title: 'Mein Shop',
      meta: [
        { name: 'description', content: 'Tolle Dinge bei uns' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' }
      ]
    }
  },

  compatibilityDate: '2024-11-05'
}) 

  