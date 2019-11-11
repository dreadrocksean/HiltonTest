export const dynamicSort = (arr, key, order = 1) =>
  arr.sort((a, b) => (a[key] > b[key] ? order : a[key] < b[key] ? -order : 0));

export const delay = (t, v) =>
  new Promise(resolve => setTimeout(resolve.bind(null, v), t));

export const noop = () => {};

export const filterErrorMessage = msg => {
  const splits = msg.split(":");
  return splits[splits.length - 1].trim();
};
