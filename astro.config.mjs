import alpinejs from "@astrojs/alpinejs";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
});
