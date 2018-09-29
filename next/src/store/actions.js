import { dispatch } from '.'

export const incCounter = () => {
  dispatch({ type: 'INCREMENT' })
}
export const decCounter = () => {
  dispatch({ type: 'DECREMENT' })
}
export const setCounter = (value: number) => {
  dispatch({ type: 'SET', value })
}
