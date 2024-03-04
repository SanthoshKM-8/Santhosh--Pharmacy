import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  model(params) {
    console.log(params);
    // console.log(this.paramsFor('blog'));
    let comment_id = params.comment_id;
    let currentComment;
    this.modelFor('blog').comments.forEach(function (comment) {
      if (comment.id === comment_id) {
        currentComment = comment;
        // console.log(comment);
      }
    });
    if (currentComment === undefined) {
      this.router.transitionTo('blog.comments.comment-not-found');
    }
    return currentComment;
  },

  // actions: {
  //   willTransition(transition) {
  //     if (transition) {
  //       transition.abort();
  //     } else {
  //       alert('I am not aborted');
  //     }
  //   },
  // },

  // renderTemplate() {
  //     this.render('blog/comments/comment', {
  //         into: 'application',
  //         outlet: '12',
  //     });
  // }
});
