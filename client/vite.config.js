import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{ //each time address starts with /api use this at beginning 
        target:'http://localhost:3000/',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
