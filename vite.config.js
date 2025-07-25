import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/First-React-Project",
  plugins: [react({
    jsxRuntime: "automatic",
    include: "**/*.jsx",
  })],
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
});
