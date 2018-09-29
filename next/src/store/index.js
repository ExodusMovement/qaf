import createStore from '../createStore'

export default class Store extends createStore() {
  state = {
    counter: 0
  }

  INC_COUNTER = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  DEC_COUNTER = () => {
    this.setState(state => ({ counter: state.counter - 1 }))
  }

  SET_COUNTER = ({ value }) => this.setState({ counter: value })
}
