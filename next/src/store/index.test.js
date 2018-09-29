/* global React, mount */

import Store, { dispatch } from '.'

describe('store', () => {
  let wrapper, s

  beforeEach(() => {
    wrapper = mount(<Store ref={Store.ref} />)
    s = () => wrapper.state
  })

  it('init', () => {
    expect(s().counter).toBe(0)
  })

  it('inc', async () => {
    await dispatch({ type: 'INC' })
    expect(s().counter).toBe(1)
  })

  it('dec', async () => {
    await dispatch({ type: 'DEC' })
    expect(s().counter).toBe(-1)
  })

  it('set', async () => {
    await dispatch({ type: 'SET', value: 99 })
    expect(s().counter).toBe(99)
  })
})
