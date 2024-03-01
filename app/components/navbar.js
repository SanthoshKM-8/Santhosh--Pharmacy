import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  authentication: service(),

  actions: {
    userLogin(event) {
      // console.log(event);
      // console.log(this.authentication.username);
      this.authentication.login(this.authentication.username);
    },
    userLogout() {
      this.authentication.logout();
    },
  },
});
