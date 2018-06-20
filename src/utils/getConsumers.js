export default (stores, injected) =>
  Object.keys(stores).reduce(
    (obj, key) =>
      injected.includes(key) ? { ...obj, [key]: stores[key].Consumer } : obj,
    {}
  );
