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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/IterateFast-Labs/fission-docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/IterateFast-Labs/fission-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'image/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Fission',
      logo: {
        alt: 'Fission Logo',
        src: 'image/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'light-paper',
          position: 'left',
          label: 'Litepaper',
        },
        {
          type: 'docSidebar',
          sidebarId: 'usersSidebar',
          position: 'left',
          label: 'Users',
        },
        {
          type: 'docSidebar',
          sidebarId: 'fissionResearchSidebar',
          position: 'left',
          label: 'Fission Research',
        },
        {
          type: 'doc',
          docId: 'tay-intro',
          position: 'left',
          label: 'Introducing Tay',
        },
        {
          href: 'https://github.com/IterateFast-Labs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Hub',
              href: 'https://hub.xyz/fission',
            },
            {
              label: 'X',
              href: 'https://x.com/fission_web3',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/XFWtmDDf8s',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/fission_official',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/IterateFast-Labs',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iterate Fast Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [tailwindPlugin],
};

export default config;
