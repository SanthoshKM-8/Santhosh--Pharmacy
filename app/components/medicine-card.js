import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  database: service(),

  init() {
    this._super(...arguments);
    this.set('qty', 0);
  },

  actions: {
    changeQty(event) {
      this.set('qty', event.target.value);
      // console.log(event.target.value);
    },

    addCart(medicine) {
      // console.log(this.qty);
      this.database.cart.pushObject({
        medicine: medicine,
        qty: this.qty,
        amount: medicine.price * this.qty,
      });
    },

    makeOrder(medicine) {
      // console.log(medicine);
      this.database.orders.pushObject({
        medicine: medicine,
        qty: this.qty,
        amount: medicine.price * this.qty,
      });
    },
  },
});
