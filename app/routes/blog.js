import Route from '@ember/routing/route';

export default Route.extend({
    blog_id: null,
    model(params) {
        console.log(this.modelFor('blogs'));
        this.blog_id = params.blog_id;
    },

    renderTemplate() {
        this.render('blogs/blog', {
            into: 'blogs', 
            outlet: "1",
        });
    }
});
