import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://chat-app-mern-okoz.onrender.com",
				changeOrigin: true, // Fixes origin issues
				secure: false, // Disables SSL certificate verification
			},
		},
	},
});
