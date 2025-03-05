import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Solana Beach API",
  description: "Solana Beach Backend REST API documentation.",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Website', link: 'https://solanabeach.io' }
    ],

    sidebar: [
      {
        text: 'API',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Block Data', link: '/block-data' },
          { text: 'Dashboard Data', link: '/dashboard-data' },
          { text: 'Transaction Data', link: '/transaction-data' },
          { text: 'Validator Data', link: '/validator-data' },
          { text: 'Validators Data', link: '/validators-data' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/solana-beach/api' },
      { icon: 'twitter', link: 'https://x.com/solanabeach_io' }
    ]
  }
})
