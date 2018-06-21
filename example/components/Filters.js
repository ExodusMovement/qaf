import React from 'react';

import { Subscribe } from '../../src';

import Filter from './Filter';

const Filters = () => (
  <Subscribe filterStore>
    {filterStore => {
      const { filter, set } = filterStore;

      return (
        <div>
          <Filter {...{ filter, set }}>All</Filter>{' '}
          <Filter {...{ filter, set }}>Active</Filter>{' '}
          <Filter {...{ filter, set }}>Completed</Filter>
        </div>
      );
    }}
  </Subscribe>
);

export default Filters;
