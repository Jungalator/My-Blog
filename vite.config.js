import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "/My-Blog/",
  plugins: [
    handlebars({
      partialDirectory: "src/partials",
    }),
  ],
  build: {
    target: "es2015",
  },
});
