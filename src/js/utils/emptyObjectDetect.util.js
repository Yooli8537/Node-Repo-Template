export function isObjectEmpty(object) {
  for (const prop in object) {
    if (Object.hasOwn(object, prop)) {
      return false;
    }
  }
  return true;
}