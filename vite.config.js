import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

// This is used for deploying to a project
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/my-project/'
//     : '/'
// }
