import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      // GitHub Pages serves public/c/index.html for /c/; the dev server's SPA
      // fallback would serve the React app instead. Dev only.
      name: 'serve-c-route',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/c' || req.url?.startsWith('/c/?') || req.url === '/c/') {
            req.url = '/c/index.html' + (req.url.split('?')[1] !== undefined ? '?' + req.url.split('?')[1] : '');
          }
          next();
        });
      },
    },
    {
      name: 'generate-cname',
      closeBundle: () => {
        const cnameContent = 'geofastgames.com';
        const distDir = path.resolve(__dirname, 'dist');
        
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(distDir, 'CNAME'), cnameContent);
        console.log('✓ CNAME file generated');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base:"/",
  // Local attribution testing only (docs/projects/creator-attribution in
  // geofast_bmad): /c/ beacons same-origin off the live site, and this
  // forwards them to local Nakama. ATTRIBUTION_TUNNEL_HOST is the HTTPS
  // tunnel hostname a phone reaches the dev server through.
  server: {
    proxy: {
      "/attribution": process.env.ATTRIBUTION_PROXY_TARGET || "http://127.0.0.1:7350",
    },
    allowedHosts: process.env.ATTRIBUTION_TUNNEL_HOST ? [process.env.ATTRIBUTION_TUNNEL_HOST] : [],
  },
});
