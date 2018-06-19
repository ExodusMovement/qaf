// @flow

export default (obj: {}) =>
  Object.keys(obj)
    .concat(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))
    .filter(key => typeof obj[key] === 'function')
    .reduce((actions, key) => ({ ...actions, [key]: obj[key] }), {});
