import React from 'react';

import { Subscriber } from '../../../src';

import Btn from '../../App/components/helpers/Btn';
import Input from '../../App/components/helpers/Input';

const Add = () => (
  <Subscriber todosStore>
    {todosStore => {
      const input = React.createRef();

      const add = () => {
        todosStore.add(input.current.value || '¯\\_(ツ)_/¯');
        input.current.value = '';
      };

      const handleClick = () => add();
      const handleKeyPress = e => e.key === 'Enter' && add();

      return (
        <div>
          <Input
            innerRef={input}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            large
          />

          <Btn onClick={handleClick} square>
            +
          </Btn>
        </div>
      );
    }}
  </Subscriber>
);

export default Add;
