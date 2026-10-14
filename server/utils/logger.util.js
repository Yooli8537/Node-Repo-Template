// Setting up Pino logger
const pino = require("pino");
const path = require("path");

const GLOBAL = require("./global.util");

// Gets date and time of server start.
const currentdate = new Date();
let year = currentdate.getFullYear();
let month = currentdate.getMonth() + 1;
let day = currentdate.getDate();
let hour = currentdate.getHours();
let minutes = currentdate.getMinutes();
let seconds = currentdate.getSeconds();

// Adding a 0 whenever there's no
if (month < 10) {
  month = `0${month}`;
}
if (day < 10) {
  day = `0${day}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (seconds < 10) {
  seconds = `0${seconds}`;
}

const logPath = path.join(GLOBAL.PATHS.FOLDERS.LOGS, `${year}-${month}-${day}-${hour}-${minutes}-${seconds}.log`);

const logger = pino(
  pino.transport({
    targets: [
      {
        target: "pino-pretty",
        options: {
          destination: logPath,
          colorize: false,
          translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
          ignore: "pid,hostname",
          levelFirst: false,
        },
      },
      {
        target: "pino-pretty",
        options: {
          destination: 1, // Console
          colorize: true,
          translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
          ignore: "pid,hostname",
          levelFirst: false,
        },
      },
    ],
  }),
);

function info(operation, message, requestValues) {
  if (!requestValues) {
    logger.info(`${operation}: ${message}`);
  } else {
    logger.info(requestValues, `${operation}: ${message}`);
  }
}

// For settings
function process(operation, message, requestValues) {
  if (!requestValues) {
    logger.info(`${operation}: ${message}`);
  } else {
    logger.info(requestValues, `${operation}: ${message}`);
  }
}

function success(operation, message, requestValues) {
  if (!requestValues) {
    logger.info(`${operation}: ${message}`);
  } else {
    logger.info(requestValues, `${operation}: ${message}`);
  }
}

function warn(operation, message, requestValues) {
  if (!requestValues) {
    logger.warn(`${operation}: ${message}`);
  } else {
    logger.warn(requestValues, `${operation}: ${message}`);
  }
}

module.exports = { info, process, success, warn, logger };
