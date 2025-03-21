import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 如果使用 Vue

export default defineConfig({
  plugins: [vue()], // 如果使用 Vue
  build: {
    outDir: 'dist', // 指定输出目录为 dist
  },
});