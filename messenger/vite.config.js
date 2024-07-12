import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './static/index.html',
      },
    },
  },
  plugins: [
    handlebars({
        partialDirectory: ['./src/partials', './src/components'],
    })
  ],
  server: {
    open: './static/index.html',
    port: 3000,
  },
});