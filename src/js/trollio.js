class Trollio {
  constructor() {

    this.visible = true;

    // Insert iframe
    // this.iframe = document.createElement("iframe");
    // this.iframe.id = "trollio-frame";
    //
    // let pageHref = encodeURIComponent( location.href );
    // let frameBaseUrl = chrome.extension.getURL("frame/frame.html");
    // this.iframe.src = `${frameBaseUrl}?uri=${pageHref}`;
    //
    // document.body.appendChild( this.iframe );


    this.iframe = document.createElement("div");
    this.iframe.id = "trollio-frame";
    this.iframe.innerHTML = `
<div class="content">
  <h1>fb party</h1>
  <h2>1. Paste emails separated by line breaks.</h2>
  <textarea id="email-list"></textarea>

  <h2>2. Open the invite modal then push the button.</h2>
  <div>
    <input id="emails-per-run" type="text" value=2 />
    peeps per press
  </div>
  <div>
    <button id="invite-button">INVITE PEEPS!</button>
  </div>
</div>
    `;
    document.body.appendChild( this.iframe );
    App.Fn.init();
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
