import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/hockey-website-tailwind-daisy/",
  plugins: [tailwindcss()],
});
