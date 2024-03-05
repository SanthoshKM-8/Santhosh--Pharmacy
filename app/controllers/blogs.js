import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['category'],
    category: null,

    filteredBlogs: computed('category', function() {
        let category = this.category;
        console.log(category);
        // if(category) {
        //     return model.filterBy('category', category);
        // } else {
        //     return model;
        // }
    })
});
