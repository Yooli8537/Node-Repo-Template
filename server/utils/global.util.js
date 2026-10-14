// Global variables for the server
const path = require("path");

// Paths
// Folders
const rootPath = path.join(__dirname, "../../");
const serverPath = path.join(rootPath, "server");
const routesPath = path.join(serverPath, "routes");
const utilsPath = path.join(serverPath, "utils");
const logsPath = path.join(rootPath, "logs");
const dataPath = path.join(rootPath, "data");
// Server Routes
const exampleRoutePath = path.join(routesPath, "example.route.js");
// Utils
const loggerPath = path.join(utilsPath, "logger.util.js");
const validatePathPath = path.join(utilsPath, "validatePath.util.js");
// Files
const masterFilePath = path.join(dataPath, "master.json");

const GLOBAL = {
  PATHS: {
    FILES: {
      MASTER: masterFilePath,
    },
    FOLDERS: {
      SERVER: serverPath,
      ROUTES: routesPath,
      UTILS: utilsPath,
      LOGS: logsPath,
      DATA: dataPath,
    },
    ROUTES: {
      EXAMPLE: exampleRoutePath,
    },
    UTILS: {
      LOGGER: loggerPath,
      VALIDATEPATH: validatePathPath,
    },
  },
};

module.exports = GLOBAL;
