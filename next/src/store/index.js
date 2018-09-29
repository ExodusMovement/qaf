import createStore from '../createStore'

export default class Store extends createStore() {
  state = {
    counter: 0
  }

  INCREMENT = () => this.setState(state => ({ counter: state.counter + 1 }))
  DECREMENT = () => this.setState(state => ({ counter: state.counter - 1 }))

  SET = ({ value }: { value: number }) => this.setState({ counter: value })
}

export const { Subscribe, withSubscribe, dispatch, getState } = Store
