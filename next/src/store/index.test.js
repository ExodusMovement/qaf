/* global React, mount */

import Store, { dispatch } from '.'

describe('store', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Store ref={Store.ref} />)
  })

  it('init', () => {
    expect(wrapper.state().counter).toBe(0)
  })

  it('inc', async () => {
    await dispatch({ type: 'INC' })
    expect(wrapper.state().counter).toBe(1)
  })

  it('dec', async () => {
    await dispatch({ type: 'DEC' })
    expect(wrapper.state().counter).toBe(-1)
  })

  it('set', async () => {
    await dispatch({ type: 'SET', value: 99 })
    expect(wrapper.state().counter).toBe(99)
  })
})
