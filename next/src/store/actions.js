import Store from '.'

export const incCounter = () => {
  Store.dispatch({ type: 'INC_COUNTER' })
}

export const decCounter = () => {
  Store.dispatch({ type: 'DEC_COUNTER' })
}

export const setCounter = (counter: number) => {
  Store.dispatch({ type: 'SET_COUNTER', counter })
}
