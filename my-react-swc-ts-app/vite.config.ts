import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			// registerType: 'autoUpdate' 
			strategies: 'injectManifest',

			/**
			 * This is required when you want to create a custom service worker
			 * so you declare the srcDir, and the filename
			 */
			srcDir: 'src/custom-sw',
			filename: 'my-sw.ts',
		}
		)
	],
})