/* eslint-disable react/prop-types */

import React, { PureComponent } from 'react';

import { Subscribe } from '../../src';

export default class LastTweet extends PureComponent {
  // testing refs
  func = () => null;

  render() {
    return (
      <Subscribe userStore tweetsStore>
        {(userStore, tweetsStore) =>
          userStore.signedIn &&
          tweetsStore.tweets.length > 0 && (
            <div>
              {/* eslint-disable-next-line no-alert */}
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
