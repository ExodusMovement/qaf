import React from 'react';

import Router, { Link, redirect, navigate } from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import Counter from './Counter';
import Todos from './Todos';
import Containers from './Containers';

import './style.css';

const base = process.env.NODE_ENV === 'production' ? '/qaf/#' : '';

const route = Component => {
  const breadcrumbsStyle = { position: 'absolute', top: 20, left: 20 };

  const Route = ({ ctx: { path } }) => {
    const breadcrumb = path !== '/' ? ` / ${path.split('/')[1]}` : '';

    document.title = `Examples${breadcrumb}`;

    return (
      <div>
        <div style={breadcrumbsStyle}>
          {path === '/' ? (
            'Examples'
          ) : (
            <Link {...{ base }} to="/">
              Examples
            </Link>
          )}
          {breadcrumb}
        </div>

        <Component />
      </div>
    );
  };

  return Route;
};

const pages = {
  '/Counter': route(Counter),
  '/Todos': route(Todos),
  '/Containers': route(Containers)
};

const Root = () => (
  <div>
    {Object.keys(pages).map(path => (
      <button key={path} onClick={() => navigate(path)}>
        {path.split('/')[1]}
      </button>
    ))}
  </div>
);

const routes = {
  '/': route(Root),
  ...pages,
  '*': () => {
    redirect('/');
    return null;
  }
};

const App = () => <Router {...{ routes, base }} />;

export default App;
