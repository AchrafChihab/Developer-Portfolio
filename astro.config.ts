import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import serviceWorker from 'astrojs-service-worker';
import { siteConfig } from './src/config/site';
import { defineConfig } from 'vite';

const { name, backgroundColor, themeColor, url } = siteConfig;

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
      },
    },
  },
  site: url,
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  prefetch: true,
  // Supprimé "experimental" car il ne semble pas nécessaire
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    serviceWorker(),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name,
      short_name: name,
      background_color: backgroundColor,
      theme_color: themeColor,
      display: 'standalone',
      prefer_related_applications: true,
      start_url: '/',
      icon: './public/favicon.svg',
      config: {
        outfile: 'site.webmanifest',
        iconPurpose: ['any', 'maskable'],
        insertAppleTouchLinks: true,
      },
    }),
  ],
});
