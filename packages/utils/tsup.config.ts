import { defineConfig } from 'tsup'
import { resolve } from 'node:path'


export default defineConfig(
  {
    format: ['cjs'],
    target: 'esnext',
    dts: true,
    minify: true,
    sourcemap: true,
    clean: true,
    entry: [resolve(__dirname, 'src/index.ts')],
    outDir: resolve(__dirname, 'dist'),
  },

)
