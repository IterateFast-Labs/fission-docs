import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

import { tailwindPlugin } from './plugins/tailwind-config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fission',
  tagline:
    'Web3-powered, decentralized AI data ecosystem. Transparent ownership, token-based incentives, & AI-driven data labeling + monetization',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.fission.lol',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IterateFast-Labs', // Usually your GitHub org/user name.
  projectName: 'fission', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IterateFast-Labs/fission-docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'throw',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'landing-img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },

    navbar: {
      title: 'Fission',
      logo: {
        alt: 'Fission Logo',
        src: 'landing-img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'litepaper',
          position: 'left',
          label: 'Litepaper',
        },
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Research',
        },
        {
          type: 'doc',
          docId: 'tay-intro',
          position: 'left',
          label: 'Tay',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },

        {
          type: 'doc',
          docId: 'official-link',
          label: '🔗 Links',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Iterate Fast Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-NSZNR1DBQX',
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;
