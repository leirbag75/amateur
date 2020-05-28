import $ from 'jquery';

function Http(parentComponent) {

  this.parentComponent = parentComponent;

  this.start = function() {
    return this;
  }

}

export default Http;
