// @flow

export default (stores, injected) =>
  Object.keys(stores)
    .filter(key => injected.includes(key))
    .map(key => stores[key].Consumer);
