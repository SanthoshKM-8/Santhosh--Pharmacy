import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([value], hash) {
  let rupee = Math.floor(value / 100);
  let paise = value % 100;
  let sign = hash.sign === undefined ? '₹' : hash.sign;

  if (paise.toString().length === 1) {
    paise = '0' + paise;
  }
  return `${sign}${rupee}.${paise}`;
});
