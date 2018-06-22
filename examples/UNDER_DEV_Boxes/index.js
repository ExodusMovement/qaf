import React from 'react';

import { Provider } from '../../src';

import BoxesStore from './stores/BoxesStore';
import ArrowsStore from './stores/ArrowsStore';

import Canvas from './components/Canvas';

const App = () => (
  <Provider boxesStore={BoxesStore} arrowsStore={ArrowsStore}>
    <Canvas />
  </Provider>
);

export default App;
