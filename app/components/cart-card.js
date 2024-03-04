import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  database: service(),

  actions: {
    makeOrder(item) {
      this.database.orders.pushObject(item);
      this.database.cart.removeObject(item);
    },

    editQty() {
      // console.log(this);
      this.set('isQtyNotEditable', false);
    },

    // qtyChange() {
    //     let item = this.item;
    //     let amount = item.medicine.price * item.qty
    //     this.set('item.amount', amount);
    //     // console.log(amount);
    // }
  },

  init() {
    this._super(...arguments);
    this.set('isQtyNotEditable', true);
  },

  didInsertElement() {
    this._super(...arguments);
    // console.log(this.element.querySelector('input'));
    this.element.querySelector('input').disabled = this.isQtyNotEditable;
  },

  didRender() {
    this._super(...arguments);
    // console.log(this.element);
    this.element.querySelector('input').disabled = this.isQtyNotEditable;
  },

  willDestroyElement() {
    this._super(...arguments);
    console.log('Item removed from cart');
  },

  change() {
    let item = this.item;
    let amount = item.medicine.price * item.qty;
    this.set('item.amount', amount);
  },
});
