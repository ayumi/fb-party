console.log("In frame.js");

var iframe = document.getElementById('frame-iframe');

// The extension passes us the original request as a query param.
var requestUrl = location.search;
var trollioUrl = "http://local.troll.io:9001?q=" + requestUrl;
iframe.src = trollioUrl;
