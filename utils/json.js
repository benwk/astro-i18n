export function flattenObject(obj, prefix = "") {
  let flatObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && !Array.isArray(value)) {
      flatObject = { ...flatObject, ...flattenObject(value, newKey) };
    } else {
      flatObject[newKey] = value;
    }
  }

  return flatObject;
}
