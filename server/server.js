const fs = require("fs");
const express = require("express");
const app = express();
const port = 8501; // If you change the port, make sure to also change it in the vite.config.js

const GLOBAL = require("./utils/global.util");

const userDataFolders = [
  { name: "Logs", path: GLOBAL.PATHS.FOLDERS.LOGS },
  { name: "Data", path: GLOBAL.PATHS.FOLDERS.DATA },
];

// Every property and default value which should be in master.json.
const allMasterProperties = {
  version: "TEMPLATE",
};

// Creates any missing data folders.
for (let i = 0; i < userDataFolders.length; i++) {
  if (!fs.existsSync(userDataFolders[i].path)) {
    fs.mkdirSync(userDataFolders[i].path);
  }
}

// Master.json to store config across sessions
if (!fs.existsSync(GLOBAL.PATHS.FILES.MASTER)) {
  try {
    const masterContent = `[${JSON.stringify(allMasterProperties)}]`;
    fs.writeFileSync(GLOBAL.PATHS.FILES.MASTER, masterContent, "utf-8");
  } catch (err) {
    log.logger.error("Server setup: Failed to create master.json.");
  }
}

const log = require(GLOBAL.PATHS.UTILS.LOGGER);

app.listen(port, () => {
  log.info("Startup", `Backend listening on port ${port}`);
});
