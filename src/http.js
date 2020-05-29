import $ from 'jquery';

function Http(parentComponent) {

  this.parentComponent = parentComponent;

  this.start = function() {
    this.parentComponent.setState({data: [{
      name: "login",
      type: "link",
      url: "/login",
      method: "POST",
      parameters: [
        {
          name: "username",
          label: "Username",
          type: "text"
        },
        {
          name: "password",
          label: "Password",
          type: "text"
        }
      ]
    }]});
    return this;
  }

}

export default Http;
