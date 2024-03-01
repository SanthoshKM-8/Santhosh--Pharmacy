import Component from '@ember/component';

export default Component.extend({
  tagName: 'p',
  classNames: ['italic-desc'],
  classNameBindings: ['isItalic:italic:notItalic'],
  isItalic: true,
  attributeBindings: ['id'],
  id: 'description',
});
