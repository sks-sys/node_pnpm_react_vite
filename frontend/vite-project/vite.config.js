import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Make the server accessible from outside the container
    proxy: {
      '/api': {
        target: 'http://backend:3000', // Ensure this matches your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
