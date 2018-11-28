module.exports = {
  dest: './docs/.vuepress/dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Apostille Library',
      description: 'A novel & holistic blockchain notarization and timestamping with transferable, updatable, branded, and conjointly owned notarizations.'
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#34AADE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#34AADE' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'luxtagofficial/Apostille-library',
    docsRepo: 'luxtagofficial/Apostille-library-docs',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Apostille Whitepaper',
            link: 'https://www.nem.io/wp-content/themes/nem/files/ApostilleWhitePaper.pdf',
          },
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'digital-assets',
        'real-assets',
        'ownership',
        'transfer',
        'auditing',
        'examples',
        'advanced',
        'deprecated'
      ]
    }
  ]
}
