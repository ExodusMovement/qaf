import React from 'react';

import Block from '../App/components/helpers/Block';
import Button from '../App/components/helpers/Button';

import Store, { Subscriber } from './container';

const Counter = () => (
  <Subscriber>
    {store => (
      <div>
        <Block small>{store.counter}</Block>

        <div>
          <Button onClick={store.inc} square>
            +
          </Button>

          <Button onClick={store.dec} square>
            -
          </Button>
        </div>
      </div>
    )}
  </Subscriber>
);

const SingularApp = () => (
  <Store>
    <Counter />
  </Store>
);

export default SingularApp;
