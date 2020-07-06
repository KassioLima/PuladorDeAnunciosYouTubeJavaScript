// this is the background code...
var controle = 0;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if(parseInt(controle) === 0)
    {
        controle++;
        console.log("Change inifo");
        console.log(changeInfo);
        console.log("tab");
        console.log(tab);
        // if(tab.url.includes("youtube.com"))
        // {
        //     // for the current tab, inject the "inject.js" file & execue it
        //     chrome.tabs.executeScript(tab.ib,
        //     {
        //         file: 'inject.js'
        //     });
        // }
    }
});
