import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    rollupOptions: {
        input: {
            index: resolve(__dirname, './src/index.html'),
            register: resolve(__dirname, './src/pages/Register/RegisterPage.html'),
            login: resolve(__dirname, './src/pages/Login/loginPage.html'),
            404: resolve(__dirname, './src/pages/Error/404/404.html'),
            500: resolve(__dirname, './src/pages/Error/500/500.html'),
            profile: resolve(__dirname, './src/pages/Profile/ProfileData/ProfilePage.html'),
            profileEditData: resolve(__dirname, './src/pages/Profile/EditData/EditDataPage.html'),
            profileChangePassword: resolve(__dirname, './src/pages/Profile/ChangePassword/ChangePassword.html'),
            chat: resolve(__dirname, './src/pages/Chat/ChatPage.html'),
        },
    },
},
  plugins: [
    handlebars({
        partialDirectory: ['./src/partials', './src/components'],
    })
  ],
  server: {
    open: '/src/index.html',
    port: 3000,
  },
})
