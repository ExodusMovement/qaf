/* eslint-disable react/prop-types */

import React, { PureComponent } from 'react';

import { inject } from '../../lib';

class LastTweet extends PureComponent {
  // testing refs
  func = () => null;

  // eslint-disable-next-line no-alert
  show = () => alert(this.props.tweetsStore.tweets.slice(-1)[0]);

  render() {
    const { userStore, tweetsStore } = this.props;

    if (userStore.signedIn && tweetsStore.tweets.length > 0)
      return (
        <div>
          <button onClick={this.show}>Last tweet</button>
        </div>
      );

    return null;
  }
}

export default inject('userStore', 'tweetsStore')(LastTweet);
