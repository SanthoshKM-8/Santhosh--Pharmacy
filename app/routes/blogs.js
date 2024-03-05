import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default Route.extend({
  database: service(),
  authentication: service(),
  router: service(),

  // beforeModel(transition) {
  //   if (!this.authentication.isAuthenticated) {
  //     let loginController = this.controllerFor('login');
  //     // console.log(loginController);
  //     loginController.set('previousTransition', transition);
  //     this.router.transitionTo('login');
  //   }
  // },

  model() {
    // setTimeout("", 1000);
    // return fetch(
    //   'https://www.googleapis.com/books/v1/volumes?q=intitle:santhosh&maxResults=10',
    // )
    //   .then((response) => response.json())
    //   .then((data) => data.items);
    return this.database.blogs;
  },

  actions: {
    loading(transition) {
      let start = new Date();
      transition.promise.finally(() => {
        console.log(`Took ${new Date() - start}ms to load`);
      });

      return true;
    },
  },
});
