// Toggle on/off
function activateTrollio() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "toggle"});
  });
}

chrome.browserAction.onClicked.addListener(activateTrollio);


// Listen for Troll count
function updateTrollCount(request, sender, sendResponse) {
  console.log('event page response GET');

  var badgeObj = { text: '', tabId: sender.tab.id };
  if ( request.value > 0 ) {
    badgeObj.text = request.value.toString();
  }
  chrome.browserAction.setBadgeText(badgeObj);
}

chrome.runtime.onMessage.addListener(updateTrollCount);
