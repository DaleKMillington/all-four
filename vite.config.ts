import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import { defineConfig as defineVitestConfig } from 'vitest/config';

// Vite config with Vitest setup
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Enables globals like describe, it, etc.
    environment: 'jsdom',  // Use jsdom for testing in a browser-like environment
    setupFiles: './src/setupTests.ts',  // Optional setup for tests
  },
});