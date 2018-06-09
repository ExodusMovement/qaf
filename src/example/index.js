import React from 'react';

import styled from 'styled-components';

import './style.css';

import CounterStore from './stores/Counter';
import TweetsStore from './stores/Tweets';

import Counter from './components/Counter';
import Tweets from './components/Tweets';

const AppContainer = () => (
  <Container>
    <CounterStore>
      <Counter />
    </CounterStore>

    <Divider />

    <TweetsStore>
      <Tweets />
    </TweetsStore>
  </Container>
);

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

export default AppContainer;
