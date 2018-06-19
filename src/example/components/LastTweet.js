/* eslint-disable react/prop-types */

import { PureComponent } from 'react';

import { inject } from '../../lib';

class LastTweet extends PureComponent {
  sayHi = () => console.log('Hi!');

  render() {
    const { userStore, tweetsStore } = this.props;

    if (userStore.signedIn && tweetsStore.tweets.length > 0)
      console.log(tweetsStore.tweets.slice(-1)[0]);

    return null;
  }
}

export default inject('userStore', 'tweetsStore')(LastTweet);
