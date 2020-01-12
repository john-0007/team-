import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render,
  fillIn,
  find
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `<LoginForm />`);

    assert.deepEqual(this.element.textContent.trim().replace(/\s*\n+\s*/g, '\n').split('\n'), [
      'Login',
      'Select a user',
      'Testy Testerson',
      'Sample McData'
    ]);
    let button = /** @type {HTMLInputElement} */ (find('input[type = "submit"]'))
    assert.equal(button.disabled, true)
    // button is disabled
    await fillIn('select', '1');
    assert.equal(button.disabled, false)
    // button is enabled

  });
});
