import React from 'react';
import { uniqueId} from 'lodash';

function className(inputType) {
  return "amateur-" + inputType + "-input";
}

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.id = uniqueId();
    this.className = className(this.props.data.type);
  }

  render() {
    return <p>
        <label htmlFor={this.id}>{this.props.data.label}</label>
        <input
          ref={this.props.ref}
          id={this.id}
          type={this.props.data.type}
          className={this.className}
        />
      </p>
  }

}

export default Input;
