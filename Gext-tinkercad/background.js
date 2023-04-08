/* chrome.action.onClicked.addListener((tab) => {
    if (tab.url.indexOf("https://www.tinkercad.com/things/") != -1) {
        chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["lib/jquery-3.5.1.min.js", "contentScript.js"] });
    }
});
 */
chrome.action.onClicked.addListener((tab) => {
    if (tab.url.indexOf("https://www.tinkercad.com/things/") != -1) {
        chrome.scripting.executeScript(tab.id, { "file": "lib/jquery-3.5.1.min.js" }, function() {
            chrome.scripting.executeScript(tab.id, { "file": "lib/mqtt.min.js" }, function() {
                chrome.scripting.executeScript(tab.id, { "file": "contentScript.js" });
            });
        });
    }
});