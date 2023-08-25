import { defineConfig } from 'vitepress'

export default defineConfig({
  // Configuración base de la web
  base: '/piunicraft',
  lang: 'es-ES',
  srcDir: './src',
  outDir: './build',
  assetsDir: './static',

  // Configuración de la web (template)
  titleTemplate: ':title | PiuniCraft',
  title: "PiuniCraft Docs",
  description: "Documentación oficial del server de subs de Piuni",

  // Configuración del "Tema"
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
