import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  authentication: service(),

  compute() {
    let authentication = this.authentication;

    if (authentication.get('isAuthenticated')) {
      return authentication.get('username');
    } else {
      return 'Guest';
    }
  },
});
