import ContextStore from '../../lib';

export default class UserStore extends ContextStore() {
  state = {
    name: 'Alice',
    signedIn: false
  };

  signIn = () => this.setState({ signedIn: true });
}
