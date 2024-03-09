import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: { category: 'blogs_category' },
  category: 'new',

  filteredBlogs: computed('category', 'model', function () {
    let category = this.category;
    // console.log(category);
    if (category) {
      return this.model.filter(function (blog) {
        if (blog.category == category) {
          // console.log(blog);
          return true;
        }
      });
    } else {
      return this.model;
    }
  }),
});
