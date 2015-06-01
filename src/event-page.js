// Toggle on/off
function activateTrollio() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "toggle"});
  });
}

chrome.browserAction.onClicked.addListener(activateTrollio);


// Troll count button -- setup listener
function updateTrollCount(request, sender, sendResponse) {
  // console.log('event page response GET');

  var badgeObj = { text: '', tabId: sender.tab.id };
  if ( request.value > 0 ) {
    badgeObj.text = request.value.toString();
  }
  chrome.browserAction.setBadgeText(badgeObj);
}
chrome.runtime.onMessage.addListener(updateTrollCount);

// Button background color
function setButtonColor(color) {
  var colorObj = { color: color };
  chrome.browserAction.setBadgeBackgroundColor(colorObj);
}
setButtonColor([ 219, 64, 151, 127 ]);