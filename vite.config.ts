import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

import Pages from 'vite-plugin-pages'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
})
