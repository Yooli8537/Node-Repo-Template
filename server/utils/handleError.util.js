const GLOBAL = require("./global.util");

function handleError(caughtErr, res, operation, errMsg, requestValues) {
  if (caughtErr.code === "ENOENT") {
    res.status(404).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EACCES" || caughtErr.code === "EPERM" || caughtErr.code === "EROFS") {
    res.status(403).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EEXIST" || caughtErr.code === "ENOTEMPTY" || caughtErr.code === "EBUSY") {
    res.status(409).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EISDIR" || caughtErr.code === "ENOTDIR" || caughtErr.code === "EINVAL") {
    res.status(400).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "ENOSPC") {
    res.status(507).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EMFILE" || caughtErr.code === "ENFILE") {
    res.status(503).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EIO" || caughtErr.code === "ENOMEM") {
    res.status(500).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EFBIG") {
    res.status(413).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else if (caughtErr.code === "EAGAIN") {
    res.status(503).json({ operation: operation, message: errMsg, requestValues: requestValues });
  } else {
    res.status(500).json({ operation: operation, message: errMsg, requestValues: requestValues });
  }
}

module.exports = handleError;
