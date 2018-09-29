import createStore from '../createStore'

export default class Store extends createStore() {
  state = {
    counter: 0
  }

  INC = state => ({ counter: state.counter + 1 })
  DEC = state => ({ counter: state.counter - 1 })

  SET = (state, action) => ({ counter: action.value })
}

export const { Subscriber, withSubscriber, dispatch, getState } = Store
