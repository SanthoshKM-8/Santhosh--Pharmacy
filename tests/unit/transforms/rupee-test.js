import { module, test } from 'qunit';

import { setupTest } from 'my-app/tests/helpers';

module('Unit | Transform | rupee', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:rupee');
    assert.ok(transform);
  });
});
