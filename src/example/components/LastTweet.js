/* eslint-disable react/prop-types */

import React from 'react';

import { inject } from '../../lib';

class LastTweet extends React.PureComponent {
  sayHi = () => console.log('Hi!');

  render() {
    if (this.props.userStore.signedIn)
      console.log(this.props.tweetsStore.tweets.slice(-1)[0]);

    return null;
  }
}

export default inject('userStore', 'tweetsStore')(LastTweet);
