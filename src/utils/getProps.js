// @flow

export default (obj: {}) => {
  const prototype = Object.getPrototypeOf(obj);

  const computed = Object.getOwnPropertyNames(prototype).filter(key => {
    const desc = Object.getOwnPropertyDescriptor(prototype, key);

    return desc && typeof desc.get === 'function';
  });

  const actions = Object.keys(obj).filter(
    key => typeof obj[key] === 'function'
  );

  return [...computed, ...actions].reduce(
    (props, prop) => ({ ...props, [prop]: obj[prop] }),
    {}
  );
};
