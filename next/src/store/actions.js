import { dispatch } from '.'

export const inc = () => dispatch({ type: 'INC' })
export const dec = () => dispatch({ type: 'DEC' })

export const set = (value: number) => dispatch({ type: 'SET', value })
