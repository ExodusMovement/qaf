/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

import { inject } from '../../src';

class Tweets extends Component {
  state = { tweetInput: 'Hello World!' };

  handleChange = e => this.setState({ tweetInput: e.target.value });

  handleClick = () => {
    this.props.tweetsStore.compose(this.state.tweetInput);
    this.setState({ tweetInput: 'Hello World!' });
  };

  render() {
    const { name, signedIn, signIn, signOut } = this.props.userStore;

    if (!signedIn)
      return (
        <div>
          You are not signed in. <button onClick={signIn}>Sign In</button>
        </div>
      );

    const { length, loading, tweets, remove } = this.props.tweetsStore;
    const { tweetInput } = this.state;

    const tweetCount =
      length > 0
        ? `${length} ${length === 1 ? 'tweet' : 'tweets'} so far and counting!`
        : 'no tweets yet :(';

    return (
      <div>
        <div>
          Hi {name}
          {loading ? (
            '!'
          ) : (
            <span>
              , {tweetCount} <button onClick={signOut}>Sign Out</button>
            </span>
          )}
        </div>

        <div>
          <Input
            onChange={this.handleChange}
            placeholder="What's up?"
            value={tweetInput}
          />{' '}
          <button disabled={!tweetInput} onClick={this.handleClick}>
            Tweet
          </button>{' '}
        </div>

        {loading && <div>Loading ..</div>}

        {length > 0 &&
          tweets.map((tweet, index) => (
            <div key={index}>
              {tweet} <button onClick={() => remove(index)}>Remove</button>
            </div>
          ))}
      </div>
    );
  }
}

const Input = styled.input`
  margin-bottom: 10px;
`;

// export default () => (
//   <Subscribe userStore tweetsStore>
//     {(userStore, tweetsStore) => <Tweets {...{ userStore, tweetsStore }} />}
//   </Subscribe>
// );

export default inject('userStore', 'tweetsStore')(Tweets);
