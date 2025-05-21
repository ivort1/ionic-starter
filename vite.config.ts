/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base URL — your mobile app will be served from /app/
  base: '/app/',
  plugins: [
    react(),
    legacy()
  ],
  resolve: {
    alias: {
      "@photos": path.resolve(__dirname, "assets/photos")
    }
  },
  build: {
    // Output everything to the "dist" folder
    outDir: 'dist',
    // Place generated assets inside an "assets" folder (no extra "app/")
    assetsDir: 'assets'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})