import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), ],
  output: "server",
  adapter: vercel(
    {
       imageService: true,
    }
  ),
});
