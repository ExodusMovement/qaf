/* global React, mount */

import Store from '.'

describe('store', () => {
  let wrapper, s

  beforeEach(() => {
    wrapper = mount(<Store ref={Store.ref} />)
    s = () => wrapper.state
  })

  it('init counter', () => {
    expect(s().counter).toBe(0)
  })

  it('inc counter', () => {
    Store.dispatch({ type: 'INC_COUNTER' })
    expect(s().counter).toBe(1)
  })

  it('dec counter', () => {
    Store.dispatch({ type: 'DEC_COUNTER' })
    expect(s().counter).toBe(-1)
  })

  it('set counter', () => {
    Store.dispatch({ type: 'SET_COUNTER', value: 99 })
    expect(s().counter).toBe(99)
  })
})