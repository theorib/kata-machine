import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    clearMocks: true,
    include: ['src/__tests__/**/*.ts'],
  },
  resolve: {
    alias: {
      '@code': resolve(__dirname, './src/day10'),
    },
  },
})