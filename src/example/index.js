import React from 'react';

import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

import { Provider } from '../lib';

import './style.css';

import stores from './stores';

import Counter from './components/Counter';
import Tweets from './components/Tweets';
import LastTweet from './components/LastTweet';

class App extends React.PureComponent {
  componentDidMount() {
    // testing refs
    this.lastTweet.current.sayHi();
  }

  lastTweet = React.createRef();

  render() {
    return (
      <Container>
        <Counter />
        <Counter />

        <Divider />

        <Tweets />

        {/* testing multiple components subscribing to the same store */}
        <LastTweet ref={this.lastTweet} />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: #f5fcff;
  color: #333;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const Divider = styled.div`
  background: #61dafb;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 256px;
`;

export default () => (
  <Provider {...{ stores }}>
    <App />
  </Provider>
);
