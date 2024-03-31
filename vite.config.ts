import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from "vite-plugin-node-polyfills";
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest:{
    name: "Coin Flip Bot",
    short_name: "CoinBot",
    description: "Bot with play on TONs",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/android-chrome-192x192.png",
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: "assets/android-chrome-512x512.png",
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})
export default defineConfig({
  plugins: [
    react(),    
    nodePolyfills({
    // To exclude specific polyfills, add them to this list.
    exclude: [
      'fs', // Excludes the polyfill for `fs` and `node:fs`.
    ],
    // Whether to polyfill specific globals.
    globals: {
      Buffer: true, // can also be 'build', 'dev', or false
      global: true,
      process: true,
    },
    // Whether to polyfill `node:` protocol imports.
    protocolImports: true,
  }),
  VitePWA({
    registerType: 'prompt',
    includeAssets: ["android-chrome-192x192.png", "android-chrome-512x512.png"],
    workbox: {
      clientsClaim: false,
      skipWaiting: false,
    },
    manifest: {
      icons: [
        {
          src: "/CoinFlipBot/assets/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "/CoinFlipBot/assets/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ],
      theme_color: "#9E89F3",
      name: "CoinBot",
      short_name: "CB",
      description: "Game bot",
      display: "fullscreen",
      scope: "/CoinFlipBot/",
      start_url: "/CoinFlipBot/",
      orientation: "portrait",
    }
  })
  ],
  base: "/CoinFlipBot/",
})
