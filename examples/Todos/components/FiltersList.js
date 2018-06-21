import React from 'react';

import { Subscribe } from '../../../src';

import Filter from './Filter';

const FiltersList = () => (
  <Subscribe filterStore>
    {filterStore => {
      const { filter, set } = filterStore;

      return (
        <div>
          {['All', 'Active', 'Completed'].map(name => (
            <Filter key={name} {...{ filter, set }}>
              {name}
            </Filter>
          ))}
        </div>
      );
    }}
  </Subscribe>
);

export default FiltersList;
