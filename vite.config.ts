import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths() // الإضافة دي هتربط الـ الـ الـ aliases بتاعة الـ tsconfig بـ Vite علطول
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // السطور دي بتجبر فيت يسمي الملفات بـ .js صريحة عشان جيتهب ميتلغبطش في الـ MIME type
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})