// @flow

import { createContext } from 'react';

// a context to keep track of other contexts

export const {
  Provider: StoresProvider,
  Consumer: StoresConsumer
} = createContext();
