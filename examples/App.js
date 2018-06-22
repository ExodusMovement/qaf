import React from 'react';

import Router, { redirect, navigate } from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import Counter from './Counter';
import Todos from './Todos';

import './style.css';

const routes = {
  '/': () => (
    <div>
      <button onClick={() => navigate('/counter')}>Counter</button>{' '}
      <button onClick={() => navigate('/todos')}>Todos</button>
    </div>
  ),
  '/counter': Counter,
  '/todos': Todos,
  '*': () => {
    redirect('/');
    return null;
  }
};

const App = () => (
  <Router {...{ routes }} base={`${process.env.PUBLIC_URL || ''}/#`} />
);

export default App;
