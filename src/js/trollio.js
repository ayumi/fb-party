class Trollio {
  constructor() {
    console.log("Initializing Troll.io Extension");

    this.visible = true;

    // Insert iframe
    this.iframe = document.createElement("iframe");
    this.iframe.id = "trollio-frame";

    let pageHref = encodeURIComponent( location.href );
    let frameBaseUrl = chrome.extension.getURL("frame/frame.html");
    this.iframe.src = `${frameBaseUrl}?q=${pageHref}`;
    // iframe.src = frameBaseUrl;

    document.body.appendChild( this.iframe );
  }

  toggle() {
    this.visible = !( this.visible );
    if (this.visible) {
      this.iframe.className = this.iframe.className.replace( /\bhidden\b/, '' );
    } else {
      this.iframe.classList.add('hidden');
    }
  }
}

var trollio = null;
var visible = false;


function trollioActivator(request, sender, sendResponse) {
  if (trollio == null) {
    trollio = new Trollio();
  } else {
    trollio.toggle();
  }
}

chrome.runtime.onMessage.addListener(trollioActivator);
