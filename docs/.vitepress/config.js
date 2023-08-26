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
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Normativa', link: '/rules' },
      { text: 'Plugins', link: '/mods/' }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/piunicraft' }
    ]
  }
})
