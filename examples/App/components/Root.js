import React from 'react';

import { navigate } from 'pagify-it';

import Button from './helpers/Button';

const Root = ({ pages }) => (
  <div>
    {Object.keys(pages).map(path => (
      <Button key={path} onClick={() => navigate(path)}>
        {path.split('/')[1]}
      </Button>
    ))}
  </div>
);

export default Root;
