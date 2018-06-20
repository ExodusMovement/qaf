// @flow

import getComputed from './getComputed';
import getActions from './getActions';

export default (obj: {}) =>
  [...getComputed(obj), ...getActions(obj)].reduce(
    (allProps, prop) => ({ ...allProps, [prop]: obj[prop] }),
    {}
  );
