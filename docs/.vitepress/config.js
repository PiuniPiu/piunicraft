import { defineConfig } from 'vitepress'

export default defineConfig({
  // Configuración base de la web
  base: '/piunicraft/',
  lang: 'es-ES',
  srcDir: './src',
  outDir: './build',
  assetsDir: 'static',
  publicDir: 'public',

  // Configuración de la web (template)
  titleTemplate: ':title | PiuniCraft',
  title: "PiuniCraft Docs",
  description: "Documentación oficial del server de subs de Piuni",

  // Configuración del "Tema"
  themeConfig: {

    // Añadimos la búsqueda en la web
    search: {
      provider: 'local'
    },

    // Añadimos el menú de navegación
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Normativa', link: '/rules' },
      { text: 'Plugins', link: '/mods/' }
    ],

    // Añadimos el link de nuestro Twitter
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/piunicraft' }
    ]
  }
})
