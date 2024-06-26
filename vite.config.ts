import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/webservice': {
        target: 'http://localhost:8200/webservice/rest/server.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/webservice/, ''),
      }
    }
  }
})
