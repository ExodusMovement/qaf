import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createStore } from '../src';

configure({ adapter: new Adapter() });

describe('testing example', () => {
  class Store extends createStore() {
    state = {
      counter: 0,

      inc: () => this.setState(state => ({ counter: state.counter + 1 })),
      dec: () => this.setState(state => ({ counter: state.counter - 1 }))
    };
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Store />);
  });

  it('init counter', () => {
    expect(wrapper.state().counter).toBe(0);
  });

  it('inc counter', () => {
    wrapper.state().inc();
    expect(wrapper.state().counter).toBe(1);
  });

  it('dec counter', () => {
    wrapper.state().dec();
    expect(wrapper.state().counter).toBe(-1);
  });
});
