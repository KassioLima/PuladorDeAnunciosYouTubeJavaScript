// this is the background code...
var controle = 0;
var intervalo = setInterval(function(){}, 60*1000);
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if(controle === 0)
    {
        controle++;
        console.log("Chamou "+controle);
        // if(tab.url.includes("youtube.com"))
        // {
        //     // for the current tab, inject the "inject.js" file & execue it
        //     chrome.tabs.executeScript(tab.ib,
        //     {
        //         file: 'inject.js'
        //     });
        // }
    }
    else
    {
        clearInterval(intervalo);
        intervalo = setInterval(function ()
        {
            controle = 0;
        }, 2);
    }
});
