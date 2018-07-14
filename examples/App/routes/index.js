import { redirect } from 'pagify-it';

import createRoute from './createRoute';

import Root from '../components/Root';

import Counter from '../../Counter';
import Todos from '../../Todos';
import Containers from '../../Containers';
import Singular from '../../Singular';

const pages = {
  '/Counter': createRoute(Counter),
  '/Todos': createRoute(Todos),
  '/Containers': createRoute(Containers),
  '/Singular': createRoute(Singular)
};

export default {
  '/': createRoute(Root, { pages: Object.keys(pages) }),
  ...pages,
  '*': () => {
    redirect('/');
    return null;
  }
};
