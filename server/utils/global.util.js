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
const loggerPath = path.join(utilsPath, logger.js);

const GLOBAL = {
  PATHS: {
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
    },
  },
};

module.exports = GLOBAL;
