import React from 'react';
import Form from './form';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  setVisible = () => {
    this.setState({visible: true});
  }

  setInvisible = () => {
    this.setState({visible: false});
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  render() {
    let visibility = this.state.visible ? 'block' : 'none';
    return <React.Fragment>
      <span className="amateur-login-link" onClick={this.setVisible}>Login</span>
      <div
        className="amateur-modal-container"
        style={{display: visibility}}
        onClick={this.setInvisible}
      >
        <div className="amateur-modal" onClick={this.stopPropagation}>
          <span onClick={this.setInvisible} className="amateur-close-modal-button">
            &#x2715;
          </span>
          <Form data={this.props.data} />
        </div>
      </div>
    </React.Fragment>;
  }

}

export default Login;
