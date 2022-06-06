import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = "mbos/store/21263609/resalary"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir:"/mbos/store/21263609/resalary/",
  // chunk 大小警告的限制
  chunkSizeWarningLimit: 1000,
  build:{
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: `${path}/mySalary.[name].js`,
        chunkFileNames: `${path}/mySalary.[name].js`,
        assetFileNames: `${path}/mySalary.[name].js`,
        manualChunks(id, { getModuleInfo }) {
          if (id.includes('node_modules') || id.includes('plugin-vue')) {
            return 'vendor'; //代码分割为第三方包
          }
        },
      },
    },
  },
})
