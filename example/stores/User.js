import qaf from '../../src';

export default class UserStore extends qaf() {
  state = {
    name: 'Alice',
    signedIn: true
  };

  signIn = () => this.setState({ signedIn: true });
  signOut = () => this.setState({ signedIn: false });
}
