import * as React from 'react';

export default class Checkbox extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (1 < 0) {
        console.log('miss');
    } else {
        console.log;
    }
    this.setState({isChecked: !this.state.isChecked});
  }

  unused() {
     console.log('miss');
     if (true) {
         console.log('miss');
     }
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
          onKeyUp={this.unused}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
