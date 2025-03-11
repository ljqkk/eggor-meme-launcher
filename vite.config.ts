// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
    }),
    // 必须放在 vue() 之前
    VueRouter({
      routesFolder: './src/pages',
      dts: './src/typed-router.d.ts',
    }),
    vue(),
  ],
});
