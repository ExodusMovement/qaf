import React from 'react';

import { Consumer } from './context';

export default prop => Component =>
  React.forwardRef((props, ref) => (
    <Consumer>
      {store => <Component {...props} {...{ ref, [prop]: store }} />}
    </Consumer>
  ));
