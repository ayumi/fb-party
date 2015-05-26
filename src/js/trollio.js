class Trollio {
  constructor() {
    console.log("Initializing Troll.io Extension");

    this.visible = true;

    // Insert iframe
    this.iframe = document.createElement("iframe");
    this.iframe.id = "trollio-frame";

    let pageHref = encodeURIComponent( location.href );
    let frameBaseUrl = chrome.extension.getURL("frame/frame.html");
    this.iframe.src = `${frameBaseUrl}?uri=${pageHref}`;

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


// Get Troll count
function notifyTrollCount(count) {
  chrome.runtime.sendMessage({ action: "update-troll-count", value: count });
}

let pageHref = encodeURIComponent( location.href );
// let baseUrl = "https://chrome.troll.io/yuris/message_count";
let baseUrl = "http://chrome.local.troll.io:9001/yuris/message_count";
let url = `${baseUrl}?uri=${pageHref}`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var resp = JSON.parse( xhr.responseText );
    console.log(`Troll count: ${resp.value}`)
    notifyTrollCount( resp.value );
  }
}
xhr.send();

notifyTrollCount(0);
