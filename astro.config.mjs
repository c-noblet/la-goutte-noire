// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://goutte-noire.cn-8-77.net",
    base: "/",
    integrations: [alpinejs(), playformInline({
        Beasties: true,
        }), mdx(), react()],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': new URL('./src', import.meta.url).pathname,
            },
        },
    },
});