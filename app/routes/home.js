import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authentication: service(),
  router: service(),

  beforeModel(transition) {
    if (!this.authentication.isAuthenticated) {
      let loginController = this.controllerFor('login');
      // console.log(loginController);
      loginController.set('previousTransition', transition);
      this.router.transitionTo('login');
    }
  },
});
