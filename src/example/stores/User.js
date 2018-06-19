import ContextStore from '../../lib';

export default class UserStore extends ContextStore() {
  state = {
    name: 'Alice',
    signedIn: true
  };

  signIn = () => this.setState({ signedIn: true });
  signOut = () => this.setState({ signedIn: false });
}
