import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server: {
      host: '127.0.0.1', 
  },
  plugins: [
    react(),
    federation({
      name: 'login-remote',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginPage': './src/LoginPage',
      },
      shared: ['react', 'react-dom'],
    }),
    {
      name: 'vite-plugin-notify-host-on-rebuild',
      apply(config, { command }) {
        return Boolean(command === 'build' && config.build?.watch);
      },
      async buildEnd(error) {
        if(!error) {
          try {
            await fetch('http://localhost:5000/__fullReload');
          } catch (e) {
            console.error('Error notifying host:', e);
          }
        }
      }
    }
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
