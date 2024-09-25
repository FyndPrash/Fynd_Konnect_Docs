// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fynd API Documentation',
  tagline: "Comprehensive resources for integrating with Fynd's powerful API.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
({
  // Other configurations...
  colorMode: {
    disableSwitch: true, // Prevents the toggle from being shown
    defaultMode: 'light', // Set to your desired default mode
  },
  navbar: {
    style: 'dark',
    logo: { alt: 'My Site Logo', src: 'img/image.png' },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'marketplaceSidebar',  // Link to the marketplace sidebar
        position: 'left',
        label: 'Marketplace',
      },
      {
        type: 'docSidebar',
        sidebarId: 'supplySidebar',  // Link to the supply sidebar
        position: 'left',
        label: 'Supply',
      },
      { to: '/docs/blogs', label: 'Blogs', position: 'left' },
      { to: '/docs/faqs', label: 'FAQs', position: 'left' },
    ],


  },
      
      footer: {
        style: 'light',
        links: [
          {
            title: 'Company',
            items: [
              { label: 'About Us', to: '/about-us' },
              { label: 'Press', to: '/press' },
              { label: 'Terms of Service', to: '/terms-of-service' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'API License Terms', to: '/api-license-terms' },
            ],
          },
          {
            title: 'Product & Services',
            items: [
              { label: 'Features', to: '/features' },
              { label: 'Website Management', to: '/website-management' },
              { label: 'SEO', to: '/seo' },
              { label: 'StoreOS', to: '/storeos' },
              { label: 'Extensions', to: '/extensions' },
              { label: 'Fynd for Startups', to: '/fynd-for-startups' },
              { label: 'Project Visionary', to: '/project-visionary' },
              { label: 'Project Updates', to: '/project-updates' },
            ],
          },
          {
            title: 'Partners Community',
            items: [
              { label: 'Fynd Platform Partners', to: '/fynd-platform-partners' },
              { label: 'Partners Documentation', to: '/partners-documentation' },
            ],
          },
          {
            title: 'Customers',
            items: [
              { label: 'Brands on Fynd Platform', to: '/brands-on-fynd-platform' },
              { label: 'Testimonials', to: '/testimonials' },
              { label: 'FAQs', to: '/faqs' },
              { label: 'Learn', to: '/learn' },
            ],
          },
          {
            title: 'Follow',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Sell Online', to: '/sell-online' },
              { label: 'Release Note', to: '/release-note' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Instagram', href: 'https://instagram.com' },
              { label: 'Facebook', href: 'https://facebook.com' },
              { label: 'YouTube', href: 'https://youtube.com' },
              { label: 'X (Twitter)', href: 'https://twitter.com' },
              { label: 'Quora', href: 'https://quora.com' },
            ],
          },
          {
            title: 'Get Started Now',
            items: [
              { label: 'Login', to: '/login' },
              { label: 'Sign Up', to: '/sign-up' },
              { label: 'Book a Demo', to: '/book-a-demo' },
            ],
          },
        ],
        copyright: `#MadeInIndia © 2022 Shopsense Retail Technologies`, },
      


      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
