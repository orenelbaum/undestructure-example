import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { undestructurePlugin } from "babel-plugin-solid-undestructure"

export default defineConfig({
  plugins: [
    // Remove the following line if you are using vanilla-js
    ...undestructurePlugin("ts"),
    solidPlugin({
      // If you are using vanilla-js, uncomment the following line
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
