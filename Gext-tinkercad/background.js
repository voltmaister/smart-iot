chrome.action.onClicked.addListener((tab) => {
    if (tab.url.indexOf("https://www.tinkercad.com/things/") != -1) {
        chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["lib/mqtt.min.js", "lib/jquery-3.5.1.min.js", "contentScript.js"] });
    }
});
