import Component from '@ember/component';

export default Component.extend({
  actions: {
    placeOrder() {
      console.log('You Ordered Medicines');
      alert(`Successfully Ordered`);
      this.onOrder();
    },
  },
});
