import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
        icon: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@templates": path.resolve(__dirname, "src/components/templates"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@context": path.resolve(__dirname, "src/logic/context"),
      "@hooks": path.resolve(__dirname, "src/logic/hooks"),
      "@utils": path.resolve(__dirname, "src/logic/utils"),
      "@store": path.resolve(__dirname, "src/logic/store"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
