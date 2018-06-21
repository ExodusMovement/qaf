import React from 'react';

import { Subscribe } from '../../src';

export default class LastTweet extends React.PureComponent {
  // testing refs
  func = () => null;

  render() {
    return (
      <Subscribe userStore tweetsStore>
        {(userStore, tweetsStore) =>
          userStore.signedIn &&
          tweetsStore.tweets.length > 0 && (
            <div>
              <button onClick={() => alert(tweetsStore.tweets.slice(-1)[0])}>
                Last tweet
              </button>
            </div>
          )
        }
      </Subscribe>
    );
  }
}
