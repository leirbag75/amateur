
function FormData(data) {

  this.populate = function(request) {
    if(Object.keys(data).length === 0 && data.constructor === Object) { // if empty
      return;
    }
    request.contentType = "application/json";
    request.data = JSON.stringify(data);
  }

}

export default FormData;
