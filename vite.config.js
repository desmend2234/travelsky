import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    publicPath: '/react-redux-project/',
    plugins: [react()],
    data() {
        return {
            apiUrl: import.meta.env.VITE_API_URL, // 使用設定的環境變數
        }
    },
})
