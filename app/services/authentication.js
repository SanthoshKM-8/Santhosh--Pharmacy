import Service from '@ember/service';

export default Service.extend({
  isAuthenticated: false,
  username: '',

  login: function (username) {
    this.set('isAuthenticated', true);
    this.set('username', username);
  },

  logout: function () {
    this.set('isAuthenticated', false);
    this.set('username', '');
  },
});
