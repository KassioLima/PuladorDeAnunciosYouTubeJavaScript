// this is the background code...
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{

    if(changeInfo.status === 'complete' && tab.url.includes("youtube.com"))
    {
        // for the current tab, inject the "inject.js" file & execue it
        chrome.tabs.executeScript(tab.ib,
        {
            file: 'inject.js'
        });

    }
});
