// @flow

export default (obj: {}) =>
  Object.keys(obj)
    .filter(key => typeof obj[key] === 'function')
    .reduce((actions, key) => ({ ...actions, [key]: obj[key] }), {});
