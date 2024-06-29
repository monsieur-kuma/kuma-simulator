import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.REACT_APP_STAGE === 'development' ? '' : '/HSR-Simulator/',
  define: {
    'import.meta.env.REACT_APP_STAGE': JSON.stringify(process.env.REACT_APP_STAGE),
  },
})
