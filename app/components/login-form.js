import Component from '@glimmer/component';
import {
  action
} from '@ember/object'
import {
  tracked
} from '@glimmer/tracking'

export default class LoginFormComponent extends Component {
  @tracked
  userId = null

  get isDisabled() {
    return !this.userId
  }

  loginAsUserWithId(val) {
    console.log(val)
  }

  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }

  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault()
    const {
      target
    } = evt
    const val = target.querySelector('select').value
    this.loginAsUserWithId(val)
  }
}
