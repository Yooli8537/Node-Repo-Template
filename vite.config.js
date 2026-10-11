export default {
  root: "client",
  publicDir: "static",
  build: {
    outDir: "/src",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:8501", // Make sure this port matches the one in server.js
    },
    port: 8500,
  },
};
