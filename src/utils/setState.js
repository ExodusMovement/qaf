export default (obj, state, cb) =>
  new Promise(res =>
    obj.setState(state, () => (typeof cb === 'function' ? res(cb()) : res()))
  );
