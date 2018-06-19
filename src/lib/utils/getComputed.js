export default obj => {
  const prototype = Object.getPrototypeOf(obj);

  return Object.getOwnPropertyNames(prototype)
    .filter(key => {
      const desc = Object.getOwnPropertyDescriptor(prototype, key);
      return desc && typeof desc.get === 'function';
    })
    .reduce((computed, key) => ({ ...computed, [key]: obj[key] }), {});
};
