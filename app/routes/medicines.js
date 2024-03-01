import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // medicines: [
  //     {
  //         id: '1',
  //         name: 'Paracip',
  //         description: 'Used for fever',
  //         price: 35
  //     },
  //     {
  //         id: '2',
  //         name: 'Almox',
  //         description: 'Used for cold',
  //         price: 50
  //     }
  // ],
  // model() {
  //     return this.medicines;
  // }

  database: service(),

  model() {
    return this.database.medicines;
  },
});
