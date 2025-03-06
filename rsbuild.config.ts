// rsbuild.config.ts
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';

export default {
  plugins: [
    pluginTailwindCSS({
      config: './config/tailwind.config.js',
    }),
  ],
};
