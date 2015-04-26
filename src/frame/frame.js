console.log("In frame.js");

function getQueryParam(param) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === param) {
      return pair[1];
    }
  }
  return(null);
}


var iframe = document.getElementById('frame-iframe');

// The extension passes us the original request as a query param.
var requestUrl = getQueryParam('q');
var trollioUrl = "http://local.troll.io:9001?q=" + requestUrl;
iframe.src = trollioUrl;
