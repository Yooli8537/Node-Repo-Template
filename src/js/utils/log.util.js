export const logTypes = {
  action: "Action",
  process: "Process",
  settings: "Settings",
  call: "Call",
  info: "Info",
};

// level = 0 -> log / 1 -> warning / 2 -> error
export function log(level, type, message) {
  if (level === 2) {
    console.error(message);
  } else if (level === 1) {
    console.warn(message);
  } else {
    console.log(message);
  }
}
