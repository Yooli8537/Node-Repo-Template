export default {
  root: "src",
  publicDir: false,
  server: {
    port: 8500,
    proxy: {
      "/api": "http://localhost:8501", // Make sure this port matches the one in server.js
    },
    fs: {
      strict: true,
      allow: ["."],
    },
  },
};
