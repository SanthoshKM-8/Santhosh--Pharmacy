import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('this is model');
  },
  setupController(controller, error) {
    console.log(error.message);
    this._super(...arguments);
  },
});
