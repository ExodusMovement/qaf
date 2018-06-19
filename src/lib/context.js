import { createContext } from 'react';

// a context to keep track of other contexts (that you define)

export const {
  Provider: StoresProvider,
  Consumer: StoresConsumer
} = createContext();
