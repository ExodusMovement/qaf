import ContextStore from '../../lib';

export default class CounterStore extends ContextStore {
  state = { counter: 0 };

  inc = () => this.setState(state => ({ counter: state.counter + 1 }));
  dec = () => this.setState(state => ({ counter: state.counter - 1 }));
}

export const withCounterStore = CounterStore.inject('counterStore');
