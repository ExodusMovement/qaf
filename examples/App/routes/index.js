import { redirect } from 'pagify-it';

import createRoute from './createRoute';

import Root from '../components/Root';

import Counter from '../../Counter';
import Todos from '../../Todos';
import Containers from '../../Containers';

const pages = {
  '/Counter': createRoute(Counter),
  '/Todos': createRoute(Todos),
  '/Containers': createRoute(Containers)
};

export default {
  '/': createRoute(Root, { pages }),
  ...pages,
  '*': () => {
    redirect('/');
    return null;
  }
};
