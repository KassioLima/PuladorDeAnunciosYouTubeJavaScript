// this is the background code...
function createCookie (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";

}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
createCookie('pulador', null, null);
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if(tab)
    if(getCookie('pulador').split(",").indexOf(""+tabId) < 0)
    {
        if (tab.url.includes("youtube.com"))
        {
            var a = getCookie('pulador').split(",");
            var b = [tabId];
            var c = a.concat(b);
            var d = c.filter((item, pos) => c.indexOf(item) === pos);
            createCookie('pulador', d, null);
            // for the current tab, inject the "inject.js" file & execue it
            chrome.tabs.executeScript(tab.ib,
            {
                file: 'inject.js'
            }, function(result) {
                    // Process |result| here (or maybe do nothing at all).
                });
        }
        else if(!tab.url.includes("chrome://extensions/"))
        {
            var a = getCookie('pulador').split(",");
            a.splice(a.indexOf(""+tabId));
            createCookie('pulador', a, null);
        }
    }
});
chrome.tabs.onRemoved.addListener(function (tabId, changeInfo, tab)
{
    var a = getCookie('pulador').split(",");
    a.splice(a.indexOf(""+tabId));
    createCookie('pulador', a, null);
});