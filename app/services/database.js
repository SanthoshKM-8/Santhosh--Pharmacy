import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
  medicines: A([
    {
      id: '1',
      name: 'Paracip',
      description: 'Used for fever',
      price: 3500,
    },
    {
      id: '2',
      name: 'Almox',
      description: 'Used for cold',
      price: 5000,
    },
  ]),
  cart: A([]),
  orders: A([]),
});
