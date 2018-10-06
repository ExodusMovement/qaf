import createStore from '../createStore'

export default class Store extends createStore() {
  state = {
    counter: 0
  }

  INC = () => this.setState(state => ({ counter: state.counter + 1 }))
  DEC = () => this.setState(state => ({ counter: state.counter - 1 }))

  SET = ({ value }) => this.setState({ counter: value })
}

export const { Subscriber, withSubscriber, dispatch, getState } = Store
