import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { undestructurePlugin } from "babel-plugin-solid-undestructure"

export default defineConfig({
  plugins: [
    ...undestructurePlugin("ts"),
    solidPlugin({
      // babel: {
      //   plugins: [undestructurePlugin("vanilla-js")]
      // } 
    })
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
