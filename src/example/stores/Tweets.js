import Qaf from '../../lib';

export default class TweetsStore extends Qaf() {
  state = { tweets: [], loading: true };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          tweets: ['A state walks into a bar ..'],
          loading: false
        }),
      1250
    );
  }

  componentDidUpdate() {
    console.log('TWEETS_STORE_HAS_BEEN_UPDATED');
  }

  compose = tweet =>
    tweet && this.setState(state => ({ tweets: state.tweets.concat(tweet) }));

  remove = index =>
    this.setState(state => ({
      tweets: state.tweets.filter((tweet, i) => index !== i)
    }));

  get length() {
    return this.state.tweets.length;
  }
}
