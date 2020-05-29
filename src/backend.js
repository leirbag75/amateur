import Http from './http';

function Backend(parentComponent) {

  this.parentComponent = parentComponent;

  this.start = function() {
    Http.start().done(result => {
      this.parentComponent.setState({data: result});
    });
    return this;
  }

  this.getLink = function(link, formData) {
    let request = {
      url: link.url,
      method: link.method,
      dataType: "application/json"
    };
    formData.populate(request);
    Http.ajax(request).done(result => {
      this.parentComponent.setState({data: result});
    });
  }

}

export default Backend;
