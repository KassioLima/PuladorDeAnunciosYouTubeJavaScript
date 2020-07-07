// this is the background code...
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if(tab)
    if (tab.url.includes("youtube.com"))
    {
        // for the current tab, inject the "inject.js" file & execue it
        chrome.tabs.executeScript(tab.id,
        {
            code: 'var tabId = '+tabId+';'
        },
        function()
        {
            chrome.tabs.executeScript(tab.id,
            {
                file: 'inject.js'
            },
            function()
            {});
        });
    }
});