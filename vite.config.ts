import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.REACT_APP_STAGE === 'development' ? '' : '/HSR-Simulator/',
  define: {
    'import.meta.env.REACT_APP_STAGE': JSON.stringify(
      process.env.REACT_APP_STAGE,
    ),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
