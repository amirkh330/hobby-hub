import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "https://jourchin.com",
          changeOrigin: true,
          secure: true, // Ensures HTTPS connection
          cookieDomainRewrite: "localhost", // Rewrites cookies for localhost
         // rewrite: path => path.replace(/^\/api/, ''),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              // Optional: Log headers to debug
              console.log("Request Headers:", proxyReq.path);
            });
          },
        },
      },
    },
    preview: {
      port: 3000,
    },
  };
});
