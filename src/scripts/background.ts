chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "update-icon") {
        // Update the extension icon based on the page URL
        if (message.url.includes("edom.ui.ac.id")) {
            chrome.action.setIcon({ path: "../dmabot.png" });
        } else {
            chrome.action.setIcon({ path: "../favicon.png" });
        }
    }
});
