import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages repo path
const repoName = '/Foodable-React-TypeScript/Foodable-React-TypeScript/';

export default defineConfig({
  plugins: [react()],
  base: repoName, // Important for GitHub Pages
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
