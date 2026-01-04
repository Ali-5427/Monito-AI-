// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    plugins: [

    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/integrations': path.resolve(__dirname, './integrations'),
        '@/lib': path.resolve(__dirname, './src/lib'),
      },
    },
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    allowedHosts: true,
    host: true,
  },
});
