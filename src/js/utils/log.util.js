export const logTypes = {
  action: "Action",
  process: "Process",
  settings: "Settings",
  call: "Call",
  info: "Info",
};

// level = 0 -> log / 1 -> warning / 2 -> error
export function log(level, type, operation, message) {
  if (level === 2) {
    console.error(`${operation}: ${message}`);
  } else if (level === 1) {
    console.warn(`${operation}: ${message}`);
  } else {
    console.log(`${operation}: ${message}`);
  }
}
