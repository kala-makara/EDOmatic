chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();

    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        let exampleRule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: "edom.ui.ac.id" },
                }),
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
        };

        let rules = [exampleRule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
});
