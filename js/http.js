var http = (function(global) {
  'use strict';

  function getRequest(request) {
    //
  }

  function postRequest(request) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: request.url,
        type: 'POST',
        data: JSON.stringify(request.data),
        headers: request.headers,
        success: function(response, status, xhr) { 
          resolve({
            responseText: (xhr.responseText) ? xhr.responseText : "",
            responseHeaders: xhr.getAllResponseHeaders().trim()
          });
        },
        error: function(xhr, status, error) {
          reject({
            responseText: (xhr.responseText) ? xhr.responseText : "",
            responseHeaders: xhr.getAllResponseHeaders().trim()
          });
        },
        complete: function (xhr, status) {
          // console.log(status);
        }
      });
    });
  }

  return {
    getRequest: getRequest,
    postRequest: postRequest
  }
})(this);
