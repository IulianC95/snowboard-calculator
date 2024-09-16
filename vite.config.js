import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/snowboard-calculator/', // Înlocuiește cu numele repository-ului tău GitHub
  plugins: [react()],
});
