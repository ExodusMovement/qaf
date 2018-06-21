import { createStore } from '../../src';

export default class UserStore extends createStore() {
  state = {
    name: 'Alice',
    signedIn: true
  };

  signIn = () => this.setState({ signedIn: true });
  signOut = () => this.setState({ signedIn: false });
}
