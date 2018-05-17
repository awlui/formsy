import Formsy from 'formsy-react';
import React from 'react';
import MyInput from './MyInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit = (model) => {
    console.log(this.refs.form.getModel());
  }
  getMyData = () => {
    
  }
  render() {
    return (
      <Formsy ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyInput
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <MyInput
          name="name"
        />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
        <button onClick={this.submit} >Click</button>
      </Formsy>
    );
  }
}
