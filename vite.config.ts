import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import path from 'path'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  // TODO： presetAttributify没有生效
  plugins: [react(), Pages(), Unocss({ presets: [presetUno(), presetAttributify({})] })],
})
