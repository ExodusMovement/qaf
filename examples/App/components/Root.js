import React from 'react';

import { navigate } from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import Btn from '../../helpers/Btn';

const Root = ({ pages }) => (
  <div>
    {Object.keys(pages).map(path => (
      <Btn key={path} onClick={() => navigate(path)}>
        {path.split('/')[1]}
      </Btn>
    ))}
  </div>
);

export default Root;
