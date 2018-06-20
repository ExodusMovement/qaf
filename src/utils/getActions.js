// @flow

export default (obj: {}) =>
  Object.keys(obj).filter(key => typeof obj[key] === 'function');
