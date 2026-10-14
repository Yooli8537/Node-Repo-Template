const express = require("express");
const app = express();
const port = 8501; // If you change the port, make sure to also change it in the vite.config.js

const GLOBAL = require("./utils/global.util");

const log = require(GLOBAL.PATHS.UTILS.LOGGER);

app.listen(port, () => {
  log.info(`Backend listening on port ${port}`);
});
