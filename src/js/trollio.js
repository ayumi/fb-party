class Trollio {
  constructor() {
    console.log("Initializing Troll.io Extension");

    let iframe = document.createElement("iframe");
    iframe.id = "trollio-frame";

    let pageHref = encodeURIComponent( location.href );
    let frameBaseUrl = chrome.extension.getURL("frame/frame.html");
    iframe.src = `${frameBaseUrl}?q=${pageHref}`;
    // iframe.src = frameBaseUrl;

    document.body.appendChild(iframe);
  }
}

var trollio = null;


function trollioActivator(request, sender, sendResponse) {
  trollio = new Trollio();
}

chrome.runtime.onMessage.addListener(trollioActivator);
