import Siaq from '../../lib';

export default class UserStore extends Siaq() {
  state = {
    name: 'Alice',
    signedIn: true
  };

  signIn = () => this.setState({ signedIn: true });
  signOut = () => this.setState({ signedIn: false });
}
