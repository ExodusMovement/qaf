import React from 'react';

import styled from 'styled-components';

import { withTweetsStore } from '../stores/Tweets';

class Tweets extends React.PureComponent {
  state = { tweetInput: 'Hello World!' };

  handleChange = e => this.setState({ tweetInput: e.target.value });

  handleClick = () => {
    this.props.tweetsStore.compose(this.state.tweetInput);
    this.setState({ tweetInput: 'Hello World!' });
  };

  render() {
    const { tweetsStore } = this.props;
    const { tweetInput } = this.state;

    return (
      <React.Fragment>
        <div>
          <Input
            onChange={this.handleChange}
            placeholder="What's up?"
            value={tweetInput}
            style={{ marginBottom: 10 }}
          />{' '}
          <button disabled={!tweetInput} onClick={this.handleClick}>
            Tweet
          </button>
        </div>

        {tweetsStore.loading && <div>Loading ..</div>}

        {tweetsStore.tweets.length > 0 &&
          tweetsStore.tweets.map((tweet, index) => (
            <div key={index}>
              {tweet}{' '}
              <button onClick={() => tweetsStore.remove(index)}>Remove</button>
            </div>
          ))}
      </React.Fragment>
    );
  }
}

const Input = styled.input`
  margin-bottom: 10px;
`;

export default withTweetsStore(Tweets);
