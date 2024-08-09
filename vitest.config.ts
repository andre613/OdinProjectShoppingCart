import {defineConfig, mergeConfig, ConfigEnv } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      environmentMatchGlobs: [
        ['**/__tests__/**', 'jsdom']
      ]
    }
  })
));