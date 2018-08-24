import { createContainer } from '../../src';

const { SingularStore, Subscriber, subscribe } = createContainer({
  singular: true
});

export default class Store extends SingularStore {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

export { Subscriber, subscribe };
