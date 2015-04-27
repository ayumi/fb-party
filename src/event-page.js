function activateTrollio() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
  });
}

chrome.browserAction.onClicked.addListener(activateTrollio);
