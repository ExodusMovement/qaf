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
    const { length, loading, tweets, remove } = this.props.tweetsStore;
    const { tweetInput } = this.state;

    const tweetCount =
      length > 0
        ? `${length} ${length === 1 ? 'tweet' : 'tweets'} so far and counting!`
        : 'No tweets :(';

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
          </button>{' '}
          {tweetCount}
        </div>

        {loading && <div>Loading ..</div>}

        {length > 0 &&
          tweets.map((tweet, index) => (
            <div key={index}>
              {tweet} <button onClick={() => remove(index)}>Remove</button>
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
