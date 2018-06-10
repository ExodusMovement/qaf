import React from 'react';

import compose from './compose';

export default stores => Component => {
  const consumers = Object.keys(stores).reduce(
    (obj, key) => ({ ...obj, [key]: stores[key].Consumer }),
    {}
  );

  const Composed = compose(consumers);

  return () => <Composed render={props => <Component {...props} />} />;
};
