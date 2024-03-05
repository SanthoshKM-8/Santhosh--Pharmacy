import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', function () {
    this.route('index', { path: '/' });
  });
  this.route('medicines');
  this.route('cart');
  this.route('orders');
  this.route('about');
  this.route('blogs');
  this.route('blog', { path: '/blog/:blog_id' }, function () {
    this.route('comments', function () {
      this.route('index', { path: '/' });
      this.route('comment', { path: '/:comment_id' });
      this.route('comment-not-found');
    });
  });
  this.route('not-found', { path: '/*path' });
  this.route('login');
  this.route('blogs-loading');
  this.route('blogs-error');
});
