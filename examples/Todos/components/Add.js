import React from 'react';

import { Subscriber } from '../../../src';

import Button from '../../App/components/helpers/Button';
import TextInput from '../../App/components/helpers/TextInput';

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
          <TextInput
            aria-label="Todo Title"
            innerRef={input}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            large
          />

          <Button onClick={handleClick} square>
            +
          </Button>
        </div>
      );
    }}
  </Subscriber>
);

export default Add;
