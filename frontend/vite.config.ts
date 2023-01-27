import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(), 
		tsconfigPaths()
	],
	build: {
		outDir: 'build'
	},
	server: {
		host: 'localhost',
		port: 5173,
		hmr: {
			host: 'localhost',
			clientPort: 80
		}
	},
})