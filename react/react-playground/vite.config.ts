import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    Pages({
      dirs: [
        {
          dir: "src/pages",
          baseRoute: "/",
          filePattern: "**/*",
        },
      ],
    }),
  ],
})
