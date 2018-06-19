import Qaf from '../../lib';

export default class UserStore extends Qaf() {
  state = {
    name: 'Alice',
    signedIn: true
  };

  signIn = () => this.setState({ signedIn: true });
  signOut = () => this.setState({ signedIn: false });
}
