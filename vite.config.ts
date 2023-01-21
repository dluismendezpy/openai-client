import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: "",
			},
			{
				find: "@",
				replacement: path.resolve(__dirname, "src"),
			},
		],
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 3000,
	},
});
