import { createStore } from '../../../src';

export default class ArrowsStore extends createStore() {
  state = {
    arrows: [
      { id: 'arrow-0', from: 'box-foo', to: 'box-bar' },
      { id: 'arrow-1', from: 'box-bar', to: 'box-baz' }
    ]
  };

  add = (from, to) =>
    this.setState(state => ({
      arrows: [...state.arrows, { id: Date.now(), from, to }]
    }));
}
