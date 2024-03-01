import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(params);
    },

    // renderTemplate() {
    //     this.render('blog/comments/comment', {
    //         into: 'application',
    //         outlet: '12',
    //     });
    // }
});
