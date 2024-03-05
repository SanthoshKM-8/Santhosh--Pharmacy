import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  authentication: service(),
  router: service(),

  actions: {
    userLogin() {
      this.authentication.login(this.authentication.username);
      let previousTransition = this.previousTransition;
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.router.transitionTo('home');
      }
    },
  },
});
