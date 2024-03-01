import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    database: service(),

    model() {
        return this.database.blogs;
    }
});
