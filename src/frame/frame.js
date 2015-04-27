// ES6 because it's not precompiled because I don't feel like updating build.rb

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

function setUserAgent(window, userAgent) {
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = { get: function () { return userAgent; } };
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
          userAgent: userAgentProp
      });
    }
  }
}

var iframe = document.getElementById('frame-iframe');

var version = chrome.app.getDetails().version;
setUserAgent( iframe.contentWindow, 'Troll.io Chrome/' + version );

// The extension passes us the original request as a query param.
var requestUrl = getQueryParam('uri');
if ( requestUrl.search(/^https/) >= 0 ) {
  var protocol = 'https';
} else {
  var protocol = 'http';
}
var trollioUrl = protocol + "://local.troll.io:9001?agent=chrome&uri=" + requestUrl;
iframe.src = trollioUrl;
