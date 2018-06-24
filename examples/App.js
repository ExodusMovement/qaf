import React from 'react';

import Router, { Link, redirect, navigate } from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import Counter from './Counter';
import Todos from './Todos';

import './style.css';

const Root = () => (
  <div>
    <button onClick={() => navigate('/counter')}>Counter</button>
    <button onClick={() => navigate('/todos')}>Todos</button>
  </div>
);

const route = Component => {
  const Route = ({ ctx: { path } }) => (
    <div>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        {path !== '/' && <Link href="/">root</Link>}
        {path !== '/' && ` / ${path.split('/')[1]}`}
      </div>

      <Component />
    </div>
  );

  return Route;
};

const routes = {
  '/': Root,
  '/counter': route(Counter),
  '/todos': route(Todos),
  '*': () => {
    redirect('/');
    return null;
  }
};

const base = process.env.NODE_ENV === 'production' ? '/qaf/#' : '';

const App = () => <Router {...{ routes, base }} />;

export default App;
