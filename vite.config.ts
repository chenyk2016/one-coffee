import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 将小于此阈值的导入或引用资源内联为base64编码
    assetsInlineLimit: 10000000,
    // CSS配置
    cssCodeSplit: false,
    // 关键配置：禁止提取CSS到单独文件
    // 自定义rollup构建配置
    rollupOptions: {
      
      output: {
        // 不要hash文件名
        entryFileNames: 'index.js',
        // 用于代码分割的块文件名
        chunkFileNames: '[name].js',
        // 资源文件名
        assetFileNames: '[name][extname]',
        // 手动排除要从bundle中提取的块
        manualChunks: () => 'index',
      },
    },
  },
})