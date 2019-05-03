chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostContains: '',
                },
            })],
            actions: [
                new chrome.declarativeContent.ShowPageAction(),
            ],
        }]);
    });
});

let TabList: number[] = [];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (TabList.some(v => v === tabId)) {
        if (changeInfo.status === 'complete') {
                const temp: number[] = [];
                TabList.forEach(v => {
                    if (v === tabId) {
                        return;
                    }
                    temp.push(v);
                });
                TabList = temp;
        }
        return;
    }
    TabList.push(tabId);
    const isChrome = (tab.url as string).match(/^chrome/);
    if (!isChrome) {
        chrome.tabs.executeScript(tabId, {
            file: 'content.js',
        });
    }
});
