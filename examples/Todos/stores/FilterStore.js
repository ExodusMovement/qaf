import { createStore } from '../../../src';

export default class FilterStore extends createStore() {
  state = {
    filter: 'all',

    set: filter => this.setState({ filter })
  };
}
