import React from 'react';

import Router from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import routes from './routes';
import base from './routes/base';

const App = () => <Router {...{ routes, base }} />;

export default App;
