// @flow

import getComputed from './getComputed';
import getActions from './getActions';

import blacklist from './blacklist';

export default (obj: {}) => {
  const props = [...getComputed(obj), ...getActions(obj)];

  return props
    .filter(prop => blacklist.indexOf(prop) === -1)
    .reduce((allProps, prop) => ({ ...allProps, [prop]: obj[prop] }), {});
};
