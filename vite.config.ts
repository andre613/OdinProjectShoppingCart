import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig((_environment: ConfigEnv) => ({
  plugins: [react()]
}));