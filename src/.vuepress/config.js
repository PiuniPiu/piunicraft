const { description } = require('../../package')

module.exports = {
  title: 'PiuniCraft',
  base: '/',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/'
      },
      {
        text: 'Normas',
        link: '/normas/'
      },
      {
        text: 'Modificaciones',
        link: '/mods/',
      }
    ],
  },
  theme: 'antdocs'

}
