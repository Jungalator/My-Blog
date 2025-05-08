import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "/My-Blog/",
  plugins: [
    handlebars({
      partialDirectory: "src/partials",
    }),
  ],
  imagePath: "./public/images",
  svgSpritePath: "./public/favicon/sprites.svg",
});
