import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // compression({
    //   algorithm: 'brotliCompress',
    //   ext: '.br',
    // }),
    compression({
      verbose: true, // Muestra información de compresión en la consola
      disable: false, // Habilita la compresión
      threshold: 10240, // Archivos mayores a 10 KB serán comprimidos
      algorithm: 'gzip', // Algoritmo de compresión (gzip, brotliCompress, deflate, etc.)
      ext: '.gz', // Extensión de los archivos comprimidos generados
      compressionOptions: {
        level: 9, // Nivel máximo de compresión
      },
      deleteOriginFile: false, // Mantiene los archivos originales sin comprimir
      filter: /\.(js|css|html|svg|json|ico|png|jpg|jpeg|webp|avif)$/i, // Archivos a comprimir
    }),
    compression({
      algorithm: 'brotliCompress', // Generar también archivos Brotli
      ext: '.br', // Extensión de archivos Brotli
      threshold: 10240, // Mismo umbral para Brotli
      compressionOptions: {
        level: 11, // Nivel máximo de compresión para Brotli
      },
    }),
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
