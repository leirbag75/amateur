import React from 'react';
import Input from './input';
import FormData from './form_data';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.result = {};
  }

  onSubmit = event => {
    event.preventDefault();
    let result = {};
    Object.keys(this.result).forEach(key => {
      result[key] = this.result[key].value;
    });
    global.backend.getLink(this.props.data, new FormData(result));
  }

  render() {
    return <form onSubmit={this.onSubmit}>
        {this.props.data.parameters.map(input =>
          <Input key={input.name} ref={ref => this.result[input.name] = ref}
           data={input}
          />
        )}
        <input type="submit" />
      </form>
  }

}

export default Form;
