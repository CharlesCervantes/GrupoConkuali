import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "static", // Asegura que sea estático
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
