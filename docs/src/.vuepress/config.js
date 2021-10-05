const { description } = require('../../package')

module.exports = {
  title: 'AoiiMipMC',
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
        text: 'Modos de Juego',
        link: '/gamemodes/',
      },
      {
        text: 'Plugins',
        link: '/plugins/'
      },
      {
        text: 'Datapacks',
        link: '/datapacks/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
  theme: 'antdocs'

}
