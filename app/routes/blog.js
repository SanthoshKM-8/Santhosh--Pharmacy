import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  database: service(),

  model(params) {
    console.log(params);
    const blog_id = params.blog_id;
    let currentBlog;
    this.database.blogs.forEach(function (blog) {
      if (blog.id === blog_id) {
        // console.log(blog);
        currentBlog = blog;
        return;
      }
    });
    return currentBlog;
  },
});
